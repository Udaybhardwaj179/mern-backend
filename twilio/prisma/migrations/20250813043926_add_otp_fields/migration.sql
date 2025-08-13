-- AlterTable
ALTER TABLE "public"."Register" ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpiresAt" TIMESTAMP(3);
