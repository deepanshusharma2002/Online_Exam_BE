-- DropForeignKey
ALTER TABLE "public"."discover_more_links" DROP CONSTRAINT "discover_more_links_naukari_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."important_ques_ans" DROP CONSTRAINT "important_ques_ans_naukari_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."useful_link_sections" DROP CONSTRAINT "useful_link_sections_naukari_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."useful_links" DROP CONSTRAINT "useful_links_section_id_fkey";

-- AddForeignKey
ALTER TABLE "important_ques_ans" ADD CONSTRAINT "important_ques_ans_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "useful_link_sections" ADD CONSTRAINT "useful_link_sections_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "useful_links" ADD CONSTRAINT "useful_links_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "useful_link_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discover_more_links" ADD CONSTRAINT "discover_more_links_naukari_id_fkey" FOREIGN KEY ("naukari_id") REFERENCES "naukari"("naukari_id") ON DELETE CASCADE ON UPDATE CASCADE;
