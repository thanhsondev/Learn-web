import connection from '../configs/connectDB.js';
import multer from 'multer';

let getHomepage = (req, res) => {
  let data = [];
  connection.query(
    /*SQL syntax ở đây */
    'SELECT * FROM `users`',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      results.map((row) => {
        /*get hết data từ db ở xampp*/
        data.push({
          id: row.id,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          address: row.address
        });

      });
      return res.render('index.ejs', { dataUser: data });
    });
}

let getDetailPage = (req, res) => {
  let userId = req.params.id;
  let data = [];
  connection.query(
    /*SQL syntax ở đây */
    'SELECT * FROM `users` WHERE `id` = ?',
    [userId],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      results.map((row) => {
        /*get hết data từ db ở xampp*/
        data.push({
          id: row.id,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          address: row.address
        });
      });
      return res.send(JSON.stringify(data));
    }
  );
}

let createNewUser = (req, res) => {
  let data = req.body;
  connection.query(
    /*SQL syntax ở đây */
    'INSERT INTO `users`(`firstName`, `lastName`, `email`, `address`) VALUES (?,?,?,?)',
    [data.firstName, data.lastName, data.email, data.address],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      return res.redirect('/');
    }
  );
}

let deleteUser = (req, res) => {
  let userId = req.body.userId;
  connection.query(
    /*SQL syntax ở đây */
    'DELETE FROM `users` WHERE `id` = ?',
    [userId],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      return res.redirect('/');
    }
  );
}

let getEditPage = (req, res) => {
  let userId = req.params.id;
  let data = [];
  connection.query(
    /*SQL syntax ở đây */
    'SELECT * FROM `users` WHERE `id` = ?',
    [userId],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      results.map((row) => {
        /*get hết data từ db ở xampp*/
        data.push({
          id: row.id,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          address: row.address
        });
      });
      return res.render('edit.ejs', { dataUser: data[0] });
    }
  );
}

let updateUser = (req, res) => {
  let data = req.body;
  connection.query(
    /*SQL syntax ở đây */
    'UPDATE `users` SET `firstName`=?,`lastName`=?,`email`=?,`address`=? WHERE `id` = ?',
    [data.firstName, data.lastName, data.email, data.address, data.id],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      return res.redirect('/');
    }
  );
}

let getUploadPage = (req, res) => {
  return res.render('uploadFile.ejs');
}

// // Upload single file
// let handleUploadFile = (req, res) => {
//   if (req.fileValidationError) {
//     return res.send(req.fileValidationError);
//   }
//   else if (!req.file) {
//     return res.send('Please select an image to upload');
//   }

//   // Display uploaded image for user validation
//   res.send(`You have uploaded this image: 
//     <hr/>
//     <img src="/image/${req.file.filename}" width="500">
//     <hr />
//     <a href="/upload">Upload another image</a>`);
// }

// Upload multiple files
let handleUploadMultipleFile = (req, res) => {

  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  }
  else if (!req.files) {
    return res.send('Please select an image to upload');
  }

  let result = "You have uploaded these images: <hr />";
  const files = req.files;
  let index, len;

  // Loop through all the uploaded images and display them on frontend
  for (index = 0, len = files.length; index < len; ++index) {
    result += `<img src="/image/${files[index].filename}" width="500"> <hr/>`;
  }
  result += '<hr/><a href="/upload">Upload more images</a>';
  res.send(result);
}

module.exports = {
  getHomepage,
  getDetailPage,
  createNewUser,
  deleteUser,
  getEditPage,
  updateUser,
  getUploadPage,
  // handleUploadFile,
  handleUploadMultipleFile
}