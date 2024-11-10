import { Todo, toggleComplete } from "../todoSlice";
import { Dispatch, UnknownAction } from "redux";

interface CardTaskProps {
    todo: Todo;
    dispatch: Dispatch<UnknownAction>
}

export function CardTask({ todo, dispatch }: CardTaskProps) {

    const handleToggleComplete = (id: number) => {
        dispatch(toggleComplete(id));
    };
    return (
        <>
            <input checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} type="checkbox" name="" id="" />
            <div title={todo.text} className={"ml-1 truncate overflow-hidden " + (todo.completed ? "text-gray-500" : "text-black")}>{todo.text}</div>
        </>
    );
}