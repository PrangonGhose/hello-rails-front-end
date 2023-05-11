import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGreetings = createAsyncThunk('getGreetings', async() => {
  const url = 'http://localhost:3000/api/messages/random'; // change the port number according to your localhost
  const response = await fetch(url);
  const data = await response.json();

  return [data.greeting];
})

const greetingsReducer = (state = [], action) => {
  switch(action.type) {
    case 'getGreetings/fulfilled':
      return action.payload;
    default:
      return state;
  }
}

export default greetingsReducer;