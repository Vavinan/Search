import React, { useState, useEffect, useRef } from "react";
import { usePopper } from "react-popper";
import HandleKeyDownFunc from "./HandleKeyDownFunc";
import HandleInputChange from "./HandleInputChange";
import InputField from "../UserInterface/InputField";
import List from "../UserInterface/List";
const SearchDropdown = ({
  label,
  description,
  options,
  searchFunction,
  searchOnFocus = false,
  disabled = false,
  customSearchResultLabel,
  customSearchResultTransform,
  customSearchResultComponent,
  debounceInterval = 1000,
  setSelectedOptions,
  selectedOptions
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef();
  const popperRef = useRef();
  const [debouncedSearchRef, setDebouncedSearchRef] = useState(null);

  const { styles, attributes } = usePopper(inputRef, popperRef.current, {
    placement: "bottom-start",
  });

  useEffect(() => {
    // Cleanup previous debounced search when unmounting or when a new one starts
    return () => {
      if (debouncedSearchRef) {
        debouncedSearchRef.cancel();
      }
    };
  }, [debouncedSearchRef]);

  const handleInputChange = (e) => {
    HandleInputChange(
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
    );
  };

  const handleSelect = (option, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (option) {
      const isChecked = selectedOptions.some(
        (opt) => opt.value === option.value
      );
      if (!isChecked) {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      } else {
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((opt) => opt.value !== option.value)
        );
      }
    }

    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    HandleKeyDownFunc({
      e,
      key: e.key,
      highlightedIndex,
      setHighlightedIndex,
      setIsOpen,
      filteredOptions,
      handleSelect,
    });
  };

  const handleClickAway = (e) => {
    if (
      !inputRef.current.contains(e.target) &&
      !popperRef.current.contains(e.target) &&
      isInputFocused === false
    ) {
      setIsOpen(false);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (searchOnFocus) {
      setIsOpen(true);
    }
  }, [searchOnFocus]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.addEventListener("mousedown", handleClickAway);
    } else {
      inputRef.current.removeEventListener("mousedown", handleClickAway);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !popperRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const renderSearchResult = (option, index) => {
    const label = customSearchResultLabel
      ? customSearchResultLabel(option)
      : option.label;
    const transformedLabel = customSearchResultTransform
      ? customSearchResultTransform(option)
      : label;
    const customComponent = customSearchResultComponent
      ? customSearchResultComponent(option)
      : transformedLabel;
    const isSelected = option === filteredOptions[highlightedIndex];
    const isChecked = selectedOptions.includes(option);

    return (
      <div
        key={index}
        className={`p-3 cursor-pointer hover:bg-gray-100 ${
          isSelected ? "bg-blue-100" : ""
        }`}
        onClick={(e) => {
          handleSelect(option, e);
        }}
        onMouseEnter={() => setHighlightedIndex(index)}
      >
        {isChecked ? "✓" : "□"} {customComponent}
      </div>
    );
  };

  return (
    <div className="relative">
    <InputField
        inputRef={inputRef}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        label={label}
        disabled={disabled}
        description={description}
        handleKeyDown={handleKeyDown}
        setIsInputFocused={setIsInputFocused}
        setSelectedOptions={setSelectedOptions}
      />
      <List
        popperRef={popperRef}
        styles={styles}
        isOpen={isOpen}
        inputRef={inputRef}
        filteredOptions={filteredOptions}
        isLoading={isLoading}
        renderSearchResult={renderSearchResult}
      /> 

    </div>
  );
};

export default SearchDropdown;
