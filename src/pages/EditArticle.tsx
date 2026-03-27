import { useState, type ChangeEvent, type FormEvent } from "react";
import { fetchArticleBySlug, editArticle } from "../api/api";
import { INITIAL_FORM } from "../constants/article";
import ArticleForm from "../components/ArticleForm";

const EditArticle = () => {
  const [slugSearch, setSlugSearch] = useState("");
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleFetch = async () => {
    setFetching(true);
    setMessage(null);
    try {
      const article = await fetchArticleBySlug(slugSearch);
      setForm(article);
    } catch {
      setMessage("Article not found.");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await editArticle(form);
      setMessage("Article updated successfully!");
    } catch {
      setMessage("Failed to update article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Slug lookup */}
      <div className="flex gap-2">
        <input
          className="border px-3 py-2 rounded w-full"
          placeholder="Enter slug to load article..."
          value={slugSearch}
          onChange={(e) => setSlugSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={handleFetch}
          disabled={fetching || !slugSearch}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {fetching ? "Loading..." : "Load"}
        </button>
      </div>

      <ArticleForm
        form={form}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        submitLabel={"Edit Article"}
        message={message}
      />
    </div>
  );
};

export default EditArticle;
