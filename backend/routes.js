import express from "express";
import AdminController from "./controllers/adminController.js";
import AuthController from "./controllers/authController.js";
import DepartmentController from "./controllers/departmentController.js";
import NurseController from "./controllers/NurseController.js";
import SuperUserController from "./controllers/superUserController.js";
import AuthMiddleware from "./middlewares/authMiddleware.js";

const router = express.Router();

// SUPER USER ROUTES
router.post("/api/create-superuser", SuperUserController.create);
router.post("/api/login-superuser", SuperUserController.loginUser);
router.post(
  "/api/logout-superuser",
  AuthMiddleware.UserAuth,
  SuperUserController.logoutSuper
);
router.post(
  "/api/create-admin",
  AuthMiddleware.UserAuth,
  SuperUserController.createAdmin
);
router.post(
  "/api/remove-admin",
  AuthMiddleware.UserAuth,
  SuperUserController.removeAdmin
);
router.post(
  "/api/get-admins",
  AuthMiddleware.UserAuth,
  SuperUserController.getAdmins
);

// ADMIN ROUTES
router.post("/api/login-admin", AdminController.loginAdmin);
router.post(
  "/api/logout-admin",
  AuthMiddleware.UserAuth,
  AdminController.logoutAdmin
);
router.post(
  "/api/create-nurse",
  AuthMiddleware.UserAuth,
  AdminController.createNurse
);
router.post(
  "/api/remove-nurse",
  AuthMiddleware.UserAuth,
  AdminController.removeNurse
);
router.post(
  "/api/get-nurses",
  AuthMiddleware.UserAuth,
  AdminController.getNurses
);

// NURSE ROUTES
router.post("/api/login-nurse", NurseController.loginNurse);
router.post(
  "/api/logout-nurse",
  AuthMiddleware.UserAuth,
  NurseController.logoutNurse
);

// FETCH DEPARTMENTS
router.get(
  "/api/departments",
  AuthMiddleware.UserAuth,
  DepartmentController.getDepartments
);

// get beds in particular department
router.post(
  "/api/department-beds",
  AuthMiddleware.UserAuth,
  DepartmentController.getBeds
);

// refresh for all roles
router.get("/api/refresh", AuthController.refresh);

export default router;
