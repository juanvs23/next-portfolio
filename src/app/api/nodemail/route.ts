import { initialForm } from "@/app/constants";
//import nodemailer from "nodemailer";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Status } from "@/types";
import { EmailTemplate } from "@/app/components/emailTemplate";

export async function POST(request: Request) {
  const emailAccount = process.env.EMAIL_ACCOUNT;
  /*const password = process.env.EMAIL_PASSWORD; */
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
  /*  const transporter = nodemailer.createTransport({
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
  return NextResponse.json({ data: "bad Request" }, { status: 400 }); */

  /**
   * Chance for resend
   */
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const email = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [emailAccount || "juanvs23@gmail.com"],
      subject: `${data.inputs[3].inputValue}`,
      react: EmailTemplate({
        firstName: "Juan Carlos Avila",
        author: data.inputs[0].inputValue,
        message: data.inputs[4].inputValue,
        email: data.inputs[2].inputValue,
        phone: data.inputs[1].inputValue,
        subject: data.inputs[3].inputValue,
      }) as React.ReactElement,
    });

    return Response.json({ email });
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
}
