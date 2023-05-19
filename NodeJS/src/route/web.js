import express from 'express';
import homeController from '../controller/homeController.js';
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');
let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/image/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

let uploadMultipleFiles = multer({ storage: storage, fileFilter: imageFilter }).array('multiple-images', 3);

const initWebRoute = (app) => {
  /*Tạo route*/
  // Các method chính:
  // Create = Post Read = Get Update = Put Delete = Delete
  router.get('/', homeController.getHomepage);
  //Tạo route tên detail tương ứng với user
  router.get('/detail/user/:id', homeController.getDetailPage);
  /*Tạo route là about*/
  router.get('/about', (req, res) => {
    res.send(`I'm Kiet`)
  })
  /*Tạo route là contact*/
  router.get('/contact', (req, res) => {
    //Điều hướng client đến file index.html
    res.sendFile(__dirname + '/contact.html')
  })
  /*Tạo route là create-new-user*/
  router.post('/create-new-user', homeController.createNewUser);
  /*Tạo route là delete-user*/
  router.post('/delete-user', homeController.deleteUser);
  /*Tạo route là edit-user*/
  router.get('/edit/user/:id', homeController.getEditPage);
  /*Tạo route là update-user*/
  router.post('/update-user', homeController.updateUser);
  /*Tạo route là upload*/
  router.get('/upload', homeController.getUploadPage);

  /*Upload single image below: */
  // router.post('/upload-profile-pic', upload.single('profile_pic'), homeController.handleUploadFile);

  /*Upload multiple images below: */
  router.post('/upload-multiple-images', (req, res, next) => {
    uploadMultipleFiles(req, res, (err) => {
      if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
        // handle multer file limit error here
        res.send('LIMIT_UNEXPECTED_FILE')
      } else if (err) {
        res.send(err)
      }

      else {
        // make sure to call next() if all was well
        next();
      }
    })
  }, homeController.handleUploadMultipleFile)
  return app.use('/', router);
}
export default initWebRoute;