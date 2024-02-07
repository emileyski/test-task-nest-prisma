-- CreateTable
CREATE TABLE "author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
