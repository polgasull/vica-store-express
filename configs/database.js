const mongoose = require('mongoose');
const dbName = 'be-vica-sl';

mongoose.connect(`mongodb://localhost/${dbName}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'You have connection error noob:'));
db.once('open', () => {
  console.log(`Connected to your fucking ${dbName} database`);
});
