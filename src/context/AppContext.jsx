import { createContext, useState, useEffect } from 'react';
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const getTasksFromLocalStorage = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    };
    useEffect(() => {
        getTasksFromLocalStorage();
    }, []);

    const updateTask = (taskId, updatedTask) => {
        const updatedTasks = tasks.map(task => (task.id === taskId ? updatedTask : task));
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const removeTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
      

    return (
        <AppContext.Provider value={{ tasks, setTasks, getTasksFromLocalStorage, removeTask, updateTask }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };