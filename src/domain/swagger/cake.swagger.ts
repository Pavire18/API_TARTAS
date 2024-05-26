/**
 * @swagger
 * components:
 *  schemas:
 *    Cake:
 *      type: object
 *      required:
 *        - title
 *        - description
 *        - price
 *        - allergens
 *      properties:
 *        title:
 *          type: string
 *          description: Title of the cake
 *        description:
 *          type: string
 *          description: Description of the cake
 *        price:
 *          type: number
 *          description: Price of the cake for unit
 *        allergens:
 *          type: array
 *          items:
 *              type: string
 *              description: Array of the allergens (Example GLUTEN)
 *        categories:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/Category'
 *        logoImage:
 *          type: string
 *          description: Preview of the cake
 */

/**
 * @swagger
 * tags:
 *   name: Cake
 *   description: The cakes managing API
 */

/**
 * @swagger
 * /cake:
 *   get:
 *     summary: Lists all the cakes
 *     tags: [Cake]
 *     responses:
 *       200:
 *         description: The list of the cake
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Cake'
 *                 pagination:
 *                   $ref: '#/components/schemas/Pagination'
 */

/**
 * @swagger
 * /cake/{id}:
 *   get:
 *     summary: Get a cake by ID
 *     tags: [Cake]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Cake ID
 *     responses:
 *       200:
 *         description: The Cake info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cake'
 */

/**
 * @swagger
 * /cake/title/{title}:
 *   get:
 *     summary: Get a cake by title
 *     tags: [Cake]
 *     parameters:
 *       - in: path
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: The cake title
 *     responses:
 *       200:
 *         description: The cake info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cake'
 *       404:
 *         description: The cake was not found
 */

/**
 * @swagger
 * /cake:
 *   post:
 *     summary: Create a new cake
 *     tags: [Cake]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cake'
 *     responses:
 *       201:
 *         description: The cake was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cake'
 *       400:
 *         description: The request body is incorrect or missing
 */

/**
 * @swagger
 * /cake/{id}:
 *   delete:
 *     summary: Deletes a cake
 *     tags: [Cake]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The cake ID
 *     responses:
 *       200:
 *         description: The cake was deleted successfully
 *       404:
 *         description: The cake was not found
 */

/**
 * @swagger
 * /cake/{id}:
 *   put:
 *     summary: Update a cake
 *     tags: [Cake]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The cake ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cake'
 *     responses:
 *       200:
 *         description: The cake was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cake'
 *       400:
 *         description: The request body is incorrect or missing
 *       404:
 *         description: The cake was not found
 */
