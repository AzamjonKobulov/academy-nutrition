import Button from "../../../shared/Button";

export default function AboutDoctor() {
  return (
    <section className="bg-brand-cream">
      <div className="container mx-auto grid md:grid-cols-2 gap-30px px-30px">
        <div className="flex flex-col justify-between lg:block md:space-y-8 lg:space-y-24 order-2 md:order-1">
          <h2 className="hidden md:block">Личная страница на about.doctor</h2>

          <div className="space-y-30px">
            <p>Все студенты получают страницу на сайте about.doctor</p>

            <Button
              variant="primary"
              className="w-full sm:w-auto h-[77px] text-lg 3xl:text-22 font-medium rounded-full px-6 lg:px-11"
            >
              Посмотреть пример страницы
            </Button>
          </div>
        </div>

        <div className="space-y-8 md:space-y-0 order-1 md:order-2">
          <h2 className="md:hidden">Личная страница на about.doctor</h2>

          <div className="space-y-5 sm:space-y-9 lg:space-y-10 bg-white rounded-2xl lg:rounded-30px py-8 lg:py-[60px] px-5 lg:px-6 3xl:px-10">
            <img
              src="/assets/images/img-tile-about-doctor.png"
              alt="Image"
              className="w-60 h-8 lg:w-[294px] lg:h-10 3xl:w-[348px] 3xl:h-12 mx-auto"
            />

            <ul className="list-disc space-y-3.5 lg:space-y-5 text-sm sm:text-base 3xl:text-22 leading-5 sm:leading-6 lg:leading-8 pl-5 lg:pl-8">
              <li>Все студенты получают страницу на сайте about.doctor</li>
              <li>На странице будут указаны ваши контакты</li>
              <li>
                Программы, которые вы прошли за время обучения и сертфикаты по
                каждой из программам
              </li>
              <li>
                Даты обучения и сертификаты по каждой из программ
                школы Nutrition School
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
