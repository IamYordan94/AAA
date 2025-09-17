# Amsterdam Dash

A comprehensive 3-day city-wide scavenger hunt game platform where individual players compete for points by completing challenges across Amsterdam's 9 city quadrants.

## Quick Start

1. **Install Node.js** (if not already installed)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```
4. **Start development:**
   ```bash
   npm run dev
   ```

## Project Structure

- `client/` - React + TypeScript + Vite frontend
- `server/` - Express + TypeScript backend
- `Readme.md.txt` - Detailed platform specification

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite + Wouter + Tailwind CSS
- **Backend:** Express.js + TypeScript + Passport.js
- **Database:** PostgreSQL + Drizzle ORM (stubbed)
- **Real-time:** WebSocket for leaderboard updates
- **Payment:** Stripe integration (stubbed)
- **Email:** Nodemailer (stubbed)

## Available Scripts

- `npm run dev` - Start both client and server in development
- `npm run build` - Build both client and server for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes

## Environment Variables

See `.env.example` for required environment variables including:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- `STRIPE_SECRET_KEY` - Stripe API key
- `SMTP_*` - Email service configuration

## Current Status

✅ **Completed:**
- Project structure and scaffolding
- Express server with session/auth stubs
- React client with routing and pages
- Tailwind CSS with Amsterdam theme
- API endpoint stubs
- WebSocket placeholder

🚧 **Next Steps:**
- Install Node.js and dependencies
- Set up PostgreSQL database
- Implement Drizzle ORM schemas
- Connect real API endpoints
- Add Stripe payment processing
- Implement email notifications
- Add file upload handling

## Deployment

This project is configured for deployment on Vercel:

### Vercel Deployment Steps

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Set Environment Variables:**
   - Go to your Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add all variables from `vercel-env-example.txt`

4. **Configure Database:**
   - Use Vercel Postgres or external PostgreSQL service
   - Update `DATABASE_URL` in Vercel environment variables

### Vercel Configuration

- `vercel.json` - Main Vercel configuration
- `client/vercel.json` - Client-specific build settings
- Serverless functions for API routes
- Static site generation for React client
