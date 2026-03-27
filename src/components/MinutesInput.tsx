import type { ChangeEvent } from "react";

const MinutesInput = ({
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
      <label className="block mb-1 font-bold">Minutes Read</label>
      <input
        type="number"
        name="minutesRead"
        value={value}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  );
};

export default MinutesInput;
