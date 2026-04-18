import { useRef } from "react";

/**
 * SearchBar — reusable controlled search input
 *
 * Props:
 *   value       string   — controlled value
 *   onChange    fn(val)  — called on every keystroke
 *   onSearch    fn(val)  — called on Enter key press
 *   placeholder string   — input placeholder text
 *   className   string   — extra wrapper classes
 */
function SearchBar({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search…",
  className = "",
}) {
  const inputRef = useRef(null);

  const handleKey = (e) => {
    if (e.key === "Enter" && onSearch) onSearch(value);
    if (e.key === "Escape") {
      onChange?.("");
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    onChange?.("");
    inputRef.current?.focus();
  };

  return (
    <div className={`relative w-full ${className}`}>

      {/* Search icon */}
      <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        role="searchbox"
        aria-label={placeholder}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKey}
        className={[
          // layout
          "w-full h-[50px] pl-11 pr-10 rounded-xl",
          // typography
          "text-base text-slate-100 placeholder-slate-500",
          // background & border
          "bg-[#0a192f] border border-white/10",
          // hover
          "hover:border-blue-500/40 hover:bg-[#0d1f3c]",
          // focus
          "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#0d1f3c]",
          // transition
          "transition-all duration-200",
        ].join(" ")}
      />

      {/* Clear button — only visible when there is a value */}
      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute inset-y-0 right-3 flex items-center px-1 text-slate-500 hover:text-slate-200 transition-colors duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
