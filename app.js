const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>DevOps World</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background: #0d1117;
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        font-size: 4rem;
                        color: #00eaff;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to DevOps world</h1>
            </body>
        </html>
    `);
});

module.exports  = app;
