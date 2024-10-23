import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-30px 3xl:gap-12 3xl:justify-between">
      {/* LInks 1 */}
      <div className="space-y-7">
        <h5 className="font-medium text-xl 3xl:text-[26px] text-white/50">
          Курсы
        </h5>
        <ul className="w-[227px] lg:w-[150px] 3xl:w-[200px] space-y-5 text-sm 3xl:text-lg">
          <li className="hover:text-white/50 transition-all duration-200">
            <Link to="/">Полный профессиональный</Link>
          </li>
          <li className="hover:text-white/50 transition-all duration-200">
            <Link to="/">Для себя</Link>
          </li>
          <li className="hover:text-white/50 transition-all duration-200">
            <Link to="/">Для спортсменов</Link>
          </li>
          <li className="hover:text-white/50 transition-all duration-200">
            <Link to="/">Вегетерианство</Link>
          </li>
        </ul>
      </div>
      {/* LInks 2 */}
      <div className="space-y-7">
        <h5 className="font-medium text-xl 3xl:text-[26px] text-white/50">
          Академия
        </h5>
        <div className="flex sm:justify-between 3xl:justify-start gap-10 sm:gap-30px 3xl:gap-12">
          <ul className="w-[150px] 3xl:w-[200px] space-y-5 text-sm 3xl:text-lg">
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Процесс обучения</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Анна Пригожаева</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Эксперты</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Вакансии</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Контакты</Link>
            </li>
          </ul>
          <ul className="w-[150px] 3xl:w-[200px] space-y-5 text-sm 3xl:text-lg">
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Кейсы/отзывы</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Блог</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Вопрос-ответ</Link>
            </li>
            <li className="hover:text-white/50 transition-all duration-200">
              <Link to="/">Поддержка</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
