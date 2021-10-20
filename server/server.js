const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: 'server/.env' });

const port = process.env.PORT;

app.listen(5000, () => {
  console.log(`Server is up and running on  port ${port}`);
});
