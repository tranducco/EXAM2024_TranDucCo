import React, { useState, useEffect } from 'react'; // Nhớ import useEffect

function TodoForm({ onAddTodo, onUpdateTodo, editingTodo, onCancelEdit }) {
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriority] = useState('Low');
    const [error, setError] = useState('');

    // USE EFFECT: Tự động chạy khi biến editingTodo thay đổi
    useEffect(() => {
        if (editingTodo) {
            // Nếu có dữ liệu truyền vào -> Đổ dữ liệu lên Form
            setInputValue(editingTodo.task);
            setPriority(editingTodo.priority);
            setError(''); // Xóa lỗi cũ
        } else {
            // Nếu null -> Trả Form về trống (chế độ Thêm mới)
            setInputValue('');
            setPriority('Low');
        }
    }, [editingTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const trimmedValue = inputValue.trim();

        if (!trimmedValue) {
            setError('Tên Task không được để trống!');
            return;
        }
        if (trimmedValue.length > 100) {
            setError('Tên Task không được vượt quá 100 kí tự!');
            return;
        }

        if (editingTodo) {
            // NẾU ĐANG Ở CHẾ ĐỘ SỬA
            const updatedTodo = {
                ...editingTodo, // Giữ nguyên ID và trạng thái completed cũ
                task: trimmedValue, // Ghi đè tên mới
                priority: priority  // Ghi đè mức độ mới
            };
            onUpdateTodo(updatedTodo);
        } else {
            // NẾU ĐANG Ở CHẾ ĐỘ THÊM
            const newTodo = {
                id: Date.now(),
                task: trimmedValue,
                priority: priority,
                completed: false
            };
            onAddTodo(newTodo);
            
            // Thêm xong thì xóa rỗng Form
            setInputValue('');
            setPriority('Low');
        }
        setError('');
    };

    return (
        <div className="form-container p-4 border border-primary rounded bg-white position-relative">
            {/* Nút X trên cùng góc phải: Bấm vào để hủy chế độ sửa */}
            <i 
                className="bi bi-x-lg position-absolute cursor-pointer" 
                style={{ top: '15px', right: '20px', cursor: 'pointer' }}
                onClick={onCancelEdit}
            ></i>
            
            {/* Tiêu đề tự đổi chữ */}
            <h4 className="fw-bold mb-4" style={{ color: '#1a1e46' }}>
                {editingTodo ? "Edit Task" : "Add Task"}
            </h4>

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
                    {/* Nút Submit tự đổi chữ */}
                    <button type="submit" className="btn btn-secondary px-4 rounded-3">
                        {editingTodo ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;