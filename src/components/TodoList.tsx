import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, RootState, Todo } from "../todoSlice";
import { CardTask } from "./CardTask";
import { Navbar, TodoListFilter } from "./Navbar";

export function TodoList() {
    const [text, setText] = useState("");
    const [todoFilter, setTodoFilter] = useState(TodoListFilter.All);
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div className="w-2/5 bg-white h-full rounded-lg ">
            <div className="w-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute w-6 pt-1 pl-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
                <input
                    onKeyDown={(e) => {
                        if (e.key === 'Enter')
                            handleAddTodo()
                    }}
                    className="h-8 w-full pl-7 rounded-lg"
                    placeholder="What needs to be done?"
                    type="text"
                    value={text}
                    onChange={handleInputChange} />{" "}
            </div>
            <ul className="">
                {" "}
                {todos.filter(todo => {
                    switch (todoFilter) {
                        case TodoListFilter.Active:
                            return !todo.completed;
                        case TodoListFilter.Completed:
                            return todo.completed;
                        default:
                            return true;
                    }
                }).map((todo: Todo) => (
                    <CardTask todo={todo} />
                ))}{" "}
            </ul>{" "}
                <Navbar todos={todos} setFilter={setTodoFilter} filter={todoFilter} />
        </div>
    );
}