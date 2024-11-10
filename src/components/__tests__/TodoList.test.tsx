import { render, screen } from '@testing-library/react';
import { TodoList } from '../TodoList';
import { Provider } from 'react-redux';
import { Todo } from '../../todoSlice';

const mockTodos: Todo[] = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true }
];

describe('TodoList', () => {
    const mockStore = {
        getState: jest.fn(() => ({
            todos: mockTodos
        })),
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        replaceReducer: jest.fn(),
        [Symbol.observable]: jest.fn()
    };

    it('renders the correct number of todo items in ul', () => {
        render(
            <Provider store={mockStore}>
                <TodoList />
            </Provider>
        );

        // Check if there are two li elements (one for each todo item)
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
});