import { useState, type ChangeEvent, type FormEvent } from "react";
import { postArticle } from "../api/api";
import { INITIAL_FORM } from "../constants/article";
import ArticleForm from "../components/ArticleForm";
import toast from "react-hot-toast";

const PostArticle = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

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
    try {
      await postArticle(form);
      toast.success("Article posted successfully!");
      setForm(INITIAL_FORM);
    } catch {
      toast.error("Failed to post article. Please try again.");
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
    />
  );
};

export default PostArticle;
