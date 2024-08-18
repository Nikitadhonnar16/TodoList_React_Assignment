import React, { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { BsPlusCircle } from 'react-icons/bs';
import { IoMdArrowDropleft } from 'react-icons/io';
import './assets/css/ListView.css';
import AddTask from './AddTask';
import EditTask from './EditTask';

const ListView = ({ edata=[] }) => {
  const [filter, setFilter] = useState('All');
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
const [data,setData]=useState(edata)
  const filteredTasks = filter === 'All'
    ? data
    : filter === 'Done'
    ? data.filter(task => task.TaskStatus === 'done')
    : [];

  const handleTaskClick = (index) => {
    setSelectedTaskIndex(index === selectedTaskIndex ? null : index);
  };

  const deleteTask = (index) => {
    const updatedTasks = data.filter((_, i) => i !== index);
    setData(updatedTasks);
    setSelectedTaskIndex(null);
  };

  const handleSaveEdit = (editedTask) => {
    if (editedTask) {
      const updatedTasks = data.map((task, index) =>
        index === editTaskIndex ? editedTask : task
      );
      setData(updatedTasks);
    }
    setEditTaskIndex(null);
    setSelectedTaskIndex(null);
  };

  const handleCancelEdit = () => {
    setEditTaskIndex(null);
    setSelectedTaskIndex(null);
  };

  if (addTaskForm) {
    return <AddTask data={data} setData={setData} />;
  }

  if (editTaskIndex !== null) {
    return (
      <EditTask
        task={filteredTasks[editTaskIndex]}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
    );
  }
  console.log(data)
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="col w-100 mt-4">
        <div className="row-2 border border-1 rounded-top" style={{ width: '180px', marginLeft: '323px' }}>
          <div className="mb-3 d-flex align-items-center">
            <FaFolderOpen size={23} />
            <h5 className='mt-2'>Task List View</h5>
          </div>
        </div>

        <div className="row-6 w-50 mx-auto bg-color" style={{ height: '90vh' }}>
          <div>
            <button className="btn-pink border-0 rounded-4 p-2 m-3" onClick={() => setAddTaskForm(true)}>
              <BsPlusCircle className='me-2' />
              Add New Task
            </button>
          </div>

          <div className="mb-3">
            <button
              className={`btn rounded-top px-4 ms-2 ${filter === 'All' ? 'bg-light' : 'btn-pink'}`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              className={`btn rounded-top px-4 ms-2 ${filter === 'High' ? 'bg-light' : 'btn-pink'}`}
              onClick={() => setFilter('High')}
            >
              High
            </button>
            <button
              className={`btn rounded-top px-4 ms-2 ${filter === 'Medium' ? 'bg-light' : 'btn-pink'}`}
              onClick={() => setFilter('Medium')}
            >
              Medium
            </button>
            <button
              className={`btn rounded-top px-4 ms-2 ${filter === 'Low' ? 'bg-light' : 'btn-pink'}`}
              onClick={() => setFilter('Low')}
            >
              Low
            </button>
            <button
              className={`btn rounded-top px-4 ms-2 ${filter === 'Done' ? 'bg-light' : 'btn-pink'}`}
              onClick={() => setFilter('Done')}
            >
              Done
            </button>
          </div>

          {data.map((task, index) => (
            <div
              key={index}
              className="rounded-4 p-3 mt-3 border border-1 bg-white"
              role="button"
              tabIndex={0}
              aria-expanded={selectedTaskIndex === index}
            >
              <div className="d-flex justify-content-between align-items-center" onClick={() => handleTaskClick(index)}>
                <div className='d-flex'>
                  <IoMdArrowDropleft size={28} />
                  <h6 className='ms-2'>{task.TaskName}</h6>
                </div>
                <h6>{task.TaskPriority}</h6>
              </div>

              {selectedTaskIndex === index && (
                <div className="task-details p-3 mt-3">
                  <div className="mb-2">
                    <div className="me-2 fw-medium">Description :</div>
                    <div className="flex-grow-1">{task.TaskDescription}</div>
                  </div>
                  <div className="mb-2">
                    <div className="me-2 fw-medium">Due Date :</div>
                    <div className='d-flex'>
                      <div className="">{new Date(task.TaskDate).toLocaleDateString()}</div>
                      <div className="ms-1">- {new Date(task.TaskDate).toLocaleTimeString()}</div>
                    </div>
                  </div>
                  <div className='d-flex ms-2 mt-3 gap-2'>
                    <button
                      className="btn btn-secondary me-2 px-5 rounded-4"
                      onClick={() => setEditTaskIndex(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-secondary px-5 rounded-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;
