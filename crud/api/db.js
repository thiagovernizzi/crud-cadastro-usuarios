import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vernizzi@1984",
    database: "crud_cadastro_usuarios"
})