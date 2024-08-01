interface InputProps {
  id: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export const TextInput = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  required,
}: InputProps) => (
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

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export const SelectInput = ({
  id,
  name,
  label,
  options,
  required,
}: SelectProps) => (
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

interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  rows?: number;
  placeholder?: string;
}

export const TextArea = ({
  id,
  name,
  label,
  rows = 4,
  placeholder,
}: TextAreaProps) => (
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

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  value: string;
}

export const CheckboxInput = ({ id, name, label, value }: CheckboxProps) => (
  <div>
    <input type="checkbox" id={id} name={name} value={value} className="mr-2" />
    <label htmlFor={id}>{label}</label>
  </div>
);

interface FileInputProps {
  id: string;
  name: string;
  label: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
}

export const FileInput = ({
  id,
  name,
  label,
  accept,
  multiple,
  required,
}: FileInputProps) => (
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
