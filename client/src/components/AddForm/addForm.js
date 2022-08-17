import React, { useState, useReducer } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material/";
import { addItemToList } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import BasicButton from "../Button/button";
const intialState = {
  name: "",
  description: "",
  count: "",
};
function reducer(state, addItemToList) {
  return { ...state, [addItemToList.key]: addItemToList.value };
}

export default function AddForm() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const handleChange = (e) => {
    dispatch({
      value: e.target.value,
      key: e.target.name,
    });
  };
  return (
    <div>
      <Typography align="left"> Add an Item</Typography>
      <Typography align="left"> Add your new item below</Typography>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                id="outlined-basic"
                label="Item Name"
                variant="outlined"
                fullWidth
                required
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="outlined-basic"
                label="Description"
                multiline
                rows={4}
                name="description"
                value={state.description}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <FormControl sx={{ m: 1, minWidth: 900 }} size="small">
                <InputLabel id="demo-select-small">How Many?</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="How Many?"
                  onChange={handleChange}
                  name="count"
                  value={state.count}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} item>
              <BasicButton name="Cancel" variant="outlined" />
            </Grid>
            <Grid xs={12} sm={6} item>
              <BasicButton name="Add item" variant="contained" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
