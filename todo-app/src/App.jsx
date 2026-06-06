import React, { useState } from 'react';
import './App.css';
import initialData from './data.json';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    const [todos, setTodos] = useState(initialData);
    
    // State ĐẶC BIỆT: Lưu trữ công việc ĐANG ĐƯỢC SỬA (nếu bằng null nghĩa là đang đi Thêm mới)
    const [editingTodo, setEditingTodo] = useState(null);

    // 1. Thêm
    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    // 2. Xóa
    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    // 3. Đổi trạng thái
    const handleToggleStatus = (id) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    // 4A. Chuẩn bị SỬA (Nhận thông tin task bị click và đưa vào state)
    const handleEditTodo = (todo) => {
        setEditingTodo(todo);
    };

    // 4B. Lưu cập nhật (Lưu đè dữ liệu mới vào mảng)
    const handleUpdateTodo = (updatedTodo) => {
        const updatedList = todos.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedList);
        setEditingTodo(null); // Sửa xong thì xóa trạng thái sửa, quay về mode Thêm mới
    };

    // 4C. Hủy Sửa
    const handleCancelEdit = () => {
        setEditingTodo(null);
    };

    return (
        <div className="container py-5" style={{ maxWidth: '900px' }}>
            {/* Truyền thêm hàm onEdit xuống List */}
            <TodoList 
                todos={todos} 
                onDelete={handleDeleteTodo} 
                onToggle={handleToggleStatus} 
                onEdit={handleEditTodo} 
            />
            
            {/* Truyền các props cần thiết cho Form để nó biết lúc nào Thêm, lúc nào Sửa */}
            <TodoForm 
                onAddTodo={handleAddTodo} 
                onUpdateTodo={handleUpdateTodo}
                editingTodo={editingTodo}
                onCancelEdit={handleCancelEdit}
            />
        </div>
    );
}

export default App;