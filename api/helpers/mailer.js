const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const mailer = async (
  email,
  recipientName,
  badgeName,
  markdownLink,
  htmlLink,
  results
) => {
  try {
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_ADDRESS ||
      !process.env.EMAIL_PASSWORD
    ) {
      console.error("Email service is not configured");
      return;
    } else {
      try {
        // Create a transporter using your email service provider's SMTP settings
        const transporter = nodemailer.createTransport({
          service: process.env.EMAIL_HOST,
          auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        let mailOptions = {};

        if (results) {
          // Read the HTML template file
          const templatePath = path.resolve(
            __dirname,
            "./email_templates/failure.html"
          );
          const html = fs.readFileSync(templatePath, { encoding: "utf-8" });

          // Replace placeholders with dynamic values in the HTML template
          const replacedHTML = await html
            .replace("{{recipientName}}", recipientName)
            .replace("{{badgeName}}", badgeName)
            .replace("{{results}}", results);

          // Define the email options with HTML content
          mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject: "DEI Badging report",
            html: replacedHTML,
          };
        } else {
          // Read the HTML template file
          const templatePath = path.resolve(
            __dirname,
            "./email_templates/success.html"
          );
          const html = fs.readFileSync(templatePath, { encoding: "utf-8" });

          // Replace placeholders with dynamic values in the HTML template
          const replacedHTML = await html
            .replace("{{recipientName}}", recipientName)
            .replace("{{badgeName}}", badgeName)
            .replace("{{markdownLink}}", markdownLink)
            .replace("{{htmlLink}}", htmlLink);

          // Define the email options with HTML content
          mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject: "DEI Badging report",
            html: replacedHTML,
          };
        }

        // Send the email
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log("Error:", error);
          } else {
            console.log("Email sent:", info.response);
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = mailer;
