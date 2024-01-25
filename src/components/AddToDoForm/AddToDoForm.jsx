import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/AppContext';
import toast, { Toaster } from "react-hot-toast";

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
    setTimeout(() => {
      toast.success("Tâche ajouté");
    }, 1000);
    reset();
    onClose();
  };

  return (
    <div onClick={handleOutsideClick} 
    className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="flex items-center justify-end rounded-t">
          <button onClick={handleCancel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div  className='mt-2'>
            <div>
              <label htmlFor="taskName" className='text-base font-normal'>Votre note</label>
              <div className='mt-2'>
                <textarea
                  {...register('taskName')}
                  id="taskName"
                  rows="4"
                  className='block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset'
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="category" className="text-base font-normal">Catégorie de note</label>
            <div className="mt-2">
              <select
                {...register('category')}
                id="category"
                name="category"
                autoComplete="category"
                className="block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-400"
                required
              >
                <option>Leçon quotidienne</option>
                <option>Erreurs et échecs</option>
                <option>Amélioration et succès</option>
              </select>
            </div>
          </div>
          <div className='mt-6 flex items-center justify-end gap-x-3'>
            <button type="submit" className="bg-regal-orange text-white rounded-full px-6 py-2 mt-4">
              Ajouter
            </button>
            <button onClick={handleCancel} className="bg-regal-gray text-black rounded-full px-6 py-2 mt-4">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
