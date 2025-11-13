import type { FC } from "react";

const Checkbox: FC<{
  label: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ isSelected, label, onClick }) => {
  return (
    <>
      <span
        onClick={onClick}
        style={{
          display: "flex",
          lineHeight: "normal",
          padding: "10px",
          justifyContent: "space-between",
        }}
      >
        <label
          style={{
            display: "inline-block",
            lineHeight: "130%",
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "0px",
          }}
        >
          {label}
        </label>
        <div
          className={isSelected ? "selected checkbox" : "checkbox"}
          style={{
            borderRadius: "6px",
            marginRight: "7px",
            height: "23px",
            width: "23px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: isSelected ? "rgba(36, 105, 246, 1)" : "",
            border: isSelected
              ? "rgba(36, 105, 246, 1)"
              : "1px solid rgba(205, 205, 205, 1)",
          }}
        >
          {isSelected ? (
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 7.1L6.53451 12.4672C6.55497 12.4854 6.58626 12.4837 6.6047 12.4635L17.5 0.5"
                // stroke="#878787"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      </span>
    </>
  );
};

export { Checkbox };
