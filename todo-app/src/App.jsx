import React, { useState } from 'react';
import './App.css'; // File CSS chứa custom style của bạn ở câu 1
import initialData from './data.json'; // Đọc dữ liệu từ file JSON

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    // 1. Khởi tạo State chứa danh sách Task, lấy dữ liệu gốc từ data.json
    const [todos, setTodos] = useState(initialData);

    // 2. Hàm xử lý Add Task (Giống hàm addTodo trong ảnh số 3)
    const handleAddTodo = (newTodo) => {
        // Cập nhật mảng todos: bung mảng cũ ra (...todos) và nhét newTodo vào cuối
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="container py-5" style={{ maxWidth: '900px' }}>
            {/* 3. Truyền mảng todos xuống cho TodoList hiển thị */}
            <TodoList todos={todos} />
            
            {/* 4. Truyền hàm handleAddTodo xuống cho TodoForm */}
            <TodoForm onAddTodo={handleAddTodo} />
        </div>
    );
}

export default App;