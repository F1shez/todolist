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
            <input onChange={() => handleToggleComplete(todo.id)} type="checkbox" name="" id="" />
            <div className={"ml-1 " + (todo.completed ? "text-gray-500" : "text-black")}>{todo.text}</div>
        </>
    );
}