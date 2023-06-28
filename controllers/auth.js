
import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const getSingup = (req, res)=>{
    res.render('auth/sign-up');
};



export const getSignin = (req, res)=>{
    res.render('auth/sign-in');
}


export const postSingin = (req, res)=>{

    const email = req.body.email;
    const password = req.body.password;

    let loadedUser;

    User.findOne({email : email})
    .then(user => {

        if(!user){
            throw new Error("user not found");
        }
        loadedUser  = user;
        return bcrypt.compare(password, user.password);
    })
    .then(isMatched => {

        if(!isMatched){
            throw new Error("password doesn't match");
        }

        const token = jwt.sign({
            email : email,
            userId : loadedUser._id.toString()
        },
        "himanshu",
        {
            expiresIn : '1hr'
        }
        );

        // return res.status(200).json({token : token, userId : loadedUser._id.toString()});
        // return res.setHeader('Set-Cookie', "isLoggedIn = true");
        // return res.render('home', {token : token});

        const expireMinutes = 60;

        return res.cookie('token', token, {
            expires : new Date(Date.now() + expireMinutes*60000)
        });

    })
    .then(()=>{
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    })
}

export const postSignup = (req, res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email : email})
    .then(user => {

        if(user){
            const error = new Error("user already exits");
            throw error;
        }

        return bcrypt.hash(password, 12).then(hashPassword => {
            const newUser = new User({
                name : name,
                email : email,
                password : hashPassword
            });
    
            return newUser.save();
        })
        .catch(error => {
            console.log(error);
        });
    })
    .then(() => {
        res.redirect('/auth/sign-in');
    })
    .catch(error => {
        console.log(error);
    })

    const user = new User({
        name : name,
        password : password,
        email : email
    });


}


export const getSignOut = async (req, res)=>{
    const result = await res.clearCookie('token');
    res.redirect('/auth/sign-in');
}