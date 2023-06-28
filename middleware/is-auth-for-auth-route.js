import jwt from "jsonwebtoken";
 const isAuth = (req,res,next)=>{


    const token = req.cookies.token;

    // next();

    if(!token){
        next();
        // console.log("Not authenticated");
        // return res.redirect('/auth/sign-in');
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
        next();
        // return res.redirect('/auth/signin');
        // throw error;
    }

    res.redirect('/');

    // req.user = decodedToken;
    // next();

}


export default isAuth;

