import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function TodoList () {
	return (
		<div id="container">
			<h1>
				To-Do List <FontAwesomeIcon icon={faPlus} />
			</h1>
			<input type="text" placeholder="Add New Todo" />
			<ul>
				<li>
					<span>
						<FontAwesomeIcon icon={faTrashAlt} />
					</span>Feed Cat
				</li>
				<li>
					<span>
						<FontAwesomeIcon icon={faTrashAlt} />
					</span>Buy Groceries
				</li>
				<li>
					<span>
						<FontAwesomeIcon icon={faTrashAlt} />
					</span>Make Bread
				</li>
			</ul>
		</div>
	);
}
