import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const smtpTransport = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: +process.env.NODEMAILER_PORT,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASWORD,
  },
});

export default smtpTransport;
