import shortId from 'shortid';
import Url from '../models/shorter-url.js';
import User from '../models/user.js';


export const home = async (req, res)=>{

    const user = await User.findById(req.user.userId);

    user.populate('record.urls.urlId')
    .then(user => {
        // console.log(result);
        const urls = user.record.urls.map(url => {

            return {
                fullUrl : url.urlId.fullUrl,
                shortUrl : url.urlId.shortUrl,
                clicks : url.urlId.clicks
            }
        })

        console.log(urls);

        return res.render('home', { urls : urls});
    })
    .catch(error => {
        console.error(error);
    })
}

export const creatShortUrl = (req, res)=>{

    const userId = req.user.userId;

    const fullUrl = req.body.url;

    if(fullUrl.trim().length === 0){
        return res.redirect('/');
    }

    const shortUrl = shortId.generate();

    const url = new Url({
        fullUrl : fullUrl,
        shortUrl : shortUrl,
        userId : req.user.userId
    });

    let createdUrl;

    url.save()
    .then((resUrl)=>{
        createdUrl = resUrl;
        return User.findById(userId);
    })
    .then(user => {
        return user.addToRecord(createdUrl._id);
    })
    .then(()=>{
        console.log("You have succufully created short Url");
        return res.redirect('/');
    })
    .catch(error => {
        console.warn(error);
    });

}


export const getShortUrl = (req, res)=>{


    let shortUrl = req.params.shortUrl;

    Url.findOne({shortUrl : shortUrl})
    .then(resultUrl => {

        const clicks = resultUrl.clicks + 1;
        resultUrl.clicks = clicks;
        return resultUrl.save();

    })
    .then((result)=> {
        res.redirect(result.fullUrl);
    })
    .catch(error => {
        console.log(error);
    })
}