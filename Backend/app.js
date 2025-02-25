const express=require('express');
const app=express();
const petRoutes=require('./routes/petRoutes');
const bodyParser=require('body-parser');
const cors=require('cors');
const path = require('path');
// const fs = require('fs');
const userRoutes=require('./routes/userRoutes');
const adoptionRoutes=require('./routes/adoptionRoutes');
const cookieParser = require('cookie-parser');
const multer = require("multer");




app.use(cors());
app.use(express.json());
const upload = multer();
app.use(upload.none()); 
app.use(cookieParser());

app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// app.get('/uploads/:filename', (req, res) => {
//   const filePath = path.join(__dirname, 'uploads', req.params.filename);
//   const fileExtension = path.extname(filePath).toLowerCase();

//   // Manually set the correct MIME type
//   if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
//     res.setHeader('Content-Type', 'image/jpeg');
//   } else if (fileExtension === '.mp4') {
//     res.setHeader('Content-Type', 'video/mp4');
//   } else {
//     res.setHeader('Content-Type', 'application/octet-stream'); // Default
//   }

//   // Send the file
//   fs.createReadStream(filePath).pipe(res);
// });




app.use('/api', petRoutes);

app.use('/api/users', userRoutes);

app.use('/api/',adoptionRoutes);

module.exports=app;