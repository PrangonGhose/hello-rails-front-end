import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from './redux/greetings';

function App() {
  const newVar = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
      <h1>
        Random Greeting:
        {newVar}
      </h1>
    </>
  );
}

export default App;
