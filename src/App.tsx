import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([
    'Estudar React com Typescript',
    'Comprar pao meio dia',
    'Estudar ingles a noite'
  ])

  function handleRegister() {
    if (!input) {
      alert('Digite o nome da sua tarefa')
    }

    setTasks(tarefas => [...tarefas, input])
    setInput('')
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input
      type="text"
      placeholder='Digite o nome da tarefa...'
      value={input}
      onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleRegister}>Adicionar Tarefa</button>
      <hr />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default App
