const productService = require("../services/productService");

// Lista todos os produtos
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.findAllProductsService();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Busca um produto por ID
const getProductById = async (req, res) => {
    try {
        const product = await productService.findProductByIdService(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cria um novo produto
const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await productService.createProductService(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualiza um produto por ID
const updateProduct = async (req, res) => {
    try {
        const updatedData = req.body;
        const updatedProduct = await productService.updateProductService(req.params.id, updatedData);
        if (!updatedProduct) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deleta um produto por ID
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productService.deleteProductService(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

    const addCategoriaProductController = async (req, res) => {
        try {
            req.body.createdAt = new Date();
            const categoria = await produdoService.addCategoriaProductService(req.params.id, req.body)
            res.status(200).send(categoria);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    const removeCategoriaProductController = async (req, res) => {
        try {
            req.body.createdAt = new Date();
            const categoria = await produdoService.removeCategoriaProductService(req.body)
            res.status(200).send(categoria);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    addCategoriaProductController,
    removeCategoriaProductController
};
