const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const isArmstrong = (n) => {
    const digits = n.toString().split('');
    const power = digits.length;
    return digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), power), 0) === n;
};

const digitSum = (n) => n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);

const getFunFact = async (n) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${n}/math?json`);
        return response.data.text || "No fun fact available.";
    } catch {
        return "No fun fact available.";
    }
};

app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    properties.push(num % 2 === 0 ? 'even' : 'odd');

    const funFact = await getFunFact(num);

    res.json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: num === [...Array(num).keys()].slice(1).reduce((acc, i) => acc + (num % i === 0 ? i : 0), 0),
        properties,
        digit_sum: digitSum(num),
        fun_fact: funFact
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
