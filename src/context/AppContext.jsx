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


    return (
        <AppContext.Provider value={{ tasks, setTasks, getTasksFromLocalStorage }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };