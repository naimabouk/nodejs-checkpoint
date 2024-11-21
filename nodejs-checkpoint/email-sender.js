const nodemailer = require("nodemailer");
const fs = require("fs");

//Getting email data from json
const emailData = JSON.parse(fs.readFileSync("email_info.json", "utf-8"));

//Creating a transporter object and passing an option object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailData["email"],
    pass: emailData["password"],
  },
});
//Creating a reciver object that store the receiving ends credentials and the email subject and body
const receiver = {
  from: emailData["email"],
  to: "myotheremail@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hey that works!!!",
};

//Sending the email to the receiver's email
transporter.sendMail(receiver, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
