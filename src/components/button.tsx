import type { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      style={{
        width: "100%",
        borderRadius: "4px",
      }}
    >
      {text}
    </button>
  );
};

export { Button };
