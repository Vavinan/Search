// InputField.js
import React from "react";
import search_img from "../Images/search.png";

const InputField = ({
  inputRef,
  inputValue,
  handleInputChange,
  label,
  disabled,
  description,
  handleKeyDown,
  setIsInputFocused,
  setSelectedOptions
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={label}
        className={`block w-full p-3 border border-gray-300 rounded-md ${
          disabled ? "bg-gray-100" : ""
        }`}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        style={{
          backgroundImage: `url(${search_img})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "2rem",
        }}
      />
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default InputField;
