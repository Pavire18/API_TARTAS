/**
 * @swagger
 * components:
 *   schemas:
 *     CartProduct:
 *       type: object
 *       properties:
 *         cake:
 *            $ref: '#/components/schemas/Cake'
 *         quantity:
 *           type: integer
 *           description: Quantity of cakes
 *     Cart:
 *       type: object
 *       properties:
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ICartProduct'
 *             description: List of products in the cart
 *         user:
 *           $ref: '#/components/schemas/User'
 *           description: User who owns the cart
 */

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: The cart managing API
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       201:
 *         description: The cart was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       400:
 *         description: The request body is incorrect or missing
 */
