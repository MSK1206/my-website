import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const hideTogglemain = () => {
    document.querySelector("#navbarNav")?.classList.remove("show");
    console.log("bootstrap Navbar collapse hide!!");
  };
  return (
    <>
      <main onClick={hideTogglemain}>{children}</main>
    </>
  );
}

export default Layout;
