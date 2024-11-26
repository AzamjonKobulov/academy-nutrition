import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";
import LogoAndLangs from "./FooterLogoAndLangs";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-brand-cream">
      <div className="bg-brand-primary text-white rounded-t-3xl sm:rounded-t-[50px] lg:rounded-t-[75px] 3xl:rounded-t-[100px] pb-30px 3xl:pb-10">
        <div className="container mx-auto px-30px">
          {/* Main Part */}
          <div className=" flex flex-col xl:flex-row justify-between gap-30px 2xl:gap-16 3xl:gap-32 pb-10 pt-30px sm:pt-10 lg:pt-[60px] 3xl:pt-20 ">
            <div className="flex flex-col sm:flex-row gap-30px justify-between border-b border-white/50 xl:border-none pb-30px 2xl:pb-0">
              <LogoAndLangs />
              <div className="xl:hidden">
                <FooterContacts />
              </div>
            </div>
            <div className="flex-1 3xl:w-auto flex justify-between 3xl:justify-start">
              <FooterLinks />
              <div className="hidden xl:block">
                <FooterContacts />
              </div>
            </div>
          </div>
          {/* Bottom */}
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
