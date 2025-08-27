import { Request, Response } from 'express';
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pets";

export const search = (req: Request, res: Response) => {
    let list = Pet.getByName(`${req.query.q}`);
    
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}