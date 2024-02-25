export default function HandleKeyDownFunc({
    e,
    key,
    highlightedIndex,
    setHighlightedIndex,
    setIsOpen,
    filteredOptions,
    handleSelect
}) {
    if (key === "ArrowUp") {
        setHighlightedIndex(
            (highlightedIndex - 1 + filteredOptions.length) % filteredOptions.length
        );
    } else if (key === "ArrowDown") {
        setHighlightedIndex((highlightedIndex + 1) % filteredOptions.length);
    } else if (key === "Enter") {
        handleSelect(filteredOptions[highlightedIndex], e);
    } else if (key === "Escape") {
        setIsOpen(false);
    }
}

