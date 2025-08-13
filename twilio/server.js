const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const sendOtp = require('./otpService.js');
const { PrismaClient } = require('./generated/prisma/client.js');
const sendOtpEmail = require('./emailService.js');

dotenv.config();

// console.log("Environment variables loaded:", process.env); 
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, className, rollNo, phone, email, details } = req.body;

  const existingUser = await prisma.register.findUnique({
    where: { rollNo: rollNo },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  const newUser = await prisma.register.create({
    data: {
      name,
      class: className,
      rollNo,
      details,
      otp,
      otpExpiresAt: otpExpiry,
    },
  });

  await sendOtp(phone, otp);
  await sendOtpEmail(email, otp);

  return res.status(200).json({
    message: 'OTP sent successfully',
    userId: newUser.id,
  });
});


app.post('/verify', async (req, res) => {
  const { rollNo, otp } = req.body;

  const user = await prisma.register.findUnique({
    where: { rollNo },
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (user.isVerified) {
    return res.status(400).json({ error: 'User already verified' });
  }

  if (!user.otp || !user.otpExpiresAt) {
    return res.status(400).json({ error: 'OTP not generated' });
  }

  const now = new Date();
  if (now > user.otpExpiresAt) {
    return res.status(400).json({ error: 'OTP expired' });
  }

  if (user.otp !== otp) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  await prisma.register.update({
    where: { rollNo },
    data: {
      isVerified: true,
      verifiedAt: now,
      otp: null,
      otpExpiresAt: null,
    },
  });

  return res.status(200).json({ message: 'User verified successfully' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
