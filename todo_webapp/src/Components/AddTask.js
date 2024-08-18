import React, { useState } from 'react';
import './assets/css/AddTask.css';
import { FaChevronDown, FaFolderOpen } from 'react-icons/fa';
import ListView from './ListView';

const AddTask = ({ data, setData }) => {
  const [backToListView, setBackToListView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [selectPriority, setSelectPriority] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [value, setValue] = useState('Select Priority');
  const [errors, setErrors] = useState({});

  // Redirect to ListView if backToListView is true
  if (backToListView) {
    return <ListView edata={data} />;
  }

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    console.log("new1");
        console.log(taskName);
        console.log(data);
    if (!taskName) {
      newErrors.TaskName = 'Task Name is Required';
    }
    else{
      let isTaskNameFound=false;
      for( let i=0;i<data.length;i++)
      {        
         if(data[i].TaskName===taskName)
         {
           isTaskNameFound=true;
         }
      }

      if(isTaskNameFound)
      {
        newErrors.TaskName='This Task Name is already exists , please use different task name'
      }
    }
    if (!taskDescription) {
      newErrors.TaskDescription = 'Task Description is Required';
    }
    if (value === 'Select Priority') {
      newErrors.TaskPriority = 'Please Select Priority';
    }

    return newErrors;
  };

  const handlePrioritySelect = (e) => {
    setValue(e.target.value);
    setSelectedPriority(e.target.value);
  };

  const handleAddTask = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const addTaskData = {
      TaskName: taskName,
      TaskDescription: taskDescription,
      TaskDate: selectedDate,
      TaskPriority: selectedPriority
    };

    setData(currentData => [...currentData, addTaskData]);

    // Clear form fields
    setTaskName('');
    setTaskDescription('');
    setSelectedDate(new Date());
    setSelectedPriority('');
    setValue('Select Priority');

    setBackToListView(true);
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
          {errors.TaskName && <div className="text-danger d-block ms-2">{errors.TaskName}</div>}

          {/* Task Description */}
          <input
            type="text"
            placeholder="Enter task description"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)} 
          />
          {errors.TaskDescription && <div className="text-danger d-block ms-2">{errors.TaskDescription}</div>}

          {/* Select Date and Time */}
          <input
            type="datetime-local"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            placeholder='Select Date'
            value={formatDateForInput(selectedDate)}
            onChange={(e) => setSelectedDate(parseDateFromInput(e.target.value))}
          />

          {/* Priority Selector */}
          <select className="rounded-4 p-3 mt-3 border border-1 bg-white w-100" value={value} onChange={handlePrioritySelect}>
            <option value="Select Priority" style={{color: "gray"}}>Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.TaskPriority && <div className="text-danger d-block ms-2">{errors.TaskPriority}</div>}

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
