/*
  Warnings:

  - You are about to drop the column `adress` on the `EmpLoyee` table. All the data in the column will be lost.
  - Added the required column `address` to the `EmpLoyee` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EmpLoyee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "EmpLoyee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EmpLoyee" ("age", "firstName", "id", "lastName", "userId") SELECT "age", "firstName", "id", "lastName", "userId" FROM "EmpLoyee";
DROP TABLE "EmpLoyee";
ALTER TABLE "new_EmpLoyee" RENAME TO "EmpLoyee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
