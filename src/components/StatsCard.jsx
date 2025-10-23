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
      <div className="flex-1 min-w-[200px] bg-gray-800 p-6 rounded-2xl shadow text-center text-white">
        <h4 className="text-gray-400 mb-2">Total Summaries</h4>
        <p className="text-3xl font-bold">{stats.total}</p>
      </div>
      <div className="flex-1 min-w-[200px] bg-gray-800 p-6 rounded-2xl shadow text-center text-white">
        <h4 className="text-gray-400 mb-2">Today's Summaries</h4>
        <p className="text-3xl font-bold">{stats.today}</p>
      </div>
    </div>
  );
}
