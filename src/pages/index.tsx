import { SeoHead } from "@/components/seohead";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <SeoHead
        title={"Home"}
        titleTemplate={"My-WebSite"}
        description={"Next.js + TypeScript Sample Project."}
        ogType={"website"}
        imgUrl={"/ogimg_sample.jpg"}
      />
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href={"/posts"}>ブログページを表示する</Link>
          <Link href={"/contact"}>お問い合せフォームを表示する</Link>
        </div>
      </main>
    </>
  );
}
