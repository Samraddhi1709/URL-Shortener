import express from "express";
import { getSignOut, getSignin, getSingup, postSignup, postSingin } from "../controllers/auth.js";

import isAuthForAuthRoute from "../middleware/is-auth-for-auth-route.js";

const route = express.Router();

route.get('/sign-in', isAuthForAuthRoute, getSignin);

route.post('/sign-in', postSingin);

route.get('/sign-up', isAuthForAuthRoute, getSingup);

route.get('/sign-out', getSignOut);

route.post('/sign-up', postSignup);


export default route;