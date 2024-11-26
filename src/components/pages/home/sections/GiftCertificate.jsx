import React from "react";
import Button from "../../../shared/Button";

export default function GiftCertificate() {
  return (
    <section className="bg-brand-cream">
      <div className="container mx-auto grid lg:grid-cols-2 justify-between gap-16 px-30px">
        {/* Texts */}
        <div className="max-w-xl space-y-30px lg:space-y-10">
          <h2>Подарочный сертификат на обучение</h2>

          {/* Image Mobile */}
          <img
            src="/assets/images/img-gift-certificate-mobile.svg"
            alt="Certificate"
            className="xs:hidden w-full"
          />

          <img
            src="/assets/images/img-gift-certificate.svg"
            alt="Certificate"
            className="hidden xs:block lg:hidden"
          />

          <p className="text-base xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-6 3xl:leading-">
            Покупай сертификат на обучение и подари его тому, кто никак не может
            решиться
          </p>
          <Button
            variant="primary"
            className="h-16 lg:h-[77px] 3xl:h-24 w-full sm:w-fit lg:text-lg 3xl:text-22 font-medium rounded-full px-6 lg:px-11 3xl:px-[60px]"
          >
            Оформить сертификат
          </Button>
        </div>

        <img
          src="/assets/images/img-gift-certificate.svg"
          alt="Certificate"
          className="hidden lg:block w-full"
        />
      </div>
    </section>
  );
}
