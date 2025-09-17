import { Link } from "wouter";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-orange-500">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Amsterdam Dash</h1>
          <p className="text-xl text-orange-200 mb-8">
            3-Day City-Wide Scavenger Hunt Adventure
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-white mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enroll</h3>
                <p className="text-orange-200">Sign up for the next 3-day cycle</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Explore</h3>
                <p className="text-orange-200">Complete challenges across Amsterdam's 9 quadrants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Compete</h3>
                <p className="text-orange-200">Earn points and climb the leaderboard</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/enroll">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                Join the Hunt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
