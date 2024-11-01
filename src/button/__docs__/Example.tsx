import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  handleClick = () => {},
  primary = true,
  size = "small",
  text = "Button",
  borderStyle = "1px solid black",
  icon,
  iconPosition,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "4rem",
        background: "#F3F4F6"
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        handleClick={handleClick}
        primary={primary}
        borderStyle={borderStyle}
        icon={icon}
        iconPosition={iconPosition}
      />
    </div>
  );
};

export default Example;