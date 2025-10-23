import API from "../api";

export default function NewsCard({ item, onSummarize }) {
  const handleSummarize = async () => {
    const payload = { text: item.content || "", url: item.url || "" };
    try {
      const res = await API.post("/summary", payload);
      onSummarize(res.data);
    } catch {
      alert("Failed to summarize this news");
    }
  };

  return (
    <div className="bg-white rounded shadow overflow-hidden flex flex-col">
      {item.urlToImage && <img src={item.urlToImage} alt={item.title} className="h-48 w-full object-cover" />}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
        <div className="flex justify-between items-center">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read
            </a>
          )}
          <button
            onClick={handleSummarize}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Summarize
          </button>
        </div>
      </div>
    </div>
  );
}
