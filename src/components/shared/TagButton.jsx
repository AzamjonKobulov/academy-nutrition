import Button from "./Button";

export default function TagButton({ idx, btn, buttons }) {
  return (
    <Button
      key={idx}
      variant={idx === 0 ? "primary" : "outline"}
      className={`h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl ${
        idx === 0 ? "ml-30px" : idx === buttons.length - 1 ? "mr-30px" : ""
      } px-2 sm:px-3 lg:px-[18px] 3xl:px-6`}
    >
      #{btn}
    </Button>
  );
}
