const express = require('express');
const userRoutes = require('./routes/user-routes');
const imageRoutes = require('./routes/image-upload'); 
const app = express();
const PORT = process.env.PORT || 3001;
// express middleware, used to be bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
 app.use(express.static('client/build'));
}
// app.use(require('./routes'));
app.use('/api/', userRoutes);
app.use('/api/', imageRoutes); 
// Start the API server
app.listen(PORT, () =>
 console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`),
);
