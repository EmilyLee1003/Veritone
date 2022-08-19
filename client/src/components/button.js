import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButton(props) {
  return (
    <div>
      <Button
        variant={props.variant}
        className={props.className}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
    </div>
  );
}
