// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/form.html'))
  );

}