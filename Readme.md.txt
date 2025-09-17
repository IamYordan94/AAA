Amsterdam Dash
1. Clear App Description
Amsterdam Dash is a comprehensive 3-day city-wide scavenger hunt game platform where individual players compete for points by completing challenges across Amsterdam's 9 city quadrants. The system operates on continuous 3-day cycles with capacity-based enrollment (no online payments - fees collected on-spot) and tiered prize structures based on participant numbers. Players access games through email + access key + room name verification, while admins control cycle activation, challenge management, and submission reviews through a dedicated dashboard.

2. Tech Stack
Frontend: React 18 + TypeScript + Vite
Backend: Express.js + TypeScript
Database: PostgreSQL with Drizzle ORM
Styling: Tailwind CSS + shadcn/ui components
Authentication: Passport.js with local strategy + session-based auth
Real-time: WebSocket for live leaderboard updates
Routing: Wouter (client-side) + Express (server-side)
State Management: TanStack Query v5
Payment: Stripe integration
File Upload: Multer with image validation
3. File/Page Structure
Frontend Routes (client/src/pages/)
/ → single-page-home.tsx - Landing page with game info and signup
/enroll → enroll-page.tsx - Player enrollment form
/enter-cycle → enter-cycle.tsx - Access key validation and cycle entry
/player-dashboard → enhanced-player-dashboard.tsx - Main player interface
/game-dashboard → game-dashboard.tsx - Active game view with challenges
/admin → clean-admin-dashboard.tsx - Admin control panel
/admin-analytics → admin-analytics-dashboard.tsx - Advanced analytics
Key Components (client/src/components/)
challenge-card.tsx, challenge-modal.tsx - Challenge interaction UI
leaderboard.tsx - Real-time ranking display
payment-form.tsx - Stripe payment integration
hero-section.tsx, navbar.tsx - Landing page elements
ui/ - Complete shadcn/ui component library
Backend Structure (server/)
routes.ts - All API endpoints and WebSocket setup
auth.ts - Passport.js authentication logic
storage.ts - Database interaction layer with Drizzle ORM
payment.ts - Stripe payment processing
email.ts - Nodemailer email service
validation.ts - Challenge submission validation
4. Core Functionality
Authentication & Sessions
Email-based login requiring email + access key + room name verification
Admin access via special credentials (Bloemen2026 + Maintenance1)
PostgreSQL-backed session store using connect-pg-simple
Dashboard Widgets
Real-time leaderboard with 5-second WebSocket updates
Player stats tracking (score, rank, completion rates)
Achievement system with progress tracking
Live enrollment counters and cycle capacity monitoring
Forms & Validation
React Hook Form with Zod validation throughout
Challenge submission forms (text, image, location)
Player enrollment with capacity overflow to next cycle
Admin challenge creation with Amsterdam quadrant categorization
API Endpoints
Player: /api/enroll, /api/enter-cycle, /api/player/* (dashboard, challenges, stats, submissions)
Admin: /api/admin/* (overview, submissions, cycles, challenges, enrollments)
Payment: /api/create-payment-intent, /api/webhook/stripe
Real-time: WebSocket /ws for leaderboard updates
Database Models
Game Cycles: 3-day periods with capacity limits and admin activation controls
Challenges: Amsterdam quadrant-based with difficulty tiers and point values
Enrollments: Player registrations with access keys and payment tracking
Submissions: Challenge responses with GPS validation and admin approval
Integrations
Stripe: Payment processing with webhook handling
Email: Welcome emails with access keys via Nodemailer
File Upload: Image submissions with 10MB limit and type validation
GPS: Location tracking and validation for challenges
5. Styling Rules
Theme System
Dark Mode: Enabled with darkMode: ["class"] in Tailwind config
Amsterdam Colors: Custom CSS variables for orange (--flyer-orange), Dutch blue (--dutch-blue), teal accent, cream text
Design Patterns: Card-based layouts, gradient backgrounds, custom Amsterdam skyline utilities
Notable Tailwind Patterns
Custom utility classes: .bg-amsterdam-orange, .text-dutch-blue, .glow-amsterdam-orange
Amsterdam skyline effect: .amsterdam-skyline with CSS pseudo-elements
Dutch pattern overlay: Background image integration with opacity controls
Responsive grid layouts for challenges and analytics dashboards
6. Deployment Target
Replit Platform (not Vercel) - includes Replit-specific plugins and configurations:

@replit/vite-plugin-cartographer for development
@replit/vite-plugin-runtime-error-modal for debugging
Serves on port 5000 with 0.0.0.0 binding
Required Environment Variables
DATABASE_URL=postgresql://...
SESSION_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email
SMTP_PASS=your-password
Build/Run Commands
npm run dev     # Development with Vite + Express
npm run build   # Build frontend + backend bundle
npm start       # Production server
npm run db:push # Push database schema changes
Notes for Agents
Data Models
enrollments: player registrations (email, phone, accessKey, cycleId, totalScore, paymentStatus)
gameCycles: 3-day game periods (startDate, endDate, status, capacity, isActive, roomName, accessCode)
challenges: Amsterdam quadrant-based tasks (title, quadrant 1-9, difficulty, points, submissionType)
submissions: player responses (enrollmentId, challengeId, submissionData, status, GPS coords)
users: admin accounts (username, password, role)
API Endpoints
POST /api/enroll - Player registration with capacity overflow handling
POST /api/enter-cycle - Access key validation and cycle entry
GET /api/player/dashboard/:enrollmentId - Player dashboard data
GET /api/admin/overview - Admin cycle and enrollment summary
PATCH /api/admin/submissions/:id - Approve/reject submissions
POST /api/admin/cycle/:cycleId/toggle - Admin cycle activation control
External Services + Env Vars
Stripe: STRIPE_SECRET_KEY, VITE_STRIPE_PUBLISHABLE_KEY - payment processing
Email: SMTP_HOST, SMTP_USER, SMTP_PASS - welcome emails and notifications
Database: DATABASE_URL - Neon PostgreSQL connection
Sessions: SESSION_SECRET - secure session encryption
Known Gaps/TODOs Blocking Production
AI Image Validation: validateAIImage() function is placeholder - needs implementation
Real-time Location Tracking: Database schema exists but storage/retrieval logic missing
Automated Challenge Unlocks: Progression system defined but not implemented
Prize Distribution: Logic exists but actual payout mechanism missing
Admin Dashboard Maps: Interactive Amsterdam map is placeholder
WebSocket Refinement: Current leaderboard uses window.location.reload() instead of state updates
Player Analytics: Detailed stats schema defined but population logic missing
