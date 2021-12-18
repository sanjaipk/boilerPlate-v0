import { Router } from "express";
import {
  getMenus,
  addMenu,
  updateMenu,
  deleteMenu,
  retrieveMenu,
} from "../controllers/menus";
import {
  getBase
} from "../controllers/base";
import { 
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user";

const menuRoutes: Router = Router();

menuRoutes.get("/menu", getMenus);
menuRoutes.post("/menu", addMenu);
menuRoutes.put("/menu/:id", updateMenu);
menuRoutes.delete("/menu/:id", deleteMenu);
menuRoutes.get("/menu/:id", retrieveMenu);

menuRoutes.get("/", getBase);

menuRoutes.get('/users', getUsers);
menuRoutes.get('/users/:id', getUserById);
menuRoutes.post('/users', createUser);
menuRoutes.put('/users/:id', updateUser);
menuRoutes.delete('/users/:id', deleteUser);

export default menuRoutes;