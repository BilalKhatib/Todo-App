import React, { createContext, useState } from "react";

export const todoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([
        {id: 1, todo: "hello", isCompleted: true},
        {id: 2, todo: "hello", isCompleted: true},
        {id: 3, todo: "hello", isCompleted: false},
        {id: 4, todo: "hello", isCompleted: true},
        {id: 5, todo: "hello", isCompleted: false},
    ]);

    return(
        <todoContext.Provider value={{todos, setTodos}} >
            {children}
        </todoContext.Provider>
    )

};
