const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/db');

dotenv.config({ path: 'server/.env' });

const port = process.env.PORT;

connectDatabase();

app.listen(5000, () => {
  console.log(`Server is up and running on  port ${port}`);
});
