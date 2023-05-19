/**/
/*Import thư viện express*/
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import initWebRoutes from './route/web.js';
import connection from './configs/connectDB.js';
import initAPIRoutes from './route/api.js';

require('dotenv').config();
// import morgan from 'morgan';
var morgan = require('morgan');
/*Tạo ứng dụng*/
const app = express();
/*Tạo cổng*/
const port = process.env.PORT || 7703;

//Sử dụng hàm next để kiểm tra điều kiện, in log ở console sau đó chạy middleware
app.use((req, res, next) => {
  //check => return res.send()
  console.log('>>> run into the middleware');
  console.log(req.method);
  next();
});

// Sử dụng morgan để log request ra console (để debug)
app.use(morgan('combined'));

/*Cấu hình Express gửi POST request*/
//Config middleware for POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*Setup view engine*/
configViewEngine(app);
/*Init web route*/
initWebRoutes(app);
/*Init web route*/
initAPIRoutes(app);

//Always put this line at the end of all routes
/*Handle 404 Not Found*/
app.use((req, res) => {
  return res.render('404.ejs');
});

/*Trong terminal sẽ hiện message dưới*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})