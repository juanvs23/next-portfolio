import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  author: string;
  message: string;
  subject: string;
  email: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  author,
  message,
  subject,
  email,
  phone,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Do you have received a message </p>
    <p>
      <b>From:</b> {author} - {email}
    </p>
    <p>
      <b>Phone:</b> {phone}
    </p>

    <p>
      <b>subject:</b> {subject}{" "}
    </p>
    <h2>Message:</h2>
    <div>{message}</div>
  </div>
);
