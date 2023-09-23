import { initialForm } from "@/app/constants";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { Status } from "@/types";

export async function POST(request: Request) {
  const mail = process.env.EMAIL_ACCOUNT;
  const password = process.env.EMAIL_PASSWORD;
  const formData = await request.formData();
  let data = initialForm;
  data.inputs.map((input) => {
    if (input.inputTitle === "Full Name") {
      input.inputValue = formData.get("name")?.toString() || "";
    }
    if (input.inputTitle === "Phone") {
      input.inputValue = formData.get("phone")?.toString() || "";
    }
    if (input.inputTitle === "Email") {
      input.inputValue = formData.get("email")?.toString() || "";
    }
    if (input.inputTitle === "Subject") {
      input.inputValue = formData.get("subject")?.toString() || "";
    }
    if (input.inputTitle === "Message") {
      input.inputValue = formData.get("message")?.toString() || "";
    }
  });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: mail,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  try {
    transporter.sendMail(
      {
        from: mail,
        to: mail,
        subject: `Message from porfolio website of ${data.inputs[0].inputValue} <${data.inputs[2].inputValue}>`,
        html: `Full Name: ${data.inputs[0].inputValue}<br>
               Phone: ${data.inputs[1].inputValue}<br>
               Email: ${data.inputs[2].inputValue}<br>
               Subject: ${data.inputs[3].inputValue}<br>
               Message: ${data.inputs[4].inputValue}`,
      },
      (err, info) => {
        if (err) {
          data.status = Status.error;
        }
        if (info) {
          data.status = Status.succeeded;
        }
      }
    );
    return NextResponse.json(
      {
        status: Status.succeeded,
        message:
          "Message sent successfully, I will contact you as soon as possible",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: Status.error,
        message:
          "Please try again... Later, Sorry. Contact me by email on my footer",
      },
      { status: 204 }
    );
  }
  return NextResponse.json({ data: "bad Request" }, { status: 400 });
}
