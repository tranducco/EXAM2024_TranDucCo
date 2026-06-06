import React, { useState } from 'react';
import './App.css'; 
import initialData from './data.json'; 
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    const [todos, setTodos] = useState(initialData);

    // Logic 1: THÊM TASK (Đã làm ở bước trước)
    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    // Logic 2: XÓA TASK
    const handleDeleteTodo = (id) => {
        // Lọc và giữ lại những task có id KHÁC với id bị xóa
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    // Logic 3: ĐỔI TRẠNG THÁI (To Do <-> Done)
    const handleToggleStatus = (id) => {
        // Duyệt qua mảng, tìm đúng id thì đảo ngược giá trị completed (true thành false và ngược lại)
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="container py-5" style={{ maxWidth: '900px' }}>
            {/* Truyền cả mảng dữ liệu VÀ 2 hàm xử lý xuống cho TodoList */}
            <TodoList 
                todos={todos} 
                onDelete={handleDeleteTodo} 
                onToggle={handleToggleStatus} 
            />
            
            <TodoForm onAddTodo={handleAddTodo} />
        </div>
    );
}

export default App;