import React from 'react';
import { toggleToDo, deleteToDo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleToDo({ id, completed: !completed}))
	}

	const deleteItem = () => {
		dispatch(deleteToDo({ id }))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
						type='checkbox' 
						className='mr-3' 
						checked={completed} 
						onClick={handleCheckboxClick}
						></input>
					{title}
				</span>
				<button 
					className='btn btn-danger'
					onClick={deleteItem}>
						Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
