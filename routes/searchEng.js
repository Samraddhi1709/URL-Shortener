
import express from "express";
import { getSearch, postSearch } from "../controllers/seachEng.js";
const route = express.Router();

import { isAuth } from "../middleware/is-auth.js";

route.get('/', isAuth, getSearch);

route.post('/', isAuth, postSearch);


export default route;
