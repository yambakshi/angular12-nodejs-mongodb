import { Router } from "express";
import { saveUser, getUsers } from '../../app/controllers';


export const router = Router();

// Users

router.route('/users/:id?')
    .get(getUsers)
    .put(saveUser);