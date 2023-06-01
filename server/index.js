const port = 3000;
const app = require('./app');
const { db } = require('./db');

db.sync().then(() => {
    app.listen(port, () => console.log(`db connected, listening on port ${port}`));
})

app.listen(port, () => console.log(`db connected, listening on port ${port}`));