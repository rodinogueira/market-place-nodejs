const CarrinhoService = require("../services/carrinhoServices");

// Controlador para encontrar um carrinho pelo ID
const getCarrinhoById = async (req, res) => {
  try {
    const carrinho = await CarrinhoService.findCarrinhoByIdService(req.params.id);
    if (!carrinho) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }
    // res.status(200).send(carrinho);
    res.json(carrinho);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para criar um novo carrinho
const createCarrinho = async (req, res) => {
  try {
    const corpo = {
        ...req.body,
        userId: req.userId,
        createdAt: new Date()
    }

    const carrinho = await CarrinhoService.createCarrinhoService(req.params.id, corpo);
    // res.status(201).send(carrinho);
    res.status(201).json(carrinho);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para atualizar um carrinho pelo ID
const updateCarrinho = async (req, res) => {
  try {
    const carrinhoAtualizado = await CarrinhoService.updateCarrinhoService(req.params.id, req.body);
    if (!carrinhoAtualizado) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }
    res.json(carrinhoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para remover um carrinho pelo ID
const deleteCarrinho = async (req, res) => {
  try {
    const carrinhoDeletado = await CarrinhoService.deleteCarrinhoService(req.params.id);
    if (!carrinhoDeletado) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }
    res.json({ message: "Carrinho removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para listar todos os carrinhos
const getAllCarrinhos = async (req, res) => {
  try {
    const carrinhos = await CarrinhoService.findAllCarrinhosService();
    res.json(carrinhos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCarrinhoById,
  createCarrinho,
  updateCarrinho,
  deleteCarrinho,
  getAllCarrinhos,
};
