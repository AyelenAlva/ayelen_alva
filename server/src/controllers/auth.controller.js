import { createJwt } from "../helpers/createJwt.js";
import { createUser, getUserByCredentials } from "../models/user.model.js";

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl =  (req, res) => {
  try {
    // ! Completar la función signUpCtrl
    res.status(200).json(req.user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error al cerrar sesión" });
      }

      res.clearCookie("authToken");
      return res.json({ message: "Cierre de sesión exitoso" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const validateSessionCtrl = (req, res) => {
  console.log(req.user);
  return res.json({
    message: "Acceso permitido a área protegida",
    user: req.user,
  });
};