import { useState } from "react";

export function GameDashboard() {
  const [selectedQuadrant, setSelectedQuadrant] = useState<number | null>(null);

  // TODO: Fetch real challenges from API
  const challenges = [
    { id: 1, title: "Find the Windmill", quadrant: 1, difficulty: "easy", points: 100, completed: true },
    { id: 2, title: "Canal Photo Challenge", quadrant: 2, difficulty: "medium", points: 150, completed: false },
    { id: 3, title: "Museum Visit", quadrant: 3, difficulty: "hard", points: 200, completed: false },
  ];

  const quadrants = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-orange-500">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Active Challenges</h1>
          <p className="text-orange-200">Complete challenges across Amsterdam's 9 quadrants</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Amsterdam Quadrants</h2>
              <div className="grid grid-cols-3 gap-4">
                {quadrants.map((quadrant) => (
                  <button
                    key={quadrant}
                    onClick={() => setSelectedQuadrant(quadrant)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedQuadrant === quadrant
                        ? "border-orange-500 bg-orange-500/20"
                        : "border-orange-300 bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    <span className="text-white font-bold text-xl">Q{quadrant}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedQuadrant && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quadrant {selectedQuadrant} Challenges
                </h3>
                <div className="space-y-4">
                  {challenges
                    .filter((challenge) => challenge.quadrant === selectedQuadrant)
                    .map((challenge) => (
                      <div
                        key={challenge.id}
                        className={`p-4 rounded-lg border ${
                          challenge.completed
                            ? "border-green-500 bg-green-500/20"
                            : "border-orange-300 bg-white/10"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-semibold">{challenge.title}</h4>
                            <p className="text-orange-200">
                              {challenge.difficulty} • {challenge.points} points
                            </p>
                          </div>
                          <span className="text-orange-500 font-bold">
                            {challenge.completed ? "✓" : "→"}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Leaderboard</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-orange-200">1. Player One</span>
                  <span className="text-white font-bold">2,450 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200">2. Player Two</span>
                  <span className="text-white font-bold">2,100 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200">3. Player Three</span>
                  <span className="text-white font-bold">1,850 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
