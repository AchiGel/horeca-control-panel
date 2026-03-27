export default function StatusMessage({ message }: { message: string | null }) {
  if (!message) return null;
  const isError =
    message.toLowerCase().includes("failed") ||
    message.toLowerCase().includes("not");
  return (
    <div className={isError ? "text-red-600" : "text-green-600"}>{message}</div>
  );
}
