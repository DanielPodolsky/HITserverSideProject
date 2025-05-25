import { Router } from 'express';
const router = Router();


/**
 * GET /api/about - Get team member information
 * @description Returns a list of team members who worked on this project
 * @route GET /api/about
 * @returns {Array<Object>} Array of team member objects
 * @returns {string} returns[].first_name - Team member's first name
 * @returns {string} returns[].last_name - Team member's last name
 * @example
 * // Response:
 * [
 *   { "first_name": "Noy", "last_name": "Klar" },
 *   { "first_name": "Daniel", "last_name": "Podolsky" }
 * ]
 */
router.get('/', (req, res) => {
    res.json([
        { first_name: 'Noy', last_name: 'Klar' },
        { first_name: 'Daniel', last_name: 'Podolsky' },
    ]);
});

export default router;