// src/components/TodoItem.jsx
import React from 'react';

function TodoItem({ todo }) {
    // Hàm phụ trợ để lấy CSS class màu sắc dựa trên priority
    const getPriorityClass = (priority) => {
        if (priority === 'High') return 'priority-high text-danger fw-bold';
        if (priority === 'Medium') return 'priority-medium text-warning fw-bold';
        return 'priority-low text-success fw-bold';
    };

    return (
        <div className="task-card d-flex align-items-center bg-white rounded p-3 mb-3 shadow-sm">
            <div className="col-4">
                <div className="text-muted small">Task</div>
                <div className="fw-bold">{todo.task}</div>
            </div>
            
            <div className="col-2">
                <div className="text-muted small">Priority</div>
                <div className={getPriorityClass(todo.priority)}>{todo.priority}</div>
            </div>
            
            <div className="col-3 text-center">
                <span className="badge bg-light text-secondary rounded-pill px-3 py-2">
                    {todo.completed ? "Done" : "To Do"}
                </span>
            </div>
            
            <div className="col-1 text-center" style={{ fontSize: '22px' }}>
                <i className={todo.completed ? "bi bi-check-circle text-primary" : "bi bi-circle text-muted"}></i>
            </div>
            
            <div className="col-2 text-end">
                <i className="bi bi-pencil-square ms-2 cursor-pointer"></i>
                <i className="bi bi-trash text-danger ms-2 cursor-pointer"></i>
            </div>
        </div>
    );
}

export default TodoItem;