import { useState } from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard';


function App() {

  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };
  

  const [employee, setEmployee] = useState(null)

  return (
    
      <div className="App">
         { employee !== null && <EmployeeCard employee={employee} />}
         <button type="button" onClick={getEmployee}>Get employee</button>
      </div>
        
  );
}

export default App
