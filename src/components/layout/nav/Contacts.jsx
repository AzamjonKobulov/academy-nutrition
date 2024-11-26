import Button from "../../shared/Button";

export default function Contacts() {
  return (
    <div className="flex items-center gap-2.5 lg:mr-30px">
      <a
        href="tel:"
        className="h-12 hidden sm:grid place-content-center sm:text-lg font-medium rounded-full text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 px-5"
      >
        +1 424 477-33-77
      </a>
      <Button
        variant="outline"
        className="size-11 group hidden sm:grid place-content-center font-medium rounded-full"
      >
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-brand-primary group-hover:fill-white transition-all duration-300"
        >
          <path d="M15.9866 1.20879C16.1112 0.403318 15.3454 -0.232446 14.6292 0.0819956L0.364818 6.34484C-0.148772 6.57034 -0.111204 7.34826 0.421467 7.51789L3.36315 8.45467C3.92458 8.63347 4.53253 8.54102 5.02279 8.20231L11.655 3.62027C11.855 3.4821 12.073 3.76646 11.9021 3.94263L7.12811 8.86465C6.66501 9.34211 6.75693 10.1512 7.31397 10.5005L12.659 13.8523C13.2585 14.2282 14.0297 13.8506 14.1418 13.1261L15.9866 1.20879Z" />
        </svg>
      </Button>
      <Button
        variant="outline"
        className="hidden sm:grid size-11 group place-content-center text-lg font-medium rounded-full"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-brand-primary group-hover:fill-white
                transition-all duration-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.8832 1.99575 15.6505 2.86386 17.1787L1.5 22.5L6.98615 21.2278C8.47603 22.0391 10.1842 22.5 12 22.5ZM12 20.8846C16.9068 20.8846 20.8846 16.9068 20.8846 12C20.8846 7.09316 16.9068 3.11538 12 3.11538C7.09316 3.11538 3.11538 7.09316 3.11538 12C3.11538 13.8945 3.70838 15.6506 4.71888 17.0927L3.92308 20.0769L6.95995 19.3177C8.39202 20.3059 10.1284 20.8846 12 20.8846Z"
          />
          <path d="M9.37502 7.12504C9.12537 6.6236 8.7424 6.668 8.35551 6.668C7.66407 6.668 6.58594 7.49621 6.58594 9.03759C6.58594 10.3008 7.14259 11.6836 9.01831 13.7522C10.8285 15.7485 13.207 16.7812 15.1817 16.7461C17.1563 16.7109 17.5625 15.0117 17.5625 14.4379C17.5625 14.1835 17.4047 14.0566 17.296 14.0221C16.6231 13.6992 15.382 13.0975 15.0996 12.9844C14.8172 12.8714 14.6698 13.0243 14.5781 13.1075C14.3221 13.3515 13.8144 14.0707 13.6406 14.2325C13.4668 14.3942 13.2077 14.3124 13.0999 14.2512C12.7031 14.092 11.6272 13.6134 10.7696 12.7821C9.70899 11.754 9.64675 11.4002 9.44693 11.0854C9.28707 10.8335 9.40437 10.6789 9.46291 10.6114C9.69142 10.3477 10.007 9.94061 10.1485 9.73832C10.29 9.53602 10.1776 9.22889 10.1102 9.03759C9.82033 8.21488 9.57474 7.52618 9.37502 7.12504Z" />
        </svg>
      </Button>
    </div>
  );
}
