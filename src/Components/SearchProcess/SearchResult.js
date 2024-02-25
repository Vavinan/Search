import React from "react";

const SearchResult = ({
  option,
  index,
  handleSelect,
  highlightedIndex,
  setHighlightedIndex,
  selectedOptions,
  customSearchResultLabel,
  customSearchResultTransform,
  customSearchResultComponent,
}) => {
  const label = customSearchResultLabel ? customSearchResultLabel(option) : option.label;
  const transformedLabel = customSearchResultTransform ? customSearchResultTransform(label) : label;
  const customComponent = customSearchResultComponent ? customSearchResultComponent(option) : transformedLabel;
  const isSelected = option === highlightedIndex;
  const isChecked = selectedOptions.includes(option);

  return (
    <div
      key={index}
      className={`p-3 cursor-pointer hover:bg-gray-100 ${isSelected ? "bg-blue-100" : ""}`}
      onClick={(e) => {
        handleSelect(option, e);
      }}
      onMouseEnter={() => setHighlightedIndex(index)}
    >
      {isChecked ? "✓" : "□"} {customComponent}
    </div>
  );
};

export default SearchResult;
