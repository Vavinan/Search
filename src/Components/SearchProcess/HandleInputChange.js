import DebounceSearch from "./DebounceSearch";

export default async function HandleInputChange(
  e,
  setInputValue,
  setIsInputFocused,
  searchFunction,
  debounceInterval,
  setFilteredOptions,
  setIsLoading,
  debouncedSearchRef,
  setIsOpen,
  options,
  setDebouncedSearchRef
) {
  const value = e.target.value;
  setInputValue(value);
  setIsInputFocused(true);

  if (searchFunction) {
    setIsLoading(true);
    if (debouncedSearchRef) {
      debouncedSearchRef.cancel();
      setIsOpen(false);
    }
    const { debouncedFunction, cancel } = DebounceSearch({
      func: async () => {
        try {
          const results = await searchFunction(value);
          setFilteredOptions(results);
          setIsLoading(false);
        } catch (error) {
          console.error("Error occurred during search:", error);
          setIsLoading(false);
        }
      },
      wait: debounceInterval,
    });
    setDebouncedSearchRef({ debouncedFunction, cancel });
    debouncedFunction();
  } else {
    setFilteredOptions(
      value.trim().length > 0
        ? options.filter(
            (option) =>
              option.label.toLowerCase().includes(value.toLowerCase())
          )
        : options
    );
  }
  setIsOpen(true);
}


