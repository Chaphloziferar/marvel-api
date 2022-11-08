import {Router} from 'express';
import {getAllCharacters} from '../controllers/character.controller.js';

const router = Router();

router.get('/getAllCharacters', getAllCharacters);

export default router;