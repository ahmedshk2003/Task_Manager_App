import '../App.css';
import Button from './Button';

function Header(props) {
  return (

    <div className='header'>
      <h1>Task Manager</h1>
      <div className='btnWrapper'>
        <Button name="Add"
          bg="#001B79"
          color="white"
          click={props.handleInput} />
      </div>
    </div>

  );
}

export default Header;