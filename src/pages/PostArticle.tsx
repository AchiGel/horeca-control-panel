import { useState, type ChangeEvent, type FormEvent } from "react";
import { postArticle } from "../api/api";
import { INITIAL_FORM } from "../constants/article";
import ArticleForm from "../components/ArticleForm";

const PostArticle = () => {
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
      setMessage("Article posted successfully!");
      setForm(INITIAL_FORM);
    } catch {
      setMessage("Failed to post article. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ArticleForm
      form={form}
      handleChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitLabel={"Post Article"}
      message={message}
    />
  );
};

export default PostArticle;
