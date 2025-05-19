import { Router } from "express";
import { savePost, getPosts, getPostById, deletePost } from "./publication.controller.js";

// filepath: /C:/Users/Informatica/Desktop/Blog terminar/Blog-Api---Backend-/src/publication/publication.routes.js

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Publications
 *   description: API for managing publications
 */

/**
 * @swagger
 * /api/publications:
 *   post:
 *     summary: Create a new publication
 *     tags: [Publications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               course:
 *                 type: string
 *                 enum: ["Taller III", "Práctica Supervisada", "Tecnología III"]
 *     responses:
 *       200:
 *         description: Publication created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post("/", savePost);

/**
 * @swagger
 * /api/publications:
 *   get:
 *     summary: Get all publications
 *     tags: [Publications]
 *     parameters:
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *         description: Limit the number of results
 *       - in: query
 *         name: desde
 *         schema:
 *           type: integer
 *         description: Skip a number of results
 *     responses:
 *       200:
 *         description: List of publications
 *       500:
 *         description: Server error
 */
router.get("/", getPosts);

/**
 * @swagger
 * /api/publications/{id}:
 *   get:
 *     summary: Get a publication by ID
 *     tags: [Publications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The publication ID
 *     responses:
 *       200:
 *         description: Publication found
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getPostById);

/**
 * @swagger
 * /api/publications/{id}:
 *   delete:
 *     summary: Delete a publication by ID
 *     tags: [Publications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The publication ID
 *     responses:
 *       200:
 *         description: Publication deleted successfully
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deletePost);

export default router;