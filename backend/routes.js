import express from "express";
import AdminController from "./controllers/adminController.js";
import AuthController from "./controllers/authController.js";
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

// ADMIN ROUTES
router.post("/api/login-admin", AdminController.loginAdmin);

// refresh for all roles
router.get("/api/refresh", AuthController.refresh);



// TESTING ROUTE
router.post('/api/test', TestController.test);


export default router;