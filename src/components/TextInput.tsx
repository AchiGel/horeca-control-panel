import type { ChangeEvent } from "react";

const TextInput = ({
  inputCategory,
  value,
  handleChange,
}: {
  inputCategory: string;
  value: string;
  handleChange: (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
      Element
    >,
  ) => void;
}) => {
  return (
    <div>
      <label className="block mb-1">{inputCategory}</label>
      <input
        type="text"
        name={inputCategory}
        value={value}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
    </div>
  );
};

export default TextInput;
