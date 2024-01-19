import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  BiXCircle,
  BiShowAlt
} from "react-icons/bi";

export default function ToDoList() {
  const { tasks } = useContext(AppContext);

  const getTasksByCategory = (category) => {
    return tasks.filter(task => task.category === category);
  };

  return (
    <div className='mx-auto grid grid-cols-3 gap-4 px-12 pt-8'>
      <div className="bg-white w-full h-96 rounded-md overflow-y-auto scrollbar-thumb-blue-500 scrollbar-track-blue-200 shadow-lg">
        <div className="bg-regal-orange-lightOne">
          <div className="flex items-center justify-between header p-3 shadow-lg">
            <h2 className='font-medium'>Exploration Quotidienne</h2>
            <span className='text-base'>Tache (2)</span>
          </div>
        </div>
        {getTasksByCategory('Exploration Quotidienne').map(task => (
          <div key={task.id} className="w-full px-3 pt-3">
            <div className="bg-regal-gray-light p-2 rounded">
              <div className='flex items-center justify-end gap-x-3'>
                <BiShowAlt className='fill-regal-blue cursor-pointer' />
                <BiXCircle className='fill-regal-red cursor-pointer' />
              </div>
              <p className='pt-2'>{task.taskName}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-full h-96 rounded-md overflow-y-auto scrollbar-thumb-blue-500 scrollbar-track-blue-200 shadow-lg">
        <div className="bg-regal-blue">
          <div className="flex items-center justify-between header p-3 shadow-lg">
            <h2 className='font-medium text-white'>Défis et Réflexions</h2>
            <span className='text-base text-white'>Tache (2)</span>
          </div>
        </div>
        {getTasksByCategory('Défis et Réflexions').map(task => (
          <div key={task.id} className="w-full px-3 pt-3">
            <div className="bg-regal-gray-light p-2 rounded">
              <div className='flex items-center justify-end gap-x-3'>
                <BiShowAlt className='fill-regal-blue cursor-pointer' />
                <BiXCircle className='fill-regal-red cursor-pointer' />
              </div>
              <p className='pt-2'>{task.taskName}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-full h-96 rounded-md overflow-y-auto scrollbar-thumb-blue-500 scrollbar-track-blue-200 shadow-lg">
        <div className="bg-regal-red">
          <div className="flex items-center justify-between header p-3 shadow-lg">
            <h2 className='font-medium text-white'>Optimisation Continue</h2>
            <span className='text-base text-white'>Tache (2)</span>
          </div>
        </div>
        {getTasksByCategory('Optimisation Continue').map(task => (
          <div key={task.id} className="w-full px-3 pt-3">
            <div className="bg-regal-gray-light p-2 rounded">
              <div className='flex items-center justify-end gap-x-3'>
                <BiShowAlt className='fill-regal-blue cursor-pointer' />
                <BiXCircle className='fill-regal-red cursor-pointer' />
              </div>
              <p className='pt-2'>{task.taskName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
