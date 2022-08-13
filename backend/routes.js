import express from "express";
import SuperUserController from "./controllers/superUserController.js";
import TestController from "./controllers/testController.js";
import AuthMiddleware from "./middlewares/authMiddleware.js";


const router = express.Router();

// SUPER USER ROUTES
router.post('/api/create-superuser', SuperUserController.create);
router.post('/api/login-superuser', SuperUserController.loginUser);
router.post('/api/create-admin', AuthMiddleware.superUserAuth, SuperUserController.createAdmin);
router.post('/api/remove-admin', AuthMiddleware.superUserAuth, SuperUserController.removeAdmin);
router.post('/api/get-admins', AuthMiddleware.superUserAuth, SuperUserController.getAdmins);



// TESTING ROUTE
router.post('/api/test', TestController.test);


export default router;