import { Link } from "react-router-dom";

import Button from "../../shared/Button";
import { useLangsContext } from "../../../contexts/LangsContexts";

export default function LogoAndLangs() {
  const { langs, lang, setLang } = useLangsContext();

  return (
    <div className="max-w-[249px]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/assets/images/logo-footer.svg"
          alt="Logo"
          className="w-[180px] h-9 3xl:w-auto 3xl:h-auto"
        />
      </Link>
      <p className="text-sm 3xl:text-lg text-white/50 mt-5 3xl:mt-30px">
        Нутрициология, диетология и правильное питание. Лектор NIH, США
      </p>

      <div className="flex items-center gap-2 mt-8 lg:mt-14">
        {langs.map(({ code, label }) => (
          <Button
            key={code}
            className={`size-8 3xl:size-11 group text-sm 3xl:text-xl font-medium border border-white rounded-full ${
              code === lang ? "bg-white text-brand-primary" : "text-white"
            }`}
            onClick={() => setLang(code)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
