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
        <option value="restaurants">Restaurants</option>
        <option value="cafes">Cafes</option>
        <option value="catering">Catering</option>
        <option value="hotels">Hotels</option>
        <option value="management">Management</option>
        <option value="trends">Trends</option>
      </select>
    </div>
  );
};

export default Select;
