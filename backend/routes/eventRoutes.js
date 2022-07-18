import express from "express";
const router = express.Router();
import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
  getEventById,
} from "../controllers/eventController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get("/", getEvents);
router.route("/").get(getEvents).post(protect, admin, createEvent);
router
  .route("/:id")
  .get(getEventById)
  .delete(protect, admin, deleteEvent)
  .put(protect, admin, updateEvent);

export default router;
