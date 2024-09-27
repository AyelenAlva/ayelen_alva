// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let users = [];

const registerUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error al crear el usuario.' });
    }

    users.push({ username, password: hashedPassword });

    const token = jwt.sign({ username }, 'tu_secreto_jwt', { expiresIn: '5h' });

    return res.status(201).json({ message: 'Usuario registrado exitosamente.', token });
  });
};

module.exports = { registerUser };



import "./style.css";
