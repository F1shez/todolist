import { useDispatch } from "react-redux";
import { Todo, toggleComplete } from "../todoSlice";

interface CardTaskProps {
    todo: Todo
}

export function CardTask({ todo }: CardTaskProps) {
    const dispatch = useDispatch();

    const handleToggleComplete = (id: number) => {
        dispatch(toggleComplete(id));
    };
    return (
        <>
            <input onChange={() => handleToggleComplete(todo.id)} type="checkbox" name="" id="" />
            <div className={"ml-1 " + (todo.completed ? "text-gray-500" : "text-black")}>{todo.text}{" "}</div>
        </>
    );
}