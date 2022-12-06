import { Router } from "express";
import { saveData, getData } from '../../app/controllers';


export const router = Router();

// Data

router.route('/data/:id?')
    .get(getData)
    .put(saveData);