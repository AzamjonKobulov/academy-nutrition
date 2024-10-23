import Button from "../../shared/Button";

export default function FooterContacts() {
  return (
    <div className="h-full lg:h-auto flex flex-col sm:items-end justify-between gap-30px sm:gap-12 lg:gap-8 3xl:gap-32">
      {/* Tel & Socials */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 3xl:gap-6">
        <div className="space-y-1.5">
          <a
            href="tel:"
            className="font-bold text-[26px] 3xl:text-4xl whitespace-nowrap hover:text-white/50 transition-all duration-200"
          >
            +1 424 477-33-77
          </a>
          <p className="text-white/50 text-sm 3xl:text-lg whitespace-nowrap">
            Ежедневно с 9:00 до 21:00 по МСК
          </p>
        </div>
        {/* Socials */}
        <div className="flex items-center">
          {/* Telegram */}
          <a
            href=""
            className="size-14 3xl:size-[68px] shrink-0 group grid place-content-center bg-brand-primary border border-white rounded-full hover:border-white/50 transition-all duration-200"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white group-hover:fill-white/50 transition-all duration-200"
            >
              <path d="M21.9815 1.72684C22.153 0.576168 21.0999 -0.332066 20.1152 0.117137L0.501625 9.06406C-0.204561 9.38619 -0.152905 10.4975 0.579517 10.7398L4.62433 12.0781C5.3963 12.3335 6.23222 12.2015 6.90633 11.7176L16.0256 5.17182C16.3006 4.97443 16.6003 5.38066 16.3654 5.63233L9.80115 12.6638C9.16439 13.3459 9.29078 14.5017 10.0567 15.0007L17.4061 19.789C18.2304 20.326 19.2908 19.7865 19.445 18.7516L21.9815 1.72684Z" />
            </svg>
          </a>
          {/* Whatsapp */}
          <a
            href=""
            className="size-14 3xl:size-[68px] shrink-0 group grid place-content-center bg-brand-primary border border-white rounded-full hover:border-white/50 transition-all duration-200 -ml-2.5"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white group-hover:fill-white/50 transition-all duration-200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 24.375C19.2822 24.375 24.375 19.2822 24.375 13C24.375 6.71776 19.2822 1.625 13 1.625C6.71776 1.625 1.625 6.71776 1.625 13C1.625 15.0401 2.16206 16.9547 3.10251 18.6103L1.625 24.375L7.56833 22.9968C9.18237 23.8757 11.0329 24.375 13 24.375ZM13 22.625C18.3157 22.625 22.625 18.3157 22.625 13C22.625 7.68426 18.3157 3.375 13 3.375C7.68426 3.375 3.375 7.68426 3.375 13C3.375 15.0524 4.01741 16.9548 5.11212 18.5171L4.25 21.75L7.53994 20.9275C9.09136 21.9981 10.9725 22.625 13 22.625Z"
              />
              <path d="M10.1563 7.71887C9.88582 7.17565 9.47093 7.22374 9.0518 7.22374C8.30274 7.22374 7.13477 8.12097 7.13477 9.7908C7.13477 11.1593 7.7378 12.6574 9.76984 14.8983C11.7309 17.061 14.3076 18.1798 16.4468 18.1417C18.5859 18.1036 19.0261 16.2628 19.0261 15.6411C19.0261 15.3656 18.8551 15.2281 18.7373 15.1907C18.0083 14.8409 16.6638 14.189 16.3579 14.0665C16.052 13.9441 15.8923 14.1097 15.793 14.1998C15.5156 14.4642 14.9656 15.2433 14.7774 15.4186C14.5891 15.5938 14.3084 15.5051 14.1915 15.4389C13.7617 15.2664 12.5961 14.748 11.6671 13.8473C10.5181 12.7335 10.4506 12.3503 10.2342 12.0092C10.061 11.7363 10.1881 11.5689 10.2515 11.4957C10.499 11.2101 10.8409 10.7691 10.9942 10.5499C11.1475 10.3308 11.0258 9.99804 10.9527 9.7908C10.6387 8.89954 10.3726 8.15345 10.1563 7.71887Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Cabinet & Support */}
      <div className="flex flex-col md:flex-row lg:flex-col 3xl:flex-row sm:items-end 3xl:items-center gap-5">
        {/* Cabinet */}
        <Button
          variant="outline"
          className="h-14 3xl:h-[70px] group flex items-center justify-center sm:justify-start gap-2.5 text-white text-lg 3xltext-22 font-medium border border-white rounded-full hover:border-white/50 transition-all duration-200 px-6 3xl:px-30px"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 lg:size-auto fill-white group-hover:fill-white/50 transition-all duration-200"
          >
            <g clipPath="url(#clip0_324_3637)">
              <path d="M20.4853 3.51471C18.2188 1.24823 15.2053 0 12 0C8.79474 0 5.78119 1.24823 3.51471 3.51471C1.24823 5.78119 0 8.79474 0 12C0 15.2053 1.24823 18.2188 3.51471 20.4853C5.78119 22.7518 8.79474 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79474 22.7518 5.78119 20.4853 3.51471ZM5.20807 20.1233C5.60431 16.7139 8.53564 14.0815 12 14.0815C13.8263 14.0815 15.5436 14.7931 16.8354 16.0847C17.9268 17.1762 18.6151 18.6013 18.7921 20.1231C16.9519 21.6643 14.5825 22.5938 12 22.5938C9.41748 22.5938 7.04828 21.6645 5.20807 20.1233ZM12 12.6332C9.99042 12.6332 8.35529 10.998 8.35529 8.98846C8.35529 6.9787 9.99042 5.34375 12 5.34375C14.0096 5.34375 15.6447 6.9787 15.6447 8.98846C15.6447 10.998 14.0096 12.6332 12 12.6332ZM20.0024 18.9344C19.6441 17.4897 18.8969 16.1576 17.8297 15.0905C16.9655 14.2262 15.943 13.5778 14.8279 13.1715C16.1684 12.2624 17.051 10.7265 17.051 8.98846C17.051 6.20343 14.785 3.9375 12 3.9375C9.21497 3.9375 6.94904 6.20343 6.94904 8.98846C6.94904 10.7274 7.83234 12.2639 9.17395 13.1728C8.14801 13.5467 7.19861 14.1248 6.38177 14.8857C5.19891 15.9873 4.3775 17.3919 3.99664 18.9333C2.38367 17.0739 1.40625 14.649 1.40625 12C1.40625 6.15857 6.15857 1.40625 12 1.40625C17.8414 1.40625 22.5938 6.15857 22.5938 12C22.5938 14.6495 21.616 17.075 20.0024 18.9344Z" />
            </g>
            <defs>
              <clipPath id="clip0_324_3637">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="group-hover:text-white/50 whitespace-nowrap transition-all duration-200">
            Личный кабинет
          </span>
        </Button>
        {/* Support */}
        <a
          href="tel:"
          className="h-14 3xl:h-[70px] group flex items-center justify-center sm:justify-start gap-2.5 text-white text-lg 3xltext-22 font-medium border border-white rounded-full hover:border-white/50 transition-all duration-200 px-6 3xl:px-30px"
        >
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 lg:size-auto fill-white group-hover:fill-white/50 transition-all duration-200"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.27116 13.7594C4.23388 13.7967 4.21875 13.8394 4.21875 13.8758V17.5883C4.21875 18.236 4.75224 18.7695 5.39999 18.7695H6.86245C6.95898 18.7695 7.03127 18.6972 7.03127 18.6008V13.8758C7.03127 13.7845 6.9529 13.707 6.86245 13.707H4.38753C4.35113 13.707 4.30842 13.7222 4.27116 13.7594ZM2.53125 13.8758C2.53125 12.8585 3.37032 12.0195 4.38753 12.0195H6.86245C7.89703 12.0195 8.71877 12.8646 8.71877 13.8758V18.6008C8.71877 19.6293 7.89095 20.457 6.86245 20.457H5.39999C3.82024 20.457 2.53125 19.168 2.53125 17.5883V13.8758Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5 4.70703C9.61227 4.70703 6.46875 7.85055 6.46875 11.7383V12.8745C6.46875 13.3405 6.09099 13.7183 5.625 13.7183C5.15901 13.7183 4.78125 13.3405 4.78125 12.8745V11.7383C4.78125 6.91854 8.68023 3.01953 13.5 3.01953C18.3198 3.01953 22.2188 6.91854 22.2188 11.7383V12.8633C22.2188 13.3293 21.841 13.707 21.375 13.707C20.909 13.707 20.5313 13.3293 20.5313 12.8633V11.7383C20.5313 7.85055 17.3877 4.70703 13.5 4.70703Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.4287 18.7862C21.8856 18.878 22.1815 19.3227 22.0898 19.7796C21.4946 22.7423 18.8821 24.9684 15.75 24.9684H14.625C14.159 24.9684 13.7812 24.5907 13.7812 24.1247C13.7812 23.6586 14.159 23.2809 14.625 23.2809H15.75C18.0628 23.2809 19.9954 21.637 20.4353 19.4473C20.5271 18.9904 20.9718 18.6944 21.4287 18.7862Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.0212 13.7594C19.9839 13.7967 19.9687 13.8394 19.9687 13.8758V18.6008C19.9687 18.6921 20.0471 18.7695 20.1376 18.7695H21.5438C22.2253 18.7695 22.7813 18.2135 22.7813 17.532V13.8758C22.7813 13.7845 22.703 13.707 22.6125 13.707H20.1376C20.1012 13.707 20.0585 13.7222 20.0212 13.7594ZM18.2812 13.8758C18.2812 12.8585 19.1203 12.0195 20.1376 12.0195H22.6125C23.647 12.0195 24.4688 12.8646 24.4688 13.8758V17.532C24.4688 19.1455 23.1573 20.457 21.5438 20.457H20.1376C19.103 20.457 18.2812 19.6119 18.2812 18.6008V13.8758Z"
            />
          </svg>

          <span className="group-hover:text-white/50 whitespace-nowrap transition-all duration-200">
            Техподдержка
          </span>
        </a>
      </div>
    </div>
  );
}
