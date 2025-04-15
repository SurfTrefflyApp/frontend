import { SearchSuggestionInput } from "@/shared/ui/SearchSuggestionInput";

import { useSearchController } from "../controller/useSearchController";

export const SelectPageSearch = () => {
  const { value, setValue, loading, suggestions, handleSearch, handleSelect } =
    useSearchController();

  return (
    <SearchSuggestionInput
      value={value}
      setValue={setValue}
      loading={loading}
      onSearch={handleSearch}
      suggestions={suggestions}
      renderSuggestion={(suggestion) => (
        <div>
          <h2>{suggestion.title}</h2>
          <h3>{suggestion.address}</h3>
        </div>
      )}
      getSuggestionValue={(suggestion) => suggestion.address}
      getSuggestionId={(suggestion) => suggestion.id}
      onSelect={handleSelect}
      className="px-4"
    />
  );
};
