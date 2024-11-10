import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { TodoListFilter } from '../Navbar';
import {  deleteTodo, Todo } from '../../todoSlice';

// Мокаем store с тестами
const mockDispatch = jest.fn();

describe('Navbar component', () => {

    afterEach(() => {
        jest.clearAllMocks(); // Очистка моков после каждого теста
    });

    it('renders correctly count active tasks', () => {

        const todos: Todo[] = [
            { id: 1, text: 'Task 1', completed: true },
            { id: 2, text: 'Task 2', completed: false },
            { id: 3, text: 'Task 3', completed: true },
        ];

        const setFilter = jest.fn();

        render(<Navbar
            todos={todos}
            filter={TodoListFilter.All}
            setFilter={setFilter}
            dispatch={mockDispatch}
        />);

        expect(screen.getByText('осталось задач: 1')).toBeInTheDocument();
    });

    it('check clear button', () => {
        const todos: Todo[] = [
            { id: 1, text: 'Task 1', completed: true },
            { id: 2, text: 'Task 2', completed: false },
            { id: 3, text: 'Task 3', completed: true },
        ];

        const setFilter = jest.fn();

        const { getByText } = render(
            <Navbar
                todos={todos}
                filter={TodoListFilter.All}
                setFilter={setFilter}
                dispatch={mockDispatch}
            />
        );

        // Нажимаем на кнопку "clear completed"
        fireEvent.click(getByText('clear completed'));

        // Проверяем, что deleteTodo был вызван дважды, для задач с id 1 и 3
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenCalledWith(deleteTodo(1));
        expect(mockDispatch).toHaveBeenCalledWith(deleteTodo(3));
    });
});