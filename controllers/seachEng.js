import Url from "../models/shorter-url.js";

export const getSearch = (req,res)=>{
    res.render('searchEng/searchEng', {isUrlsExist : false});
}

export const postSearch = (req,res)=>{
    
    const url = req.body.url;
    const str = req.body.url;
    const userId = req.user.userId;
    const delimiter = "http://localhost:8080/";
    const urlCode = str.split(delimiter)[1];

    Url.find({$and : [{ $or : [{fullUrl : url}, {shortUrl : url}, {shortUrl : urlCode}]}, {userId : userId}]})
    .then(urls => {
        res.render('searchEng/searchEng', {isUrlsExist : true, urls : urls});
    })
    .catch(error => {
        console.warn(error);
    })

}