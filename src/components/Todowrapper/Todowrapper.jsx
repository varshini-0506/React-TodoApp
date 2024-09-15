import '../../style.css';
import React, { useState } from 'react';

const Todowrapper =()=>{
  const [data, setData] = useState('');
  const [taskarr, setTaskarr] = useState([]);

  const handleSubmit =(e)=> {  //function gets called when the + button is clicked
    e.preventDefault(); // Prevent form refresh

    if (data === '') {
      document.getElementById('warning').classList.remove('hidden');  //to display empty warning text
    } else {
      setTaskarr([...taskarr, data]); //add entered data to taskarr array
      setData(''); // Clear the input after submission
      document.getElementById('warning').classList.add('hidden');  //to remove empty warning text
    }
  };

  return (
    <div className="bg-[#050A30] w-[100%] p-6 grid grid-cols-1 gap-4 font-[Quicksand] rounded-xl">
      <h1 className="text-center text-[rgb(126,200,227)] text-xl font-semibold">
        Master Your Day, One Task at a Time
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={data}
            placeholder="Add your task"
            className="bg-[#050A30] w-[50%] border border-[#7EC8E3] text-white p-2 rounded-xl"
            onChange={(e) => setData(e.target.value)} //Update input value
          />

          <button type="submit" className="text-[#7EC8E3] hover:cursor-pointer">
            <span className="material-symbols-outlined">add</span>
          </button> 
        </div>
      </form> 

      <p id="warning" className="text-center text-white hidden">
        OOPS.....Task Empty!
      </p>

      <Todo taskarr={taskarr} setTaskarr={setTaskarr} />
    </div> 
  );
};

const Todo = ({ taskarr, setTaskarr }) => {
  const handleDelete = (index) => {  //to delete task
    const updatedTasks = taskarr.filter((_, i) => i !== index);
    setTaskarr(updatedTasks); // Update task array after deletion
  };

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      {taskarr.map((value, index) => (
        <div
          key={index} // key should be at the root of the mapped element
          className="flex flex-row gap-2 justify-center items-center w-[60%]"
          id={`full_todo-${index}`}
        >
          <p
            id={`todo-${index}`} // Unique id for each task
            className="text-center font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 text-[#000C66] p-2 w-[100%] border border-white border-solid"
          >
            {value}
          </p>
          <button
            onClick={() =>{document.getElementById(`todo-${index}`).classList.toggle('line-through');}} // Toggle strike-through for task
            className="text-[rgb(126,200,227)]"
          >
            <span className="material-symbols-outlined">task_alt</span>
          </button>
          <button
            onClick={() => handleDelete(index)} // Delete the task
            className="text-[rgb(126,200,227)]"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todowrapper;


