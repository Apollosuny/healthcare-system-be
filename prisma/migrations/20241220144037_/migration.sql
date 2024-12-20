-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CLIENT', 'ADMIN', 'OPERATOR', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "OperatorRole" AS ENUM ('NURSE', 'DOCTOR', 'PHARMACIST', 'LAB_TECHNICIAN', 'ADMIN');

-- CreateEnum
CREATE TYPE "RecordMoment" AS ENUM ('BEFORE_MEAL', 'AFTER_MEAL', 'NON_MEAL');

-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING', 'SNACK');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lastLoginAt" TIMESTAMP(3),
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "role" "UserRole" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "avatar" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operator" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "role" "OperatorRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodSugar" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "systolic" DOUBLE PRECISION NOT NULL,
    "diastoic" DOUBLE PRECISION NOT NULL,
    "pulse" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "BloodSugar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodPressure" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "recordMoment" "RecordMoment" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "BloodPressure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "foodName" TEXT NOT NULL,
    "foodImage" TEXT,
    "type" "MealType" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "steps" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medication" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "sideEffects" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prescription" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,
    "medicationId" INTEGER NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthInformation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "totalLiked" INTEGER NOT NULL DEFAULT 0,
    "totalVisited" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "HealthInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientHealthInformation" (
    "id" SERIAL NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL,
    "likeAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,
    "healthInformationId" INTEGER NOT NULL,

    CONSTRAINT "ClientHealthInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_userId_key" ON "Client"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Operator_email_key" ON "Operator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Operator_userId_key" ON "Operator"("userId");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operator" ADD CONSTRAINT "Operator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodSugar" ADD CONSTRAINT "BloodSugar_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodPressure" ADD CONSTRAINT "BloodPressure_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthInformation" ADD CONSTRAINT "HealthInformation_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Operator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientHealthInformation" ADD CONSTRAINT "ClientHealthInformation_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientHealthInformation" ADD CONSTRAINT "ClientHealthInformation_healthInformationId_fkey" FOREIGN KEY ("healthInformationId") REFERENCES "HealthInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
