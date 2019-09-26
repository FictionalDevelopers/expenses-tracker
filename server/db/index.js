import mongoose from 'mongoose';

export default url =>
  mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err));
