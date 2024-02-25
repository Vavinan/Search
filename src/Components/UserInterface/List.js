// DropdownMenu.js
import React from "react";

const List = ({
  popperRef,
  styles,
  isOpen,
  inputRef,
  filteredOptions,
  isLoading,
  renderSearchResult,
}) => {
  return (
    <div
      ref={popperRef}
      style={{
        ...styles.popper,
        marginTop: "25px",
        maxHeight: "200px",
        overflowY: "auto",
        top: isOpen ? `${inputRef.current.offsetHeight - 20}px` : "-9999px",
        left: isOpen ? `${inputRef.current.offsetLeft}px` : "-9999px",
      }}
      className={`absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg text-sm ${
        isOpen ? "" : "hidden"
      }`}
    >
      {isLoading ? (
        <div className="p-2">
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : (
        filteredOptions.map(renderSearchResult)
      )}
    </div>
  );
};

export default List;
