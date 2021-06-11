const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, 'build');

const port = process.env.PORT || 3000;

app.use('/test-hummer/', express.static(publicPath));

app.get("*", function (req, res) {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log('Server is up! Port: ' + port);
});