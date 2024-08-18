import React, { useState } from 'react';
import './assets/css/AddTask.css';
import { FaChevronDown, FaFolderOpen } from 'react-icons/fa';
import ListView from './ListView';
// import './assets/css/DateTimePicker.css';
import { prettyFormat } from '@testing-library/react';

const AddTask = ({ data,setData }) => {
  const [backToListView, setBackToListView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for date and time
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [selectPriority, setSelectPriority] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [addedData, setAddedData] = useState([]);
  const[value,setValue]= useState("Select Priority");

  if (backToListView) {
    console.log(data)
    return <ListView edata={data}/>;
  }


 

  const handlePriority = () => {
    setSelectPriority((prevState) => !prevState);

  };

//   const handlePrioritySelect = (priority) => {
//     setSelectedPriority(priority);
//     setSelectPriority(false);
// console.log(selectedPriority);
//   };
  
const handlePrioritySelect =(e)=>
{
  setValue(e.target.value);
  setSelectedPriority(e.target.value)
}


  const handleAddTask = () => {
    
    const addTaskData = {
      'TaskName': taskName,
      'TaskDescription': taskDescription,
      'TaskDate': selectedDate,
      'TaskPriority': selectedPriority
    };
    // setAddedData(prevData => [...prevData, addTaskData]);
    setData(currentData => currentData.concat(addTaskData));
    console.log(addedData);
    
    setBackToListView(true);

    // Reset form fields if needed
    setTaskName('');
    setTaskDescription('');
    setSelectedDate(new Date());
    setSelectedPriority('');
  };

  const formatDateForInput = (date) => {
    return date.toISOString().slice(0, 16); // Format to 'YYYY-MM-DDTHH:MM'
  };

  const parseDateFromInput = (value) => {
    return new Date(value);
  };


  
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="col w-100 mt-4">
        <div style={{ width: '180px', marginLeft: '323px' }} className="row-2 border border-1 rounded-top" onClick={() => setBackToListView(true)}>
          <div className="mb-3 d-flex align-items-center">
            <FaFolderOpen size={23} />
            <h5 className='mt-2'>Task List view</h5>
          </div>
        </div>

        <div className="row-6 w-50 mx-auto">
          <div className="d-flex justify-content-between">
            <h3>Add New Task</h3>
            <button className="btn btn-red rounded-4 px-4">Delete</button>
          </div>

          {/* Task Name */}
          <input
            type="text"
            placeholder="Enter task"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)} 
          
          />
          {/* Task Description */}
          <input
            type="text"
            placeholder="Enter task description"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)} 
          />

          {/* Select Date and Time */}
          <input
            type="datetime-local"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
             placeholder='select Date'
            value={formatDateForInput(selectedDate)} // Format date for input 
            
            onChange={(e) => setSelectedDate(parseDateFromInput(e.target.value))} // Parse new date
          />

          {/* Priority Selector */}
          {/* <div className="rounded-4 p-3 mt-3 border border-1 bg-white" onClick={handlePriority}>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0 fw-medium me-3">Select Priority</p>
              <FaChevronDown size={15} />
              <p className="p-2">{selectedPriority}</p>
            </div>

            {selectPriority && (
              <div className="mt-2">
                <ul className="list-unstyled">
                  <li className="p-2" onClick={() => handlePrioritySelect('High')}>High</li>
                  <li className="p-2 active" onClick={() => handlePrioritySelect('Medium')}>Medium</li>
                  <li className="p-2" onClick={() => handlePrioritySelect('Low')}>Low</li>
                </ul>
              </div>
            )}
          </div> */}

       


            <select  className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"value={value} onChange={handlePrioritySelect} placeholder='Select Priority'>

            <option style={{color: "gray"}}>Select Priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>


            </select>

        

          {/* Buttons */}
          <div className="d-flex justify-content-center mt-5">
            <div className="col-auto">
              <button className="btn btn-primary me-2 px-5 rounded-4" onClick={handleAddTask}>Add Task</button>
              <button className="btn btn-secondary px-5 rounded-4" onClick={() => setBackToListView(true)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
