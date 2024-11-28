const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const categoriaController = require("../controllers/categoriaController");

const router = express.Router();

// Rota para criar uma nova categoria
router.post("/", authMiddleware, categoriaController.createCategoria);

// Rota para obter todas as categorias
router.get("/", categoriaController.getAllCategorias);

// Rota para obter uma categoria por ID
router.get("/:id", categoriaController.getCategoriaById);

// Rota para atualizar uma categoria
router.put("/:id", authMiddleware, categoriaController.updateCategoria);

// Rota para excluir uma categoria
router.delete("/:id", authMiddleware, categoriaController.deleteCategoria);

module.exports = router;
