import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/healthcheck', (req, res) => {
  console.log("Server is Healthy");
  res.send("Server is Healthy");  
});

export default app
