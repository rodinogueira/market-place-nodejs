const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { validaUsuario } = require("../middlewares/validacaoMiddleware");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", validaUsuario, userController.createUser);
router.put("/:id", authMiddleware, validaUsuario, userController.updateUser);
router.delete("/:id", authMiddleware, userController.deleteUser);
router.post("/login", userController.loginUser);

// Rotas de endereços do usuário
router.post("/address/:id", authMiddleware, userController.addUserAddress);
router.delete("/address/:id", authMiddleware, userController.removeUserAddress);

// Rotas de produtos favoritos do usuário
router.post("/favorites/:id", authMiddleware, userController.addUserFavProduct);
router.delete("/favorites/:id", authMiddleware, userController.removeUserFavProduct);


module.exports = router;
