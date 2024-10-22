import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const userId = "user_id_here"; // Replace with the actual user ID after login

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/user/history",
        { withCredentials: true }
      );
      console.log(response.data);
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
      alert("Failed to fetch history. Check console for details.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(history);
    fetchHistory();
    console.log(history);
  }, []);

  console.log(history);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table className="min-w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Date & Time</th>
                <th className="border border-gray-300 px-4 py-2">User  ID</th>
                {/* Uncomment the line below if you want to include the IP address */}
                {/* <th className="border border-gray-300 px-4 py-2">IP Address</th> */}
            </tr>
        </thead>
        <tbody>
            {history?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{item?.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{item?.userId}</td>
                    {/* Uncomment the line below if you want to include the IP address */}
                    {/* <td className="border border-gray-300 px-4 py-2">{item?.ip}</td> */}
                </tr>
            ))}
        </tbody>
    </table>
);
};

export default StudentHistory;
