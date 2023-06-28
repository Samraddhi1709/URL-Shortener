import mongoose, { Schema, SchemaType } from "mongoose"


const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    record: {
        urls: [
            {
                urlId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Url',
                    require: true
                }
            }
        ]
    }
});


// you need to write here function

userSchema.methods.addToRecord = function(urlId){
    const recordUrls = [...this.record.urls];
    recordUrls.push({
        urlId : urlId
    });

    const updatedRecord = {
        urls : recordUrls
    }

    this.record = updatedRecord;

    return this.save();
}


const user = mongoose.model('User', userSchema);

export default user;