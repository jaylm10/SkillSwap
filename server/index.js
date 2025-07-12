const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv")
const app = express();
const authRoutes = require("./routes/authRoutes")
const profileRoutes = require("./routes/profileRoutes");
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '5mb' }));



mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.log("Connection failed");
});

app.use("/api",authRoutes);
app.use("/api",profileRoutes)




app.listen(process.env.PORT, () => {   
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});