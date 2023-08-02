const multer = require('multer');
const express = require('express');
const router = express.Router();

// destination folder for uploaded files
const uploader = multer({ dest: './uploads' }); 

router.post('/uploadfile', uploader.single('myfile') ,(req, res) => {
    res.json({message : 'File Uploaded Successfully'});
});

module.exports = router;