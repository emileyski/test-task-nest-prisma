-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_authorId_fkey";

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE;
