const fs = require("fs");
const path = require("path");

const outputFolder = path.join(__dirname, "dist");

fs.mkdirSync(outputFolder, { recursive: true });

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to Node.js CI/CD Practical</p>
</body>
</html>
`;

fs.writeFileSync(
    path.join(outputFolder, "index.html"),
    html
);

console.log("Node.js build completed successfully!");
console.log("Build artifact created inside dist folder.");