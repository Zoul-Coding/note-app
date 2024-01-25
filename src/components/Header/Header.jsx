import React, { useState } from 'react';
import AddToDoForm from '../AddToDoForm/AddToDoForm';


export default function Header() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className='mx-auto flex items-center justify-end px-10 pt-6'>
        <button 
          onClick={handleAddClick}
          className='bg-white rounded-full text-black px-4 py-3'
        >
          Ajouter une note
        </button>
        {showAddForm && <AddToDoForm onClose={handleCloseForm} />}
    </div>
  )
}
