export default function TopPin() {
  return (
    <div className="relative z-10 flex items-center justify-center gap-2.5 bg-brand-primary text-white text-sm sm:text-base 2xl:text-lg font-semibold py-2.5">
      <img
        src="/assets/images/icon-recording.svg"
        alt="Recording icon"
        className="hidden sm:block"
      />
      <a
        href="#"
        className="hover:text-brand-orange transition-all duration-300"
      >
        Вебинар «Нутрициология для жизни»
      </a>
      <p>Записаться</p>
    </div>
  );
}
