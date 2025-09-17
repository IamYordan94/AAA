import { useState } from "react";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // TODO: Fetch real admin data from API
  const stats = {
    activeCycles: 1,
    totalEnrollments: 45,
    pendingSubmissions: 12,
    totalRevenue: 2250,
  };

  const submissions = [
    { id: 1, player: "player@example.com", challenge: "Find the Windmill", status: "pending" },
    { id: 2, player: "player2@example.com", challenge: "Canal Photo", status: "approved" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-300">Manage Amsterdam Dash cycles and submissions</p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-600 rounded-lg p-6">
            <h3 className="text-blue-200 mb-2">Active Cycles</h3>
            <p className="text-3xl font-bold text-white">{stats.activeCycles}</p>
          </div>
          
          <div className="bg-green-600 rounded-lg p-6">
            <h3 className="text-green-200 mb-2">Total Enrollments</h3>
            <p className="text-3xl font-bold text-white">{stats.totalEnrollments}</p>
          </div>
          
          <div className="bg-orange-600 rounded-lg p-6">
            <h3 className="text-orange-200 mb-2">Pending Submissions</h3>
            <p className="text-3xl font-bold text-white">{stats.pendingSubmissions}</p>
          </div>
          
          <div className="bg-purple-600 rounded-lg p-6">
            <h3 className="text-purple-200 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-white">€{stats.totalRevenue}</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("submissions")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "submissions"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Submissions
            </button>
            <button
              onClick={() => setActiveTab("cycles")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "cycles"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Cycles
            </button>
          </div>

          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">System Overview</h2>
              <p className="text-gray-300">Admin overview content will be implemented here.</p>
            </div>
          )}

          {activeTab === "submissions" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Pending Submissions</h2>
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div key={submission.id} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">{submission.challenge}</p>
                        <p className="text-gray-300">{submission.player}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                          Approve
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "cycles" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Game Cycles</h2>
              <p className="text-gray-300">Cycle management will be implemented here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
