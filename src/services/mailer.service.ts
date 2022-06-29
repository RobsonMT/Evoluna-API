import { Response } from "express";
import hbs, {
  NodemailerExpressHandlebarsOptions,
} from "nodemailer-express-handlebars";
import path from "path";
import smtpTransport from "../config/mailer.config";
import { ISchedule } from "../interfaces";

class mailerService {
  confirmAppointment = (res: Response,schedule: ISchedule) => {
    const handlebarOptions: NodemailerExpressHandlebarsOptions = {
      viewEngine: {
        partialsDir: path.resolve("./src/views/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/views/"),
    };

    smtpTransport.use("compile", hbs(handlebarOptions));

    const mailList = [schedule.client.email, schedule.professional.email].toString();

    const mailOptions = {
      from: "'Robson Fernando' <rbsndev3@gmail.com>",
      to: mailList,
      subject: "Confirmação de agendamento",
      template: "email",
      context: {
        day: schedule.day,
        duration: schedule.time.duration,
        client: schedule.client.fullName,
        professional: schedule.professional.name,
      },
      attachments: [
        {
          filename: "bgImage.png",
          path: path.resolve("./src/views/attachments/bgImage.png"),
          cid: "logo",
        },
      ],
    };

    smtpTransport.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(424).json({ message: "Email could not be sent." });
      }

      return res
        .status(201)
        .json(schedule);
    });
  };
}

export default new mailerService();
