import AdminService from "../services/adminService.js";
import superUserService from "../services/superUserService.js";
import bcrypt from "bcryptjs";

class SuperUserController {
  static create = async (req, res) => {
    const { name, phone, password } = req.body;

    if (!name || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const superUserExist = await superUserService.checkPhone(phone);
      if (superUserExist !== null) {
        return res.status(400).json({ message: "phone already exist" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    const encPassword = await bcrypt.hash(password, 10);

    // save user info in database
    let superUser;
    try {
      superUser = await superUserService.createSuperUser({
        name,
        phone,
        password: encPassword,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    // send user data to frontend with isSuper as true and auth true
    res.status(201).json({ message: "superueser created success" });
  };

  static loginUser = async (req, res) => {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    let userData;
    try {
      userData = await superUserService.findUser({ phone, password });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (!userData) {
      return res.status(401).json({ message: "Invalid phone or Password" });
    }

    // send phone in cookies to client
    res.cookie("id", userData.id, {
      httpOnly: true,
    });
    res.cookie("phone", userData.phone, {
      httpOnly: true,
    });
    res.cookie("role", userData.role, {
      httpOnly: true,
    });

    // send req with msg
    return res.json({
      user: {
        id: userData.id,
        phone: userData.phone,
        name: userData.name,
        role: userData.role,
      },
      auth: true,
    });
  };

  static logoutSuper = async (req, res) => {
    res.clearCookie("id");
    res.clearCookie("phone");
    res.clearCookie("role");
    res.json({ message: "logout success", user: false, auth: false });
  };

  static createAdmin = async (req, res) => {
    const { name, phone, password } = req.body;

    if (!name || !phone || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    try {
      const adminExist = await AdminService.checkPhone(phone);
      if (adminExist !== null) {
        console.log(adminExist);
        return res.status(400).json({ message: "phone already exist" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    const encPassword = await bcrypt.hash(password, 10);

    let admin;
    try {
      admin = await AdminService.createAdmin({
        name,
        phone,
        password: encPassword,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    return res.status(201).json({ message: "admin created success" });
  };

  static removeAdmin = async (req, res) => {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Invalid request" });
    }

    let removed;
    try {
      removed = await AdminService.removeAdmin({ id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (removed.deletedCount === 0) {
      return res.status(404).json({ message: "admin not found not deleted" });
    }

    return res.json({ message: "admin deleted success" });
  };

  static getAdmins = async (req, res) => {
    let admins;
    try {
      admins = await AdminService.getAdmins();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (admins.length === 0) {
      return res.json({ message: "no admins" });
    }

    const newAdmin = admins.map((admin) => (admin.password = null));

    return res.json(admins);
  };
}

export default SuperUserController;
