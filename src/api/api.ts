const BASE_URL = import.meta.env.VITE_BASE_URL;

type FormType = {
  title: string;
  description: string;
  slug: string;
  body: string;
  category: string;
  imageUrl: string;
  minutesRead: string;
};

const transformForm = (form: FormType) => ({
  ...form,
  body: form.body.split("\n"),
  categories: [form.category],
  minutesRead: Number(form.minutesRead),
});

export const postArticle = async (form: FormType) => {
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transformForm(form)),
  });
  if (!res.ok) throw new Error("Failed to post article");
  return res.json();
};

export const editArticle = async (form: FormType, slug: string) => {
  const res = await fetch(`${BASE_URL}/articles/slug/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transformForm(form)),
  });
  if (!res.ok) throw new Error("Failed to edit article");
  return res.json();
};

export const fetchArticleBySlug = async (slug: string) => {
  const res = await fetch(`${BASE_URL}/articles/slug/${slug}`);
  if (!res.ok) throw new Error("Article not found");
  const data = await res.json();
  return {
    ...data,
    body: Array.isArray(data.body) ? data.body.join("\n") : data.body,
  };
};

export const removeArticle = async (slug: string) => {
  const res = await fetch(`${BASE_URL}/articles/slug/${slug}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to remove article");
  return res.json();
};
