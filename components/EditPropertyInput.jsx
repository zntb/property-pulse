const EditPropertyInput = ({
  label,
  type,
  id,
  name,
  placeholder,
  required,
  defaultValue,
  options,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          className="border rounded w-full py-2 px-3"
          required={required}
          defaultValue={defaultValue}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className="border rounded w-full py-2 px-3"
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default EditPropertyInput;
