const asyncSearchFunction = async (options, query,debounceInterval) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredOptions = filterDeeplyNestedOptions(options, query);
        resolve(filteredOptions);
      }, debounceInterval); 
    });
  };

  
  const filterDeeplyNestedOptions = (options, query) => {
    return options.filter(option => {
      if (option.label.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      if (option.subLabel && option.subLabel.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      if (option.options) {
        const nestedFiltered = filterDeeplyNestedOptions(option.options, query);
        return nestedFiltered.length > 0;
      }
      return false;
    });
  };
  
  
  export default asyncSearchFunction;
  