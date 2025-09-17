import { useState } from "react";
import { Link } from "wouter";

export function EnterCyclePage() {
  const [formData, setFormData] = useState({
    email: "",
    accessKey: "",
    roomName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement access key validation API call
    console.log("Entering cycle:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-orange-500">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Enter Game Cycle
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-orange-200 border border-orange-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Access Key</label>
                <input
                  type="text"
                  value={formData.accessKey}
                  onChange={(e) => setFormData({ ...formData, accessKey: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-orange-200 border border-orange-300"
                  placeholder="Enter your access key"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Room Name</label>
                <input
                  type="text"
                  value={formData.roomName}
                  onChange={(e) => setFormData({ ...formData, roomName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-orange-200 border border-orange-300"
                  placeholder="Enter room name"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Enter Game
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link href="/" className="text-orange-200 hover:text-white">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
