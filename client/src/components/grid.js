import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function GridItems(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <p>{props.itemName} </p>
            <div className="material-icons" onClick={props.edit}>
              {" "}
              edit
            </div>
            <div className="material-icons" onClick={props.delete}>
              delete
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
