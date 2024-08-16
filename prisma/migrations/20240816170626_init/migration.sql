CREATE TABLE "Loyalty" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "qualicationId" TEXT NOT NULL,
    "donationId" TEXT NOT NULL,
    "donatorId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "qualityCalification" INTEGER NOT NULL,
    "timeCalification" INTEGER NOT NULL,
    "packagingCalification" INTEGER NOT NULL,
    "communicationCalification" INTEGER NOT NULL,
    "generalScore" REAL NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
