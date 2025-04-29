<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to My Project</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f6f9;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }
        .container {
            text-align: center;
            background-color: #fff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            width: 100%;
        }
        h1 {
            font-size: 2.5rem;
            color: #333;
            animation: fadeIn 1s ease-out;
        }
        h2 {
            font-size: 1.5rem;
            color: #5a5a5a;
            margin-top: 10px;
            animation: fadeIn 2s ease-out;
        }
        .portfolio-link {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 30px;
            font-size: 1.2rem;
            text-decoration: none;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            animation: fadeIn 3s ease-out;
        }
        .portfolio-link:hover {
            background-color: #0056b3;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .description {
            font-size: 1rem;
            color: #777;
            line-height: 1.6;
            margin-top: 20px;
            animation: fadeIn 4s ease-out;
        }
        .footer {
            position: absolute;
            bottom: 10px;
            font-size: 0.8rem;
            color: #aaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Project</h1>
        <h2>Hi, I'm Sreejon — a developer passionate about creating modern web experiences.</h2>
        <div class="description">
            I'm excited to present this project, built using cutting-edge technologies like React, TypeScript, and Tailwind CSS. You can explore the details, see the code, and much more in the links below.
        </div>
        <a href="https://sreejon.vercel.app" class="portfolio-link" target="_blank">Check out My Portfolio</a>
        <div class="footer">
            &copy; 2025 Sreejon. All rights reserved.
        </div>
    </div>
</body>
</html>
