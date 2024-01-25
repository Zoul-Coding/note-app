import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  BiEdit,
  BiTrash
} from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

export default function ToDoList() {
  const { tasks, removeTask, updateTask } = useContext(AppContext);
  const [editingTask, setEditingTask] = useState(null);

  const getTasksByCategory = (category) => {
    return tasks.filter(task => task.category === category);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
    toast.success("Tâche supprimé");
  };

  const handleSaveEdit = (editedTask) => {
    updateTask(editedTask.id, editedTask);
    setEditingTask(null);
  };

  return (
    <div className='mx-auto grid lg:grid-cols-3 gap-4 px-12 pt-16'>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="bg-white w-full h-96 rounded-md overflow-y-auto scrollbar-thumb-blue-500 scrollbar-track-blue-200 shadow-lg">
        <div className="bg-regal-orange-lightOne">
          <div className="flex items-center justify-between header p-3 shadow-lg">
            <h2 className='font-medium'>Leçon quotidienne</h2>
            <span className='text-base'>Note ({getTasksByCategory('Leçon quotidienne').length})</span>
          </div>
        </div>
        {getTasksByCategory('Leçon quotidienne').length === 0 ? (
          <p className='text-center mt-8'>Aucune note</p>
        ) : (
          getTasksByCategory('Leçon quotidienne').map(task => (
            <div key={task.id} className="w-full px-3 pt-3">
              <div className="bg-regal-gray p-2 rounded">
                {editingTask && editingTask.id === task.id ? (
                  <div className="">
                    <textarea
                      className='w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-orange-200 sm:text-sm sm:leading-6'
                      rows="2"
                      value={editingTask.taskName}
                      onChange={(e) => setEditingTask({ ...editingTask, taskName: e.target.value })}
                    />
                    <div className='m-1 flex items-center justify-end gap-x-3'>
                      <button className='bg-regal-orange-light text-white text-sm rounded-full px-4 py-1' onClick={() => handleSaveEdit(editingTask)}>Modifier</button>
                      <button className='bg-white text-black rounded-full text-sm px-3 py-1' onClick={handleCancelEdit}>Annuler</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className='flex items-center justify-end gap-x-2'>
                      <BiEdit onClick={() => handleEdit(task)} className='fill-regal-blue w-5 h-5 cursor-pointer' />
                      <BiTrash onClick={() => handleRemoveTask(task.id)} className='fill-regal-red w-5 h-5 cursor-pointer' />
                    </div>
                    <p className='pt-2'>{task.taskName}</p>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-white w-full h-96 rounded-md overflow-y-auto scrollbar-thumb-blue-500 scrollbar-track-blue-200 shadow-lg">
        <div className="bg-regal-blue">
          <div className="flex items-center justify-between header p-3 shadow-lg">
            <h2 className='font-medium text-white'>Erreurs et échecs</h2>
            <span className='text-base text-white'>Note ({getTasksByCategory('Erreurs et échecs').length})</span>
          </div>
        </div>
        {getTasksByCategory('Erreurs et échecs').length === 0 ? (
          <p className='text-center mt-8'>Aucune note</p>
        ) : (
          getTasksByCategory('Erreurs et échecs').map(task => (
            <div key={task.id} className="w-full px-3 pt-3">
              <div className="bg-regal-gray p-2 rounded">
                {editingTask && editingTask.id === task.id ? (
                  <div className="">
                    <textarea
                      className='w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-orange-200 sm:text-sm sm:leading-6'
                      rows="2"
                      value={editingTask.taskName}
                      onChange={(e) => setEditingTask({ ...editingTask, taskName: e.target.value })}
                    />
                    <div className='m-1 flex items-center justify-end gap-x-3'>
                      <button className='bg-regal-orange-light text-white text-sm rounded-full px-4 py-1' onClick={() => handleSaveEdit(editingTask)}>Modifier</button>
                      <button className='bg-white text-black rounded-full text-sm px-3 py-1' onClick={handleCancelEdit}>Annuler</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className='flex items-center justify-end gap-x-3'>
                      <BiEdit onClick={() => handleEdit(task)} className='fill-regal-blue w-5 h-5 cursor-pointer' />
                      <BiTrash onClick={() => handleRemoveTask(task.id)} className='fill-regal-red w-5 h-5 cursor-pointer' />
                    </div>
                    <p className='pt-2'>{task.taskName}</p>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-white w-full h-96 rounded-md overflow-y-auto scrollbar-thumb-blue-500 scrollbar-track-blue-200 shadow-lg">
        <div className="bg-regal-red">
          <div className="flex items-center justify-between header p-3 shadow-lg">
            <h2 className='font-medium text-white'>Optimisation Continue</h2>
            <span className='text-base text-white'>Note ({getTasksByCategory('Amélioration et succès').length})</span>
          </div>
        </div>
        {getTasksByCategory('Amélioration et succès').length === 0 ? (
          <p className='text-center mt-8'>Aucune note</p>
        ) : (
          getTasksByCategory('Amélioration et succès').map(task => (
            <div key={task.id} className="w-full px-3 pt-3">
              <div className="bg-regal-gray p-2 rounded">
                {editingTask && editingTask.id === task.id ? (
                  <div className="">
                    <textarea
                      className='w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-orange-200 sm:text-sm sm:leading-6'
                      rows="2"
                      value={editingTask.taskName}
                      onChange={(e) => setEditingTask({ ...editingTask, taskName: e.target.value })}
                    />
                    <div className='m-1 flex items-center justify-end gap-x-3'>
                      <button className='bg-regal-orange-light text-white text-sm rounded-full px-4 py-1' onClick={() => handleSaveEdit(editingTask)}>Modifier</button>
                      <button className='bg-white text-black rounded-full text-sm px-3 py-1' onClick={handleCancelEdit}>Annuler</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className='flex items-center justify-end gap-x-3'>
                      <BiEdit onClick={() => handleEdit(task)} className='fill-regal-blue w-5 h-5 cursor-pointer' />
                      <BiTrash onClick={() => handleRemoveTask(task.id)} className='fill-regal-red w-5 h-5 cursor-pointer' />
                    </div>
                    <p className='pt-2'>{task.taskName}</p>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
