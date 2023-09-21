import HeaderComponent from "../header/headerComponent";
import "./index.scss";
import FooterComponent from "../footer/footerComponent";
import Networks from "@/app/components/networks/networks";

export default function BaseComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
