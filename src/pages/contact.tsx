import { SeoHead } from "@/components/seohead";
import { useEffect } from "react";
import styles from "../styles/Contact.module.css";

type Props = {
  FormrunID: string;
};

const Contact: React.FC<Props> = () => {
  const FormrunID = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`;
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0] as HTMLElement;
    const scriptUrl = document.createElement("script");
    scriptUrl.src = "https://sdk.form.run/js/v2/embed.js";
    head.appendChild(scriptUrl);
    console.log("scriptよみこんだよ");
    return () => {
      head.removeChild(scriptUrl);
    };
  }, []);
  return (
    <>
      <SeoHead
        title="contact"
        titleTemplate="My-WebSite"
        description="Next.js + TypeScript Sample Project."
        ogType="website"
        imgUrl="/ogimg_sample.jpg"
      />
      <main className={styles.main}>
        <div className={styles.formrunwidth}>
          <div
            className="formrun-embed"
            data-formrun-form={FormrunID}
            data-formrun-redirect="true"
          />
        </div>
      </main>
    </>
  );
};

export default Contact;
