"use client";
import React from 'react'

const TaskContext = React.createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = React.useState([]);
    const [theme, setTheme] = React.useState("light");
    return (
        <TaskContext.Provider value={{ tasks, setTasks, theme, setTheme }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
