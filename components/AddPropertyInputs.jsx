export const TextInput = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="border rounded w-full py-2 px-3 mb-2"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export const SelectInput = ({ id, name, label, options, required }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <select
      id={id}
      name={name}
      className="border rounded w-full py-2 px-3"
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export const TextArea = ({ id, name, label, rows = 4, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      className="border rounded w-full py-2 px-3"
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  </div>
);

export const CheckboxInput = ({ id, name, label, value }) => (
  <div>
    <input type="checkbox" id={id} name={name} value={value} className="mr-2" />
    <label htmlFor={id}>{label}</label>
  </div>
);

export const FileInput = ({ id, name, label, accept, multiple, required }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      type="file"
      id={id}
      name={name}
      className="border rounded w-full py-2 px-3"
      accept={accept}
      multiple={multiple}
      required={required}
    />
  </div>
);
