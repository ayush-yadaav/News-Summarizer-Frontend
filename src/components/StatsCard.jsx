import { useEffect, useState } from "react";
import API from "../api";

export default function StatsCard() {
  const [stats, setStats] = useState({ total: 0, today: 0 });

  useEffect(() => {
    let mounted = true;
    API.get("/summary/stats")
      .then((res) => mounted && setStats(res.data))
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  return (
    <div className="flex flex-wrap gap-6 mb-6">
      <div className="flex-1 min-w-[200px] bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center">
        <h4 className="text-gray-500 mb-2">Total Summaries</h4>
        <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
      </div>
      <div className="flex-1 min-w-[200px] bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center">
        <h4 className="text-gray-500 mb-2">Today's Summaries</h4>
        <p className="text-3xl font-bold text-gray-800">{stats.today}</p>
      </div>
    </div>
  );
}
