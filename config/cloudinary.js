const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
 
cloudinary.config({
  cloud_name: 'dcl3xb9bc',
  api_key: '244399816236893',
  api_secret: 'ab-sjZQCVQnHhEanftaem6omPBA'
  });

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'sweet-dreams',
  allowedFormats: ['jpg', 'png']
});
 
const parser = multer({ storage: storage });

module.exports = parser