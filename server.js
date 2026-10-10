const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Banco de dados simulado para rodar leve na nuvem pelo celular
let bancoDeDadosSimulado = [];

// ROTA POST: Salvar um novo gasto
app.post('/api/gastos', (req, res) => {
    const { categoria, valor, descricao } = req.body;
    
    // Lista das suas 4 categorias reais do projeto
    const categoriasValidas = ['lazer', 'transporte', 'feira', 'contas da casa'];

    if (!categoria || !valor) {
        return res.status(400).json({ erro: "Categoria e valor são obrigatórios." });
    }

    if (!categoriasValidas.includes(categoria.toLowerCase())) {
        return res.status(400).json({ erro: "Categoria inválida no sistema." });
    }

    const novoGasto = {
        id: bancoDeDadosSimulado.length + 1,
        categoria: categoria.toLowerCase(),
        valor: parseFloat(valor),
        descricao: descricao || "",
        data: new Date()
    };

    bancoDeDadosSimulado.push(novoGasto);
    res.status(201).json({ mensagem: "Gasto registrado no Back-End!", dado: novoGasto });
});

// ROTA GET: Resumo e somas para a tela do React
app.get('/api/gastos/resumo', (req, res) => {
    let totalGeral = 0;
    let resumoCategorias = { lazer: 0, transporte: 0, feira: 0, 'contas da casa': 0 };

    bancoDeDadosSimulado.forEach(gasto => {
        totalGeral += gasto.valor;
        const cat = gasto.categoria.toLowerCase();
        if (resumoCategorias[cat] !== undefined) {
            resumoCategorias[cat] += gasto.valor;
        }
    });

    res.json({
        totalGeral,
        detalhePorCategoria: resumoCategorias
    });
});

app.listen(PORT, () => {
    console.log(`Servidor do Controle de Gastos rodando na porta ${PORT}`);
});
