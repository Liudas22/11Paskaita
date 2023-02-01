import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const currentDate = new Date()
  const [date, setDate] = useState("")
  const [age, setAge] = useState(0)

  const handleClick = () => {
    const tempAge = currentDate.getFullYear() - parseInt(date)
    setAge(tempAge)
  }
  console.log("PO skaiciavimo: " + age)
  const handleChange = (event) => {
    const dateString = event.target.value.toString()
    setDate(dateString.substring(0, 4))
  }

  return (
    <div className="App">
      <p>
        Date:
      </p>
      <input type="date" onChange={handleChange} />
      <p>
        Age:
      </p>
      <input title='age' type="text" disabled value={age} />
      <button onClick={handleClick}>
        Calculate
      </button>
    </div>
  );
}

export default App;
