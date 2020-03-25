const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
Rotas/Recursos
    Metodos HTTP:
     *GET:Buscar/Listar informaçao no bkend 
     *POST: Criar uma informaççao
     *PUT: ALterar uma informaçao no bkend
     *DELETE: Deletar uma informaçao no bkend
*/  
/** 
 *  Tipos de Parametros 
 *  
 *  Query Params : Paramentros nomeados enviados na rota apos o simbolo ("?")
 e geralmente serve para filtros e paginaçao
 * Route Params : Parametros utlizados para identificar um unico recursos
 * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos 
 */

 /**
  * Sql: MySQL, *SQLite*, POstgreSQL, Oracle, Microsft SQL Server
  * NoSQL: MongoDB, CocuhDB, etc
  * Banco de dados:
  *  Driver:
  * Query builder: vamos utilizar javaScript e usaremos o KNEX
  */

// depois da barra é o recurso de usuario por ex

