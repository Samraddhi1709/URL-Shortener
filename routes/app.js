
import  express  from "express";
const route = express.Router();

import { creatShortUrl, getShortUrl, home } from "../controllers/app.js";

import {isAuth} from "../middleware/is-auth.js";

route.get('/', isAuth, home);

route.post('/', isAuth, creatShortUrl);

route.get('/:shortUrl', getShortUrl);


export default route;