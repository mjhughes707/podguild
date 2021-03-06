const mongoose = require("mongoose"); // brings in Mongoose - used to connect
const config = require("config"); // brings in config package - used to grab string from default.json
const db = config.get("mongoURI"); // connection string obtained from mongoDB.Atlas

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // connects to mongoDB - returns a promise
      useNewUrlParser: true, // replaces deprecated URL string parser
      useUnifiedTopology: true, // replaces deprecated Server Discovery & Monitoring engine
      useCreateIndex: true, // replaces deprecated collection.ensureIndex
      useFindAndModify: false, // resolves warning regarding `findOneAndUpdate()`
      // more info at https://mongoosejs.com/docs/deprecations.html#-findandmodify-
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // exits process with failure
  }
};

module.exports = connectDB;
