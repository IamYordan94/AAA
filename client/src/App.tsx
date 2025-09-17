import { Router, Route } from "wouter";
import { HomePage } from "./pages/single-page-home";
import { EnrollPage } from "./pages/enroll-page";
import { EnterCyclePage } from "./pages/enter-cycle";
import { PlayerDashboard } from "./pages/enhanced-player-dashboard";
import { GameDashboard } from "./pages/game-dashboard";
import { AdminDashboard } from "./pages/clean-admin-dashboard";
import { AdminAnalytics } from "./pages/admin-analytics-dashboard";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/enroll" component={EnrollPage} />
      <Route path="/enter-cycle" component={EnterCyclePage} />
      <Route path="/player-dashboard" component={PlayerDashboard} />
      <Route path="/game-dashboard" component={GameDashboard} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin-analytics" component={AdminAnalytics} />
    </Router>
  );
}

export default App;
