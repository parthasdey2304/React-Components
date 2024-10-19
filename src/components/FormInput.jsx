function FormInput({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default FormInput;
