import mongoose from '../database/index';

const PersonSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});


export default mongoose.model('person',PersonSchema);