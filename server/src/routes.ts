import { Router, Request, Response } from "express";

export const api = Router();

// Player endpoints (stubs)
api.post("/enroll", (req: Request, res: Response) => {
  res.json({ ok: true, message: "enroll stub" });
});

api.post("/enter-cycle", (req: Request, res: Response) => {
  res.json({ ok: true, message: "enter-cycle stub" });
});

api.get("/player/dashboard/:enrollmentId", (req: Request, res: Response) => {
  res.json({ ok: true, dashboard: {}, enrollmentId: req.params.enrollmentId });
});

// Admin endpoints (stubs)
api.get("/admin/overview", (req: Request, res: Response) => {
  res.json({ ok: true, overview: {} });
});

api.patch("/admin/submissions/:id", (req: Request, res: Response) => {
  res.json({ ok: true, id: req.params.id, status: "updated" });
});

api.post("/admin/cycle/:cycleId/toggle", (req: Request, res: Response) => {
  res.json({ ok: true, cycleId: req.params.cycleId, active: true });
});

// Payment (stubs)
api.post("/create-payment-intent", (_req: Request, res: Response) => {
  res.json({ clientSecret: "pi_test_secret" });
});

// Healthcheck
api.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});


