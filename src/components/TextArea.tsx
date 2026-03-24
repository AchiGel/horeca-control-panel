import type { ChangeEvent } from "react";

const TextArea = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (
    e: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement,
      Element
    >,
  ) => void;
}) => {
  return (
    <div>
      <label className="block mb-1">Body (each line = paragraph)</label>
      <textarea
        name="body"
        value={value}
        onChange={handleChange}
        rows={6}
        className="w-full border p-2 rounded"
        required
      />
    </div>
  );
};

export default TextArea;
