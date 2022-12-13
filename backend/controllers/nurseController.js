import NurseService from "../services/nurseService.js";

class NurseController {
  static loginNurse = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let nurse;
    try {
      nurse = await NurseService.loginNurse(username, password);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (!nurse) {
      return res.status(401).json({ message: "Invalid username or Password" });
    }

    res.cookie("id", nurse.id, {
      httpOnly: true,
    });
    res.cookie("username", nurse.username, {
      httpOnly: true,
    });
    res.cookie("role", nurse.role, {
      httpOnly: true,
    });

    res.json({
      user: {
        id: nurse.id,
        username: nurse.username,
        name: nurse.name,
        role: nurse.role,
      },
      auth: true,
    });
  };

  static logoutNurse = async (req, res) => {
    res.clearCookie("id");
    res.clearCookie("username");
    res.clearCookie("role");
    res.json({ message: "logout success" });
  };

  // add details
}

export default NurseController;
