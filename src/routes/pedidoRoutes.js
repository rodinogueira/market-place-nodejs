const express = require("express");
const PedidoController = require("../controllers/pedidoController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Rota para obter todos os pedidos
router.get("/", authMiddleware, PedidoController.getAllPedidosController);

// Rota para obter um pedido por ID
router.get("/:id", authMiddleware, PedidoController.getPedidoByIdController);

// Rota para criar um novo pedido
router.post("/", authMiddleware, PedidoController.createPedidoController);

// Rota para atualizar um pedido por ID
router.patch("/:id", authMiddleware, PedidoController.updatePedidoController);

// Rota para deletar um pedido por ID
router.delete("/:id", authMiddleware, PedidoController.deletePedidoController);

module.exports = router;
