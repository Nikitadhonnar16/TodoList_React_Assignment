import React from 'react'
import './assets/css/AddTask.css'
import { FaChevronDown } from 'react-icons/fa';
import { FaFolderOpen } from "react-icons/fa6";

const AddTask = () => {
  return (
    <div className="container listview-sec d-flex flex-column align-items-center">
      <div className="col w-100 mt-4 ">
     
        <div style={{width:'180px', marginLeft:'323px'}} className="row-2 border border-1 rounded-top">
          <div className=" mb-3 d-flex align-items-center ">
          <FaFolderOpen size={23} />
            <h5 className='mt-2'>Task List view</h5>
          </div>
        </div>

        <div className="row-6  w-50 mx-auto">
          <div className="d-flex justify-content-between">
                    <h3 className=''> Edit Task</h3>
                    <button class="btn btn-red rounded-4 px-4">Delete</button>
           </div>

            <div className='rounded-4 p-3 mt-3 border border-1 bg-white'>
                    Task Name

            </div>

            <div className='rounded-4 p-3 mt-3 border border-1 bg-white'>
                    Task Name

            </div>
            <div className='rounded-4 p-3 mt-3 border border-1 bg-white'>
            Desceription 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur saepe voluptatum officia doloremque. Sint exercitationem, consequuntur necessitatibus labore quis hic illum esse iusto rerum.
            </div>
            <div className='rounded-4 p-3 mt-3 border border-1 bg-white'>
                    25 August 2024 -5:30PM

            </div>

            <div className="rounded-4 p-3 mt-3 border border-1 bg-white"  >
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-medium me-3">Select Priority</p>
                    <FaChevronDown size={15} className="mt-2" />
                  </div>
                  {/* { (
                    <div className="specs-container">
                      {Object.entries().map(([label, value], index) => (
                        <div key={index} className="d-flex mb-2">
                          <div className="me-2 fw-medium spec-label">{label}</div>
                          <div className="me-2 spec-separator">:</div>
                          <div className="flex-grow-1 spec-value">{value}</div>
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>

                <div class="d-flex justify-content-center mt-5">
                        <div class="col-auto">
                          <button class="btn btn-primary me-2 px-5 rounded-4">Save Changes</button>
                          <button class="btn btn-secondary px-5 rounded-4">Mark as done</button>
                        </div>
                </div>
                <div class="row mt-2">
                  <div class="col text-center">
                    <button class="btn btn-success rounded-4 px-5">Cancel</button>
                  </div>
                </div>

              
        </div>


      </div>
    </div>
  )
}

export default AddTask
