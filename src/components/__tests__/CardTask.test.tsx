import { render, fireEvent } from "@testing-library/react";
import { CardTask } from "../CardTask";
import { toggleComplete } from "../../todoSlice";

// Мокируем функцию dispatch
const mockDispatch = jest.fn();

describe("CardTask", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call dispatch with toggleComplete when checkbox is clicked", () => {
    // Начальные данные для todo
    const todo = {
      id: 1,
      text: "Test Todo",
      completed: false
    };

    // Рендерим компонент
    const { getByRole } = render(
      <CardTask todo={todo} dispatch={mockDispatch} />
    );

    // Находим checkbox и эмулируем клик
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);

    // Проверяем, что dispatch был вызван с правильным action
    expect(mockDispatch).toHaveBeenCalledWith(toggleComplete(todo.id));
  });

  it("should toggle the checkbox when clicked", () => {
    // Начальные данные для todo
    const todo = {
      id: 1,
      text: "Test Todo",
      completed: false
    };

    // Рендерим компонент
    const { getByRole } = render(
      <CardTask todo={todo} dispatch={mockDispatch} />
    );

    const checkbox = getByRole("checkbox");

    // Проверяем начальное состояние checkbox (не выбран)
    expect((checkbox as HTMLInputElement).checked).toBe(false);

    // Эмулируем клик по checkbox
    fireEvent.click(checkbox);

    // Проверяем, что после клика checkbox выбран
    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });
});