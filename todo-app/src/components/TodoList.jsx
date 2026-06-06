import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div className="task-container mb-4 p-4 bg-light border rounded">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0 fw-bold" style={{ color: '#1a1e46' }}>Task List</h2>
                
                {/* Gắn sự kiện onClick vào nút Add Task */}
                <button 
                    className="btn text-white" 
                    style={{ backgroundColor: '#7b42ff', borderRadius: '10px' }}
                    onClick={props.onOpenForm}
                >
                    <i className="bi bi-plus-lg"></i> Add Task
                </button>
            </div>

            {props.todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onDelete={props.onDelete} 
                    onToggle={props.onToggle} 
                    onEdit={props.onEdit} 
                />
            ))}
        </div>
    );
}

export default TodoList;