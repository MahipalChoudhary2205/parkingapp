import './App.css';
import React, { useState, useRef } from 'react';

const array = [];

function App() {

  const carNo = useRef(null);
  const driverNameI = useRef(null);
  const driverNameO = useRef(null);
  const [count, setCount] = useState(0);

  const checkIn = () => {
    array.push(
      {
        carNumber: carNo.current.value,
        driverName: driverNameI.current.value,
        checkIn: new Date()
      });
    setCount(count + 1);
    driverNameI.current.value = null;
    carNo.current.value = null;
  }
  const checkOut = () => {
    const index = array.findIndex(function (todo, index) {
      return todo.carNumber === carNo.current.value;
    })
    array[index] = {
      carNumber: array[index].carNumber,
      driverName: array[index].driverName,
      checkIn: array[index].checkIn,
      checkOut: new Date()
    }
    setCount(count - 1);
    driverNameO.current.value = null;
    carNo.current.value = null;
  }
  const search = () => {

    const index = array.findIndex(function (todo, index) {
      return todo.carNumber === carNo.current.value;
    })
    if (index === -1) {

    }
    else {
      driverNameO.current.value = array[index].driverName;
    }
    setCount(count);
  }

  const details = () => {
    console.table(array);

  }

  return (
    <>
      <main className='main'>
        <div className='count' >
          <h3>{count}</h3>
          <button onClick={details}>Show</button>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="RJ14CA4444" ref={carNo} />
          <button onClick={search} >Search</button>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Driver Name" ref={driverNameI} />
          <button onClick={checkIn} >Check In</button>
        </div>
        <div className="searchBar">
          <input type="text" readOnly placeholder="Driver Name" ref={driverNameO} />
          <button onClick={checkOut} >Check Out</button>
        </div>
      </main>
    </>
  );
}

export default App;
