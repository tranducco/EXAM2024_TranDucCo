// src/components/TodoForm.jsx
import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
    // Quản lý trạng thái nội bộ của Form (Clean code hơn so với dùng document.getElementById)
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriority] = useState('Low');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn load lại trang khi submit form (Giống ảnh 3 của thầy)
        
        const trimmedValue = inputValue.trim();

        // Validate dữ liệu theo yêu cầu Câu 2
        if (!trimmedValue) {
            setError('Tên Task không được để trống!');
            return;
        }
        if (trimmedValue.length > 100) {
            setError('Tên Task không được vượt quá 100 kí tự!');
            return;
        }

        // Tạo object newTodo
        const newTodo = {
            id: Date.now(),
            task: trimmedValue,
            priority: priority,
            completed: false
        };

        // Gọi hàm từ component Cha truyền xuống để cập nhật state tổng
        onAddTodo(newTodo);

        // Reset form sau khi thêm thành công
        setInputValue('');
        setPriority('Low');
        setError('');
    };

    return (
        <div className="form-container p-4 border border-primary rounded bg-white position-relative">
            <i className="bi bi-x-lg position-absolute cursor-pointer" style={{ top: '15px', right: '20px' }}></i>
            <h4 className="fw-bold mb-4" style={{ color: '#1a1e46' }}>Add Task</h4>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="text-muted small fw-bold mb-2">Task</label>
                    <input 
                        type="text" 
                        className={`form-control ${error ? 'is-invalid' : ''}`}
                        placeholder="Type your task here..." 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>
                
                <div className="mb-4">
                    <label className="text-muted small fw-bold mb-2">Priority</label>
                    <div className="d-flex gap-2">
                        <button type="button" onClick={() => setPriority('High')} className={`btn rounded-pill px-4 ${priority === 'High' ? 'btn-danger' : 'btn-outline-danger'}`}>High</button>
                        <button type="button" onClick={() => setPriority('Medium')} className={`btn rounded-pill px-4 ${priority === 'Medium' ? 'btn-warning text-white' : 'btn-outline-warning'}`}>Medium</button>
                        <button type="button" onClick={() => setPriority('Low')} className={`btn rounded-pill px-4 ${priority === 'Low' ? 'btn-success' : 'btn-outline-success'}`}>Low</button>
                    </div>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-secondary px-4 rounded-3">Add</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;