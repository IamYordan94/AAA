export function AdminAnalytics() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-gray-300">Advanced analytics and insights for Amsterdam Dash</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Player Engagement</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Daily Active Players</span>
                <span className="text-white font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg Session Time</span>
                <span className="text-white font-semibold">2.3h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Completion Rate</span>
                <span className="text-white font-semibold">68%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Challenge Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Most Popular</span>
                <span className="text-white font-semibold">Q1 Challenges</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Hardest</span>
                <span className="text-white font-semibold">Q7 Challenges</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg Completion</span>
                <span className="text-white font-semibold">4.2 days</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Revenue Analytics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">This Month</span>
                <span className="text-white font-semibold">€2,250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Conversion Rate</span>
                <span className="text-white font-semibold">23%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg Revenue/Player</span>
                <span className="text-white font-semibold">€50</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Amsterdam Map</h3>
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Interactive Amsterdam map will be implemented here</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Top Performers</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">1. Amsterdam Explorer</span>
                <span className="text-white font-semibold">2,450 pts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">2. Canal Master</span>
                <span className="text-white font-semibold">2,100 pts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">3. Windmill Hunter</span>
                <span className="text-white font-semibold">1,850 pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
