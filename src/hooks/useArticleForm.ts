import { useState, type ChangeEvent } from "react";
import { INITIAL_FORM } from "../constants/article";

export const useArticleForm = (initial = INITIAL_FORM) => {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    form,
    setForm,
    loading,
    setLoading,
    message,
    setMessage,
    handleChange,
  };
};
