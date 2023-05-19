import connection from '../configs/connectDB.js';

let getAllUSer = (req, res) => {
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
      return res.status(200).json({
        message: "Success", //Message trả về
        data: data
      });
    });
}

let createNewUser = (req, res) => {
  let data = req.body;
  if (!data.firstName || !data.lastName || !data.email || !data.address) {
    return res.status(500).json({
      message: "Missing input parameter"
    });
  }
  connection.query(
    /*SQL syntax ở đây */
    'INSERT INTO `users`(`firstName`, `lastName`, `email`, `address`) VALUES (?,?,?,?)',
    [data.firstName, data.lastName, data.email, data.address],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server

      return res.status(200).json({
        message: "Success", //Message trả về
        data: data
      });
    }
  );
}

let updateUser = (req, res) => {
  let data = req.body;
  if (!data.id || !data.firstName || !data.lastName || !data.email || !data.address) {
    return res.status(500).json({
      message: "Missing input parameter"
    });
  }
  connection.query(
    /*SQL syntax ở đây */
    'UPDATE `users` SET `firstName`=?,`lastName`=?,`email`=?,`address`=? WHERE `id`=?',
    [data.firstName, data.lastName, data.email, data.address, data.id],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      return res.status(200).json({
        message: "Success", //Message trả về
        data: data
      });
    }
  );
}

let deleteUser = (req, res) => {
  let data = req.body;
  if (!data.id) {
    return res.status(500).json({
      message: "Missing input parameter"
    });
  }
  connection.query(
    /*SQL syntax ở đây */
    'DELETE FROM `users` WHERE `id`=?',
    [data.id],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      return res.status(200).json({
        message: "Success", //Message trả về
        data: data
      });
    }
  );
}

module.exports = {
  getAllUSer, createNewUser, updateUser, deleteUser
}