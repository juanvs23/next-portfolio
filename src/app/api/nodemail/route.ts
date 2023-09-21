import { initialForm } from "@/app/constants";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // console.log(request);
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
    host: "smtp.elasticemail.com",
    port: 2525,
    //secure: true,
    auth: {
      user: "juanvs23@gmail.com",
      pass: "608842CD4E4565C97D19A864406D490172F3",
    },
  });
  await transporter.sendMail(
    {
      from: "juanvs23@gmail.com",
      to: "juanv23@gmail.com",
      subject: "Test Email Subject",
      text: "Example Plain Text Message Body",
    },
    (err, info) => {
      console.log(err);
      console.log(info);
    }
  );

  return NextResponse.json({ data });
}
