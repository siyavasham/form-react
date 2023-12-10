import "./input.css";

const Input = (props) => {

   const { onChange, onBlur, onClick, messages, values, ...others } = props;

   return(

      <div className="input-box mb--30">

         <input className = "errorInput"  onChange = {onChange} onBlur = {onBlur} onClick = {onClick} value={values} {...others} />
         <ul>
         { messages && messages.map((message, index) => (
            <li key = {index} className="errorMessages">{message}</li>
         ))}
         </ul>
      </div>
   )
}

export default Input;