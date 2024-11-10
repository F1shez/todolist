import { deleteTodo, Todo } from "../todoSlice";
import { Dispatch, UnknownAction } from "redux";

export enum TodoListFilter {
    All,
    Active,
    Completed
}

interface NavbarProps {
    todos: Todo[];
    filter: TodoListFilter;
    setFilter: (filter: TodoListFilter) => void;
    dispatch: Dispatch<UnknownAction>;
}


export function Navbar({ todos, filter, setFilter, dispatch }: NavbarProps) {

    function handleDeleteCompleted() {
        todos.filter(todo => todo.completed).forEach(todo => {
            dispatch(deleteTodo(todo.id));
        });
    }

    return (
        <div className="flex absolute bottom-4 w-2/5 items-center justify-center">
            <div>осталось задач: {todos.filter(todo => !todo.completed).length}</div>
            <div className="ml-4 space-x-4">
                <button
                    className={filter === TodoListFilter.All ? 'border-solid border-2 rounded-md border-sky-500' : ''}
                    onClick={() => { setFilter(TodoListFilter.All) }}>all</button>
                <button
                    className={filter === TodoListFilter.Active ? 'border-solid border-2 rounded-md border-sky-500' : ''}
                    onClick={() => { setFilter(TodoListFilter.Active) }}>active</button>
                <button
                    className={filter === TodoListFilter.Completed ? 'border-solid border-2 rounded-md border-sky-500' : ''}
                    onClick={() => { setFilter(TodoListFilter.Completed) }}>completed</button>
            </div>
            <div className="ml-4">
                <button onClick={() => handleDeleteCompleted()}> clear completed </button>
            </div>
        </div>
    )
}