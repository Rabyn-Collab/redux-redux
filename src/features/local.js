


const data = ['2', '9'];
const d = `${data}`;

export const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const getTodos = () => {
  const data = localStorage.getItem('todos');
  return data === null ? [] : JSON.parse(data);
}