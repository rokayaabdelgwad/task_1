const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(`mongodb+srv://rokayaabdelgwad246:fs8MupZfAXdZa8t5@cluster0.42tblox.mongodb.net/`);
  console.log("connected to database successfully ✅✅✅✅");
}

main().catch((err) => console.log(err));

