import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// Placeholder in-memory admin user
const ADMIN_USERNAME = "Bloemen2026";
const ADMIN_PASSWORD = "Maintenance1";

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return done(null, { id: 1, username, role: "admin" });
    }
    return done(null, false);
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  done(null, { id, username: ADMIN_USERNAME, role: "admin" });
});

export default passport;


