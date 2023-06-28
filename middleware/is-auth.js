import jwt from "jsonwebtoken";


export const isAuth = (req,res,next)=>{


    const token = req.cookies.token;

    if(!token){
        console.log("Not authenticated");
        return res.redirect('/auth/sign-in');
    }

    

    let decodedToken;

    try{
       decodedToken = jwt.verify(token, 'himanshu')
    }
    catch(error)
    {
        console.log('You are in is-auth middle ware');
        throw error;
    }

    if(!decodedToken){
        const error = new Error('Not authenticated! ');
        return res.redirect('/auth/signin');
        // throw error;
    }

    req.user = decodedToken;
    next();

}