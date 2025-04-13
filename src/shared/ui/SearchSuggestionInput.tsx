import { Command as CommandPrimitive } from "cmdk";
import { KeyboardEvent, ReactNode, useCallback, useRef, useState } from "react";

import { CommandGroup, CommandItem, CommandList } from "@/shared/ui/command";
import { Input } from "@/shared/ui/input";

import { useDebounceInput } from "../lib/useDebounce";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";

interface SearchSuggestionInput<T> {
  value: string;
  setValue: (value: string) => void;
  loading: boolean;
  onSearch: (search: string) => void;
  suggestions: T[];
  renderSuggestion: (suggestion: T) => ReactNode;
  getSuggestionValue: (suggestion: T) => string;
  getSuggestionId: (suggestion: T) => string | number;
  onSelect: (suggestion: T) => void;
  className?: string;
}

export const SearchSuggestionInput = <T,>({
  value,
  setValue,
  onSearch,
  suggestions,
  renderSuggestion,
  getSuggestionValue,
  getSuggestionId,
  onSelect,
  loading,
  className,
}: SearchSuggestionInput<T>) => {
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useDebounceInput(value, 300, onSearch);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      if (!isOpen) {
        setOpen(true);
      }

      if (event.key === "Enter" && input.value !== "") {
        const suggestionToSelect = suggestions.find(
          (suggestion) => getSuggestionValue(suggestion) === input.value,
        );
        if (suggestionToSelect) {
          console.debug("Selection");
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, suggestions, getSuggestionValue],
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSelect = useCallback(
    (suggestion: T) => {
      onSelect(suggestion);
      inputRef.current?.blur();
    },
    [onSelect],
  );

  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className={className}>
      <div>
        <Input
          variant="secondary"
          ref={inputRef}
          value={value}
          onChange={loading ? undefined : (e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={"Поиск места"}
          className="text-base"
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none",
            isOpen ? "block" : "hidden",
          )}
        >
          <CommandList className="rounded-lg ring-1 ring-slate-200">
            {loading ? (
              <CommandPrimitive.Loading>
                <div className="p-1">
                  <Skeleton className="h-8 w-full" />
                </div>
              </CommandPrimitive.Loading>
            ) : null}
            {suggestions?.length > 0 && !loading ? (
              <CommandGroup>
                {suggestions.map((suggestion) => {
                  return (
                    <CommandItem
                      key={getSuggestionId(suggestion)}
                      value={getSuggestionValue(suggestion)}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelect(suggestion)}
                      className={cn("flex w-full items-center gap-2")}
                    >
                      {renderSuggestion(suggestion)}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : null}
            {!loading ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                Empty
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
