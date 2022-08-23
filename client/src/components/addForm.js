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
import { connect, useDispatch, useSelector, useStore } from 'react-redux';

import { addItem } from '../redux/actions/addItemAction';
import BasicButton from './button';
import { initialState } from '../redux/reducers/initialState';
import * as types from '../constants/actionTypes';

export default function AddForm() {
  const [formValue, setFormValue] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const submitButton = () => {
    dispatch(addItem(formValue));
    console.log('SUCCESFFULLY SUBMITTED FORM TO REDUX');
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
                value={formValue.name || ''}
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
                value={formValue.description || ''}
                onChange={handleChange}
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
                  onChange={handleChange}
                  name="count"
                  value={formValue.count || ''}
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
                  onClick={submitButton}
                ></BasicButton>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   name: state.name,
//   description: state.description,
//   count: state.count,
// });
