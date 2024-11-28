const express = require("express");
const connectDatabase = require("./src/utils/connectDatabase");
const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productRoutes"); // Importe as rotas de produtos
const categoriaRoutes = require("./src/routes/categoriaRoutes");

const app = express();
connectDatabase();

app.use(express.json());

// Defina a rota base para os usuários
app.use("/api/users", userRoutes);

// app.use("/api/auth", authRoutes);

// Adicione a rota base para os produtos
app.use("/api/products", productRoutes); // Adicione as rotas de produto

app.use("/api/categorias", categoriaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
