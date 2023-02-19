import { useEffect } from "react";
import styles from "../styles/Contact.module.css";

const Contact: React.FC = () => {
  const FormrunID: string = `${process.env.FORMRUN_FORM_ID}`;
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0] as HTMLElement;
    const scriptUrl = document.createElement("script");
    scriptUrl.src = "https://sdk.form.run/js/v2/embed.js";
    head.appendChild(scriptUrl);
    return () => {
      head.removeChild(scriptUrl);
    };
  }, [FormrunID]);
  return (
    <main className={styles.main}>
      <div className={styles.formrun_width}>
        <div
          className="formrun-embed"
          data-formrun-form={FormrunID}
          data-formrun-redirect="true"
        />
      </div>
    </main>
  );
};

export default Contact;
