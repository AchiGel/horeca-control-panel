import { useState, type ChangeEvent, type FormEvent } from "react";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import MinutesInput from "./components/MinutesInput";
import { postArticle } from "./api/api";

const App = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    body: "",
    category: "restaurants",
    imageUrl: "",
    minutesRead: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    postArticle(form);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Horeca Georgia Control Panel</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <TextInput
          inputCategory={"title"}
          value={form.title}
          handleChange={handleChange}
        />

        {/* Description */}

        <TextInput
          inputCategory={"description"}
          value={form.description}
          handleChange={handleChange}
        />

        {/* Body */}
        <TextArea value={form.body} handleChange={handleChange} />

        {/* Category */}
        <Select value={form.category} handleChange={handleChange} />

        {/* Image URL */}

        <TextInput
          inputCategory="imageUrl"
          value={form.imageUrl}
          handleChange={handleChange}
        />

        {/* Minutes Read */}
        <MinutesInput value={form.minutesRead} handleChange={handleChange} />

        {/* Submit */}
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Post Article
        </button>
      </form>
    </div>
  );
};

export default App;
