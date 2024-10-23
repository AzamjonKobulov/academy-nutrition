import Button from "../../shared/Button";
import LangsDropdown from "./LangsDropdown";
import { useLangsContext } from "../../../contexts/LangsContexts";

export default function ContactsAndLangs() {
  const { lang, setLang, langs } = useLangsContext(); // Destructure langs from context

  return (
    <div className="flex items-center">
      {/* Lang Buttons above 1440px */}
      <div className="hidden 3xl:flex items-center gap-2.5">
        {langs.map(({ code, label }) => (
          <Button
            key={code}
            variant={code === lang ? "primary" : "outline"}
            className="size-11 group text-xl font-medium rounded-full"
            onClick={() => setLang(code)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Lang Buttons under 1440px */}
      <LangsDropdown />
    </div>
  );
}
