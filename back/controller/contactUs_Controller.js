const axios = require("axios");
const sendEmail = require("../sendEmail");

exports.sendEmailToClient = async (req, res) => {
  const { from_name, email, pNumber, message, userOrgination } = req?.body;
  try {
    let contentString = `<p style="color:red; font-weight: bold;">Hi there,  <p> ${from_name} here.</p></p></br>
      <p>Contact Number:  ${pNumber}</p></br>
      <p>Organization:  ${userOrgination}</p></br>
      <p>Query:  ${message}</p></br>`;

    const subject = "contact from a user";

    const emailSent = await sendEmail(
      subject,
      contentString,
      "eden.the.egg12@gmail.com",
      email,
      "mohsinbwp2018@gmail.com",
      "mohsinbwp2018@gmail.com"
    );
    console.log("emailSent");
    res.status(200).send({
      data:emailSent,
      message:'Thank you for getting in touch!',
      success: true,
    });}
catch (error) {
    console.error(error);
    return 'Failed to send email';
  }
};
