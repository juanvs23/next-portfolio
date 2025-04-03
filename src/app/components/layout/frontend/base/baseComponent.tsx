import HeaderComponent from "../header/headerComponent";
import "./index.scss";
import FooterComponent from "../footer/footerComponent";

import LocaleSwitcher from "@/app/components/features/localeSwitcher/localeSwitcher";

export default function BaseComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <LocaleSwitcher />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
