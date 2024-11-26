import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-3 sm:gap-4 text-sm 3xl:text-lg text-white/50">
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/30 pt-30px 3xl:pt-10">
        <span className="">2023. Все права защищены</span>
        <ul className="hidden lg:flex items-center gap-30px">
          <li>
            <Link
              to="#"
              className="hover:text-white transition-all duration-200"
            >
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:text-white transition-all duration-200"
            >
              Юридическая информация
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col sm:flex-row lg:hidden sm:items-center gap-3 sm:gap-30px">
        <li>
          <Link to="#" className="hover:text-white transition-all duration-200">
            Политика конфиденциальности
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:text-white transition-all duration-200">
            Юридическая информация
          </Link>
        </li>
      </ul>
    </div>
  );
}
