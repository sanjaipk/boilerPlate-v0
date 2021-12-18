import {Pool} from "pg";
import { Response, Request } from "express";
import { AsyncLocalStorage } from "async_hooks";

const credentials = {
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "mysecretpassword",
  port: 5433,
};

const pool = new Pool(credentials);

const getUsers = async (request: Request, response: Response): Promise<void>=> {
    try {
        const results = await pool.query('SELECT * FROM users ORDER BY id ASC');
        response.status(200).json(results.rows);
    } catch (error) {
        throw error;
    }
};

const getUserById = async (request: Request, response: Response): Promise<void> => {
    try {
        const id = parseInt(request.params.id);
        const results = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        response.status(200).json(results.rows)
    } catch (error) {
        throw error;
    }
};

const createUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const { name, email } = request.body;
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        response.status(201).send(`User added with ID: ${result.insertId}`);
    } catch (error) {
        throw error;
    }
};

const updateUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const id = parseInt(request.params.id);
        const { name, email } = request.body;
        const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',
            [name, email, id]);
        response.status(200).send(`User modified with ID: ${id}`);
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const id = parseInt(request.params.id);
        const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        response.status(200).send(`User deleted with ID: ${id}`);
    } catch (error) {
        throw error;
    }
}

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};