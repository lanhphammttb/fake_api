const express = require('express');
const app = express();

app.get('/olympus/v1/utils/games', (req, res) => {
    res.json([
        {
            "name": "2048",
            "week": [0, 1],
            "complete": 180,
            "limit": 3,
            "exchange_rules": [
                { "point": 1000, "reward": "500" },
                { "point": 1200, "reward": "100" },
                { "point": 1500, "reward": "100" },
                { "point": 1800, "reward": "100" },
                { "point": 2100, "reward": "100" },
                { "point": 2400, "reward": "100" },
                { "point": 2900, "reward": "100" },
                { "point": 3400, "reward": "100" },
                { "point": 3900, "reward": "100" },
                { "point": 4500, "reward": "100" },
                { "point": 10000, "reward": "100" }
            ]
        }
    ]);
});

module.exports = app;

if (require.main === module) {
    const PORT = 3030;
    app.listen(PORT, () => {
        console.log(`Fake API server running at http://localhost:${PORT}`);
    });
} 