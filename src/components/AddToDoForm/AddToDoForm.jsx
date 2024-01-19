import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/AppContext';

export default function AddToDoForm({ onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const { tasks, setTasks } = useContext(AppContext);
  console.log("tasks", tasks);

  const handleCancel = () => {
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('bg-opacity-50')) {
      onClose();
    }
  };

  const onSubmit = (data) => {
    const { taskName, category } = data;
    const newTask = {
      id: tasks.length + 1,
      taskName,
      category,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    reset();
    onClose();
  };

  return (
    <div onClick={handleOutsideClick} className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex items-center justify-end rounded-t">
          <button onClick={handleCancel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-2'>
              <label htmlFor="taskName">Nom de la Tâche</label>
              <div className='mt-2'>
                <textarea {...register('taskName')} id="taskName" rows="4" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Catégorie de tâche</label>
            <div className="mt-2">
              <select {...register('category')} id="category" name="category" autoComplete="category" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>Exploration Quotidienne</option>
                <option>Défis et Réflexions</option>
                <option>Optimisation Continue</option>
              </select>
            </div>
          </div>
          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button type="submit" className="bg-regal-orange text-white rounded-full px-4 py-2 mt-4">
              Ajouter Tâche
            </button>
            <button onClick={handleCancel} className="bg-regal-gray text-black rounded-full px-4 py-2 mt-4">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
