import React, { useState, useEffect } from 'react'; // Nhớ import thêm useEffect
import './App.css';
import initialData from './data.json';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('myTaskList');
        if (savedTodos) {
            return JSON.parse(savedTodos);
        }

        return initialData;
    });

    useEffect(() => {

        localStorage.setItem('myTaskList', JSON.stringify(todos));
    }, [todos]);

    const [editingTodo, setEditingTodo] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const handleOpenAddForm = () => {
        setEditingTodo(null); 
        setShowForm(true);   
    };
    const handleCloseForm = () => {
        setEditingTodo(null);
        setShowForm(false);   // Tắt form
    };

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        setShowForm(false);
    };

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const handleToggleStatus = (id) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleEditTodo = (todo) => {
        setEditingTodo(todo);
        setShowForm(true);
    };

    const handleUpdateTodo = (updatedTodo) => {
        const updatedList = todos.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedList);
        setEditingTodo(null); 
        setShowForm(false); 
    };

    const handleCancelEdit = () => {
        setEditingTodo(null);
    };

    return (
        <div className="container py-5" style={{ maxWidth: '900px' }}>
            <TodoList 
                todos={todos} 
                onDelete={handleDeleteTodo} 
                onToggle={handleToggleStatus} 
                onEdit={handleEditTodo}
                onOpenForm={handleOpenAddForm}
            />
            
            <TodoForm 
                onAddTodo={handleAddTodo} 
                onUpdateTodo={handleUpdateTodo}
                editingTodo={editingTodo}
                onCloseForm={handleCloseForm}
            />
        </div>
    );
}

export default App;