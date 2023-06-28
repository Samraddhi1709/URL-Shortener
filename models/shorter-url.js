import mongoose, { Schema } from "mongoose";



const urlSchema = new Schema({
    fullUrl : {
        type : String,
        require : true
    },
    shortUrl : {
        type : String,
        require : true
    },
    clicks : {
        type : Number,
        require : true,
        default : 0
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        require : true
    }
});


const Url = mongoose.model('Url', urlSchema);

export default Url;