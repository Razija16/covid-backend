const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () =>
  console.log('Server is listening on port' + ' ' + process.env.PORT)
);
