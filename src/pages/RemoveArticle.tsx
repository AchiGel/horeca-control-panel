import { useState } from "react";
import { removeArticle } from "../api/api";
import StatusMessage from "../components/StatusMessage";

const RemoveArticle = () => {
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRemove = async () => {
    if (!slug) return;
    setLoading(true);
    setMessage(null);
    try {
      await removeArticle(slug);
      setMessage("Article removed successfully!");
      setSlug("");
    } catch {
      setMessage("Failed to remove article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter article slug..."
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <button
        onClick={handleRemove}
        disabled={loading || !slug}
        className="bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Removing..." : "Remove Article"}
      </button>
      <StatusMessage message={message} />
    </div>
  );
};

export default RemoveArticle;
