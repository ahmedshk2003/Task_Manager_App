import '../App.css';

function Input(props) {
    return (

        <div className='inputWrapper'>
            <label>{props.label}</label>
            <input value={props.value} className='inputForm' placeholder={props.placeholder} onChange={props.change} />
        </div>


    );
}

export default Input;