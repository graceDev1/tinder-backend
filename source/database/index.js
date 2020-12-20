import mongoose from 'mongoose';
import config from 'config';

let url = config.get('mongoUri');

mongoose.connect(url, 
    {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser:true})
.then(()=> {
    console.log('connect to atlas')
})
.catch(err => console.log(err));

export default mongoose;