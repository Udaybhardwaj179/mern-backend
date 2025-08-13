const twilio = require('twilio');

const dotenv = require('dotenv');
dotenv.config();

console.log('Twilio Account SID:', process.env.TWILIO_ACCOUNT_SID);
console.log('Twilio Auth Token:', process.env.TWILIO_AUTH_TOKEN);
console.log('Twilio Phone Number:', process.env.TWILIO_PHONE_NUMBER);
const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID, 
  process.env.TWILIO_AUTH_TOKEN
);

const sendOtp = async (phoneNumber, otp) => {
  try {
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,  // Ensure this matches your environment variable
      to: phoneNumber,  // Make sure the phone number is valid and in the correct format
    });
    return message;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to send OTP');
  }
};

module.exports = sendOtp;
