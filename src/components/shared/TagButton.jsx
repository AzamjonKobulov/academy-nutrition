import Button from "./Button";

export default function TagButton({ idx, btn, buttons }) {
  return (
    <Button
      key={idx}
      variant={idx === 0 ? "primary" : "outline"}
      className={`h-10 sm:h-12 lg:h-[60px] 2xl:h-20 2xl:text-22 rounded-xl 2xl:rounded-2xl ${
        idx === 0 ? "ml-30px" : idx === buttons.length - 1 ? "mr-30px" : ""
      } px-2 sm:px-3 lg:px-[18px] 2xl:px-6`}
    >
      #{btn}
    </Button>
  );
}
