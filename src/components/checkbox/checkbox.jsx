
const Checkbox = (props) => {
   const {type, ...others} = props
   return(
      <div className="input-box mb--30" >
         <input id="checkbox-2" type={type} />
         <label htmlFor="checkbox-2">من با قوانین و مقررات موافق هستم.</label>
      </div>
   )

}

export default Checkbox