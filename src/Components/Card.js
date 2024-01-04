import '../App.css';
import Button from './Button';

function Card(props) {
  return (

    <div className='card' style={{backgroundColor:props.complete===true && 'green', color:props.complete===true && 'white'}}>
      
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className='btnWrapper'>

        <Button
          name="Complete"
          color="white"
          bg="#001B79"
          click={props.update} />

        <Button
          name="Delete"
          color="white"
          bg="red" 
          click={props.delete}/>





      </div>
    </div>

  );
}

export default Card;