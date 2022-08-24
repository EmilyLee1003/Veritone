import React, { useReducer, useState } from 'react';
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
} from '@mui/material/';

import BasicButton from './button';

export default function editForm(props) {
  return (
    <div>
      <Typography align="left">{props.title}</Typography>
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
                name={props.nameName}
                value={props.valueName}
                onChange={props.handleChange}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="outlined-basic"
                label="Description"
                multiline
                rows={4}
                name={props.nameDescription}
                value={props.valueDescription}
                onChange={props.handleChange}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <FormControl sx={{ m: 1, minWidth: 900 }} size="small">
                <InputLabel id="demo-select-small">How Many?</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="How Many?"
                  onChange={props.handleChange}
                  name={props.nameCount}
                  value={props.valueCount}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>

                <BasicButton
                  variant="contained"
                  name="Add Item"
                  onClick={props.submitButton}
                ></BasicButton>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
