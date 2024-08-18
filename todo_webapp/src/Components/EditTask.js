import React, { useState, useEffect } from 'react';
import './assets/css/AddTask.css';
import { FaChevronDown, FaFolderOpen } from 'react-icons/fa';

const EditTask = ({ task, onSave, onCancel }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectPriority, setSelectPriority] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (task) {
      setTaskName(task.TaskName || '');
      setTaskDescription(task.TaskDescription || '');
      setSelectedPriority(task.TaskPriority || '');
      const dueDate = new Date(task.DueDate);
      setSelectedDate(isNaN(dueDate.getTime()) ? new Date() : dueDate);
    }
  }, [task]);

  const handlePriority = () => {
    setSelectPriority((prevState) => !prevState);
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
    setSelectPriority(false);
  };

  const handleSave = () => {
    onSave({
      ...task,
      TaskName: taskName,
      TaskDescription: taskDescription,
      TaskPriority: selectedPriority,
      DueDate: selectedDate.toISOString() // Ensure it's a valid ISO string
    });
  };

  if (!task) return null;

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="col w-100 mt-4">
        <div style={{ width: '180px', marginLeft: '323px' }} className="row-2 border border-1 rounded-top" onClick={onCancel}>
          <div className="mb-3 d-flex align-items-center">
            <FaFolderOpen size={23} />
            <h5 className='mt-2'>Task List view</h5>
          </div>
        </div>

        <div className="row-6 w-50 mx-auto">
          <div className="d-flex justify-content-between">
            <h3>Edit Task</h3>
            <button className="btn btn-red rounded-4 px-4">Delete</button>
          </div>

          <input
            type="text"
            placeholder="Enter task"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter task description"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />

          <input
            type="datetime-local"
            className="rounded-4 p-3 mt-3 border border-1 bg-white w-100"
            value={selectedDate.toISOString().slice(0, 16)} // Format to 'YYYY-MM-DDTHH:MM'
            onChange={(e) => setSelectedDate(new Date(e.target.value))} // Parse the new date
          />

          

          <div className="rounded-4 p-3 mt-3 border border-1 bg-white" onClick={handlePriority}>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0 fw-medium me-3">Select Priority</p>
              <FaChevronDown size={15} />
            </div>

            {selectPriority && (
              <div className="mt-2">
                <ul className="list-unstyled">
                  <li className="p-2" onClick={() => handlePrioritySelect('High')}>High</li>
                  <li className="p-2" onClick={() => handlePrioritySelect('Medium')}>Medium</li>
                  <li className="p-2" onClick={() => handlePrioritySelect('Low')}>Low</li>
                </ul>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className="col-auto">
              <button className="btn btn-primary me-2 px-5 rounded-4" onClick={handleSave}>Save Changes</button>
              <button className="btn btn-secondary px-5 rounded-4" onClick={() => onSave(null)}>Mark as done</button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col text-center">
              <button className="btn btn-success rounded-4 px-5" onClick={onCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
