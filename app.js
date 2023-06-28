import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();

import bodyParser from 'body-parser';

import routes from './routes/app.js';
import authRoutes from './routes/auth.js';
import searchRoutes from './routes/searchEng.js';

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/auth', authRoutes);
app.use('/search', searchRoutes);
app.use(routes);



mongoose.connect('mongodb+srv://writetomailhimanshu:himanshu@cluster0.zn9fzn1.mongodb.net/url-shortner')
.then(()=>{
    console.log("You have succussfully connected to the mongoDB");
    app.listen(8080);
})
.catch(error => {
    console.warn(error);
})
