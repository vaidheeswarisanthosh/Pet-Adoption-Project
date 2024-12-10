const express=require('express');
const app=express();
const petRoutes=require('./routes/petRoutes');
const bodyParser=require('body-parser');
const cors=require('cors');
const path = require('path');
const fs = require('fs');
const userRoutes=require('./routes/userRoutes');
const adoptionRoutes = require("./routes/adoptionRoutes");



app.use(cors());
app.use(express.json());


app.use(bodyParser.json());
// app.use('/uploads', express.static('uploads')); // Serve static files


// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// app.use(
//     "/uploads",
//     express.static(path.join(__dirname, "uploads"), {
//       setHeaders: (res, path, stat) => {
//         if (path.endsWith(".mp4")) {
//           res.set("Content-Type", "video/mp4");
//         }
//       },
//     })
//   );


// Serve the file with the correct content type
app.get('/uploads/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);
    const fileExtension = path.extname(filePath).toLowerCase();
  
    // Manually set the correct MIME type
    if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (fileExtension === '.mp4') {
      res.setHeader('Content-Type', 'video/mp4');
    } else {
      res.setHeader('Content-Type', 'application/octet-stream'); // Default
    }
  
    // Send the file
    fs.createReadStream(filePath).pipe(res);
  });



app.use('/api', petRoutes);

app.use('/api/users', userRoutes);

app.use("/api/adoptions", adoptionRoutes);
module.exports=app;