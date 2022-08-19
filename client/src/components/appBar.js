import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Bar() {
  return (
    <div className="appBar">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            SHOPPING LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
