"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const pg_1 = require("pg");
const credentials = {
    user: "postgres",
    host: "172.17.0.6",
    database: "postgres",
    password: "mysecretpassword",
    port: 5432,
};
const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = new pg_1.Pool(credentials);
        const results = yield pool.query('SELECT * FROM users ORDER BY id ASC');
        response.status(200).json(results.rows);
    }
    catch (error) {
        throw error;
    }
});
exports.getUsers = getUsers;
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = new pg_1.Pool(credentials);
        const id = parseInt(request.params.id);
        const results = yield pool.query('SELECT * FROM users WHERE id = $1', [id]);
        response.status(200).json(results.rows);
    }
    catch (error) {
        throw error;
    }
});
exports.getUserById = getUserById;
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = new pg_1.Pool(credentials);
        const { name, email } = request.body;
        const result = yield pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        response.status(201).send(`User added with ID: ${result.insertId}`);
    }
    catch (error) {
        throw error;
    }
});
exports.createUser = createUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = new pg_1.Pool(credentials);
        const id = parseInt(request.params.id);
        const { name, email } = request.body;
        const result = yield pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
        response.status(200).send(`User modified with ID: ${id}`);
    }
    catch (error) {
        throw error;
    }
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = new pg_1.Pool(credentials);
        const id = parseInt(request.params.id);
        const result = yield pool.query('DELETE FROM users WHERE id = $1', [id]);
        response.status(200).send(`User deleted with ID: ${id}`);
    }
    catch (error) {
        throw error;
    }
});
exports.deleteUser = deleteUser;
