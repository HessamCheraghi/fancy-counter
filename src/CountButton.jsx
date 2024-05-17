import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export function CountButton({ type, setCount }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) return 0;
        return newCount;
      } else {
        return prev + 1;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
