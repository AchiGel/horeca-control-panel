import type { ChangeEvent, FormEvent } from "react";
import MinutesInput from "./MinutesInput";
import Select from "./Select";
import StatusMessage from "./StatusMessage";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import type { ArticleFormType } from "../constants/article";

type Props = {
  form: ArticleFormType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  onSubmit: (e: FormEvent) => void;
  loading: boolean;
  submitLabel: string;
  message: string | null;
};

const ArticleForm = ({
  form,
  handleChange,
  onSubmit,
  loading,
  submitLabel,
  message,
}: Props) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <TextInput
        inputCategory="title"
        value={form.title}
        handleChange={handleChange}
      />
      <TextInput
        inputCategory="slug"
        value={form.slug}
        handleChange={handleChange}
      />
      <TextInput
        inputCategory="description"
        value={form.description}
        handleChange={handleChange}
      />
      <TextArea value={form.body} handleChange={handleChange} />
      <Select value={form.category} handleChange={handleChange} />
      <TextInput
        inputCategory="imageUrl"
        value={form.imageUrl}
        handleChange={handleChange}
      />
      <MinutesInput value={form.minutesRead} handleChange={handleChange} />
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Loading..." : submitLabel}
      </button>
      <StatusMessage message={message} />
    </form>
  );
};

export default ArticleForm;
