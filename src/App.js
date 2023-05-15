import React from 'react';
import { Route, Routes } from 'react-router';
import Greetings from './greetings';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Greetings />} />
      </Routes>
    </>
  );
}

export default App;
