import React, { useState } from 'react';
import AddToDoForm from '../AddToDoForm/AddToDoForm';
import Logo from "../../assets/logo.png";


export default function Header() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className='mx-auto flex items-center justify-between px-10 pt-1'>
      <div>
        <img class="h-12 w-auto" src={Logo} alt="" />
      </div>
      <div className='flex items-center justify-center p-3 gap-6'>
        <button 
          onClick={handleAddClick}
          className='bg-regal-orange rounded-full text-white px-4 py-3'
        >
          Ajouter une tache
        </button>
        {showAddForm && <AddToDoForm onClose={handleCloseForm} />}
      </div>
    </div>
  )
}
