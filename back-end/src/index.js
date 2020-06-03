// Tipos de parâmetros:

// Query Params: Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo de requisição, utilizado para criar ou alterar recursos

/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, etc
 */

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);