
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Input from './../../../components/input/input'
import Checkbox from './../../../components/checkbox/checkbox'
import {requiredFieldValidator, checkFullnameRegex, uppercaseLetterValidator, lowercaseLetterValidator, numberValidator} from './../../../validations';


const Register = () => {

   const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
   })

   const [errors, setErrors] = useState([]);

   const inputs = [
      {
         id: 0,
         name: "fullname",
         type: "text",
         placeholder: "نام و نام خانوادگی",
         validators: [requiredFieldValidator, checkFullnameRegex],

      },
      {
         id: 1,
         name: "email",
         type: "email",
         placeholder: "رایانامه",
         validators: [],
      },
      {
         id: 2,
         name: "password",
         type: "password",
         placeholder: "گذرواژه",
         validators: [requiredFieldValidator,],
      },
      {
         id: 3,
         name: "confirmPassword",
         type: "password",
         placeholder: "تکرار گذرواژه",
         validators: [],
      },
      {
         id: 4,
         name: "checkbox",
         type: "checkbox",
         label: "من با قوانین و مقررات موافق هستم.",
         validators: [],
      },


  ]

    useEffect(() => {
       const temp = [...errors]
       inputs.map((input) => {
          temp.push([])
       })
       setErrors(temp)

  },[]);

  const handleSubmit = (event) => {
    event.preventDefault()

    const error = [...errors]
    inputs.map((input) => {
       const temp = []
       input.validators.map((validator)=> {
          if(validator(values[input.name]) !== true){
             temp.push(validator(values[input.name]))
          }

       })
       error[input.id] = temp


    })
    setErrors(error)

  }


  const handleInputChange = (event) => {
     setValues({...values, [event.target.name]: event.target.value})

  }

const handleClickInput = (event) => {
   const temp = [...errors]
   temp[event.currentTarget.id] = []
   setErrors(temp)

}

  const handleInputBlur = (event) => {
     const error = [...errors]
     inputs.map((item, index) => {
     const temp = []

     if(index  == event.currentTarget.id){

        item.validators.map((validator) => {

          if(validator(event.target.value) !== true){

              temp.push(validator(event.target.value));

           }

       })
       error[item.id] = temp
       setErrors(error)

     }

  })
  }

 console.log(errors)
  return (
    <>
        <div className="login-form-box">
            <h3 className="mb-30">عضویت</h3>
            <form onSubmit = { handleSubmit } className="login-form" noValidate>
                {inputs.map((input) => (
                   <Input key = {input.id}
                          value = {values[input.name]}
                          onChange={handleInputChange}
                          messages = {errors[input.id]}
                          onBlur = { handleInputBlur }
                          onClick = { handleClickInput }
                          {...input} />
                ))}

                <button className ="rn-btn edu-btn w-100 mb--30" type="submit">
                    <span>عضویت</span>
                </button>
                <div className ="input-box">
                    <Link to="/login" className ="lost-password">پیشتر ثبت نام کرده‌اید؟ وارد شوید</Link>
                </div>
            </form>
        </div>
    </>
  );
}

export default Register;
