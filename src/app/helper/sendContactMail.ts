import { sendMailType } from "@/types";
import nodemailer from "nodemailer";

export const sendContactMail = async ({
  nodemailer,
  auth: { user, password },
  mailData,
}: sendMailType) => {
  const { from, to, subject, html } = mailData;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: user,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  await transporter.sendMail(
    {
      from,
      to,
      subject,
      html,
    },
    (err: any, info: any) => {
      if (err) {
        console.log(err);
      }
      if (info) {
        console.log(info);
      }
    }
  );
};
