const express = require("express");
const router = express.Router();
const carrinhoController = require("../controllers/carrinhoController");

// Rotas do carrinho
router.get("/:id", carrinhoController.getCarrinhoById);
router.post("/", carrinhoController.createCarrinho);
router.put("/:id", carrinhoController.updateCarrinho);
router.delete("/:id", carrinhoController.deleteCarrinho);
router.get("/", carrinhoController.getAllCarrinhos);

module.exports = router;
