import express from "express";
const router = express.Router();
import {
  createFoto,
  deleteFoto,
  getFotos,
  updateFoto,
  getFotoById,
} from "../controllers/fotoController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get("/", getFotos);
router.route("/").get(getFotos).post(protect, admin, createFoto);
router
  .route("/:id")
  .get(getFotoById)
  .delete(protect, admin, deleteFoto)
  .put(protect, admin, updateFoto);

export default router;
