const DebounceSearch = ({ func, wait }) => {
  let timeout;

  const debouncedFunction = (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  const cancel = () => {
    clearTimeout(timeout);
  };

  return { debouncedFunction, cancel };
};

export default DebounceSearch;
