const express = require('express');
const app = express();
const tableRoutes = require('./routes/tableRoutes');

app.use(express.json());
app.use('/api/tables', tableRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));