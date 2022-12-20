import { useState } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import '../List/list.styles.css'


const List = () => {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    const task = {
      id: Math.random(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  return (
    <section className="list">
      <header>
        <h2>Tarefas a fazer:</h2>

        <div className="input-container">
          <input 
            type="text" 
            placeholder="Adicionar nova tarefa" 
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button className="add-task" type="submit" data-testid="add-task" onClick={handleCreateNewTask}>
            <FiPlus size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              <div data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <button className="remove-task"type="button" data-testid="remove-task" >
                <FiTrash2 size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}

export default List