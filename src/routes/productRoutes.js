const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController"); // Certifique-se de que o caminho do controller está correto
const authMiddleware = require("../middlewares/authMiddleware"); // Middleware de autenticação
const paginacao = require("../middlewares/paginacaoMiddleware");

// Rota para listar todos os produtos (pode ser pública)
router.get("/", paginacao, productController.getAllProducts);

// Rota para buscar um produto por ID (pode ser pública)
router.get("/:id", productController.getProductById);

// Rota para criar um novo produto (requer autenticação)
router.post("/", authMiddleware, productController.createProduct);
router.post("/categoria/:id", authMiddleware, productController.addCategoriaProductController);

// Rota para atualizar um produto por ID (requer autenticação)
router.put("/:id", authMiddleware, productController.updateProduct);

// Rota para deletar um produto por ID (requer autenticação)
router.delete("/:id", authMiddleware, productController.deleteProduct);
router.delete("/categoria/:id", authMiddleware, productController.removeCategoriaProductController);

module.exports = router;
