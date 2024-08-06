const mongoose = require("mongoose");
main().catch((err) => {
  console.log(err);
});

//For brevity, let's assume that all following code is within the main() function.
async function main() {
  await mongoose.connect(
    //NOTE: In the link below after the "goqdl4x.mongodb.net" text just before the "?" we can write the name of our database we
    //want to create the schema in (or map to an existing one). Since I didn't specify anything, it just creates a database called
    //test by default where it creates the schema, but if we want we can choose our database for eg. For <user_new_db> as our database name
    //we would write it as:-
    //"mongodb+srv://pankur216:L4oqQ2mG1SdZ5k72@cluster0.goqdl4x.mongodb.net/user_new_db?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb+srv://pankur216:L4oqQ2mG1SdZ5k72@cluster0.goqdl4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  );

  //Defining a new schema which defines the base for the template on which our data would be stored
  const Users = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });

  //The next step is compilling our schema into a new model
  //NOTE: A model is a class with which we construct documents. In this case, each document will be a
  //kitten with properties and behaviors as declared in our schema.
  const User = mongoose.model("Users", Users);

  //Let's create a user document representing the user we want to create
  const user = new User({
    name: "Ankur Pandey",
    email: "pankur216@gmail.com",
    password: "12345",
  });

  //We need to call save() in order to write to our database
  await user.save();
}
