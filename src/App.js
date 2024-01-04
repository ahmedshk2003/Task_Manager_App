
import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Input from './Components/Input';
import Card from './Components/Card';
import { useState } from 'react';





function App() {

  const [add, setAdd] = useState(false);
  const [tasks, setTasks] = useState([])
  const [singleTask, setSingleTask] = useState('')
  const [singleDescription, setSingleDescription] = useState('')



  const updateTask = (id) => {
    setTasks(
      tasks.map((t) => (

        t.id == id ? { ...t, complete: true } : t


      ))
    )
  }



  const deleteTask = (id) => {
    setTasks(
      tasks.filter((t) => (

        t.id == id ? false : true


      ))
    )
  }




  const addToCard = () => {



    const id = tasks.length == 0 ? 1 : tasks.length + 1;
    const taskDetails =
    {

      id: id,
      task: singleTask,
      description: singleDescription,
      complete: false





    }

    setTasks(
      [...tasks, taskDetails]
    )
    
  }

  const clearInput = () => {
    setSingleTask("");
    setSingleDescription("")

  }





  const handleTask = (event) => {
    setSingleTask(event.target.value)

  }

  const handleDescription = (event) => {
    setSingleDescription(event.target.value)

  }


  const handleInput = () => {
    setAdd(!add)
  }




  return (
    <div className='main'>
      <div className='inputSections'>
        <Header
          handleInput={handleInput} />
        {add == true ?
          <>
            <Input
              value={singleTask}
              placeholder="Enter Task"
              label="Task"
              change={handleTask} />

            <Input

              value={singleDescription}
              placeholder="Enter Description"
              label="Description"
              change={handleDescription} />

            <div className='btnWrapper'>

              <Button
                name="Save Task"
                color="white"
                bg="#001B79"
                click={addToCard
                } />

              <Button
                name="Cancel"
                color="white"
                bg="red"
                click={clearInput} />

            </div>

          </> : null
        }






      </div>
      <div className='cardSection'>

        {
          tasks.map((t) => (
            <Card title={t.task} description={t.description} delete={() => deleteTask(t.id)} complete={t.complete}
              update={() => updateTask(t.id)} />
          ))


        }



      </div>













    </div>
  );
}

export default App;
