import { useState, type ChangeEvent, type FormEvent } from "react";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import MinutesInput from "./components/MinutesInput";
import { postArticle } from "./api/api";

const App = () => {
  const INITIAL_FORM = {
    title: "",
    description: "",
    slug: "",
    body: "",
    category: "restaurants",
    imageUrl: "",
    minutesRead: "",
  };
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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
    setLoading(true);
    setMessage(null);
    try {
      await postArticle(form);
      setMessage("Article posted successfully!")
      setForm(INITIAL_FORM);
    } catch {
      setMessage("Failed to post article. Please try again.");
    } finally {
      setLoading(false);
    }
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

        {/* Slug */}
        <TextInput
          inputCategory="slug"
          value={form.slug}
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
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Article"}
        </button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
};

export default App;
