import React,{createContext, useContext} from "react"

export const TodoContext = createContext({
    Todos:[
        {
            id: 1,
            todo : "Todo sb",
            completed : false,
        }
    ],
    addTodo : () => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    ToggleCompletedTodo: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;