import { Link } from "wouter";

export function PlayerDashboard() {
  // TODO: Fetch real player data from API
  const playerStats = {
    totalScore: 1250,
    rank: 15,
    challengesCompleted: 8,
    totalChallenges: 12,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-orange-500">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Player Dashboard</h1>
          <Link href="/game-dashboard">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">
              View Challenges
            </button>
          </Link>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-orange-200 mb-2">Total Score</h3>
            <p className="text-3xl font-bold text-white">{playerStats.totalScore}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-orange-200 mb-2">Current Rank</h3>
            <p className="text-3xl font-bold text-white">#{playerStats.rank}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-orange-200 mb-2">Challenges</h3>
            <p className="text-3xl font-bold text-white">
              {playerStats.challengesCompleted}/{playerStats.totalChallenges}
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-orange-200 mb-2">Completion</h3>
            <p className="text-3xl font-bold text-white">
              {Math.round((playerStats.challengesCompleted / playerStats.totalChallenges) * 100)}%
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-orange-200">Challenge completed: "Find the Windmill"</span>
                <span className="text-white font-semibold">+150 pts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-200">Challenge completed: "Canal Photo"</span>
                <span className="text-white font-semibold">+100 pts</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">🏆</span>
                <span className="text-orange-200">First Challenge</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">🎯</span>
                <span className="text-orange-200">Quadrant Explorer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
