const express = require('express');
const router = express.Router();
const viaCepService = require('../services/viaCepService');

router.get('/:cep', async (req, res) => {
    const { cep } = req.params;
    try {
        const address = await viaCepService.getAddressByCep(cep);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o endereço.' });
    }
});

module.exports = router;