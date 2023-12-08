import express from "express";
import {createServices, getServices } from "../controllers/servicesController.js";
const router = express.Router()

router.get('/', getServices )
router.post('/', createServices )

export default router