import React, { FC, useState } from "react";
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
  const [confirmLoading, setConfirmLoading] = useState(false);

  const clickHandler = (e) => {
    if(text === 'Loading Button') {
      setConfirmLoading(true);
    } else {
      handleClick(e);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "4rem"
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        handleClick={clickHandler}
        primary={primary}
        borderStyle={borderStyle}
        icon={icon}
        iconPosition={iconPosition}
        confirmLoading={confirmLoading}
      />
    </div>
  );
};

export default Example;