import type { ChangeEvent } from "react";

const Select = ({
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
      <label className="block mb-1 font-bold">Category</label>
      <select
        name="category"
        value={value}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="news">News</option>
        <option value="gastronomy">Gastronomy</option>
        <option value="business-and-tech">Business & Tech</option>
        <option value="hotels">Hotels</option>
        <option value="interviews">Interviews</option>
      </select>
    </div>
  );
};

export default Select;
