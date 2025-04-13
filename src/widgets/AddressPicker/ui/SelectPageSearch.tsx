import { useUnit } from "effector-react";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { setErrorEvent } from "@/shared/api";
import { SearchSuggestionInput } from "@/shared/ui/SearchSuggestionInput";

import { SuggestResponseItem, suggest } from "../api";

export const SelectPageSearch = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestResponseItem[]>([]);

  const setError = useUnit(setErrorEvent);

  const handleSearch = useCallback(
    (value: string) => {
      if (!value) {
        return;
      }
      setLoading(true);
      suggest(value)
        .then((response) => {
          setSuggestions(response.data.results);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setError],
  );

  const handleSelect = (suggestion: SuggestResponseItem) => {
    console.debug(suggestion);
  };

  return (
    <SearchSuggestionInput
      value={value}
      setValue={setValue}
      loading={loading}
      onSearch={handleSearch}
      suggestions={suggestions}
      renderSuggestion={(suggestion) => (
        <div>
          <h2>{suggestion.title.text}</h2>
          <h3>{suggestion.subtitle?.text}</h3>
        </div>
      )}
      getSuggestionValue={(suggestion) =>
        suggestion.subtitle?.text || suggestion.title.text
      }
      getSuggestionId={() => uuidv4()}
      onSelect={handleSelect}
      className="px-4"
    />
  );
};
