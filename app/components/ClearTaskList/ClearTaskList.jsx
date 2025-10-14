'use client'
import deleteTodo from '@/app/api/deleteTodo'
import './ClearTaskList.css'

const ClearTaskList = ({ filteredTasks, setTasks }) => {
	const clearList = async () => {
		setTasks(tasks => {
			tasks.filter(task => task.isCompleted).forEach(task => deleteTodo(task))
			return tasks.filter(task => !task.isCompleted)
		})
	}
	return (
		<div className='footer'>
			Кол-во: {filteredTasks.length}
			<button className='btn' onClick={clearList}>
				Очистить завeршённые
			</button>
		</div>
	)
}

export default ClearTaskList
