const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>DevOps World</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #0a0f24, #122044, #042a2b);
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        overflow: hidden;
                    }

                    /* Animation background */
                    .gradient {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: radial-gradient(circle at center, rgba(0,255,255,0.2), transparent);
                        animation: pulse 6s infinite alternate ease-in-out;
                    }

                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 0.3; }
                        100% { transform: scale(1.4); opacity: 0.6; }
                    }

                    /* Glass effect container */
                    .container {
                        position: relative;
                        backdrop-filter: blur(12px);
                        background: rgba(255, 255, 255, 0.08);
                        padding: 50px 100px;
                        border-radius: 18px;
                        text-align: center;
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
                        animation: fadeIn 1.2s ease-out;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    h1 {
                        font-size: 4rem;
                        font-weight: 800;
                        background: linear-gradient(to right, #00eaff, #00ffaa);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        margin-bottom: 10px;
                        text-shadow: 0 0 20px rgba(0,255,255,0.4);
                    }

                    p {
                        color: #cce7ff;
                        font-size: 1.3rem;
                        max-width: 400px;
                        margin: 0 auto;
                        opacity: 0.8;
                    }

                    /* Floating circles */
                    .circle {
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(0,255,255,0.15);
                        animation: float 12s infinite ease-in-out alternate;
                    }

                    .c1 { width: 180px; height: 180px; top: 10%; left: 15%; animation-duration: 10s; }
                    .c2 { width: 120px; height: 120px; bottom: 15%; right: 20%; animation-duration: 14s; }

                    @keyframes float {
                        from { transform: translateY(0px); }
                        to { transform: translateY(-40px); }
                    }
                </style>
            </head>

            <body>
                <div class="gradient"></div>
                <div class="circle c1"></div>
                <div class="circle c2"></div>

                <div class="container">
                    <h1>Welcome to Devo world</h1>
                    <p>
                        Automate. Deploy. Scale.  
                        Your CI/CD demonstration starts here 🚀
                    </p>
                </div>
            </body>
        </html>
    `);
});

module.exports = app;
