import React, {useEffect} from 'react';
import './App.css'
import {useForm} from 'react-hook-form'

function App() {

    const {register, handleSubmit,
        reset ,formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const validateName = (value) => {
        if(value !== 'admin'){
            return 'Only admin is allowed';
        }
        return true;
    }

  return (
    <div>
        <h1>Forms in react</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register('name', {required: 'Name is required', minLength:
                        {value: 2, message: 'Name should be atleast 3 characters'},
                validate: {
                    notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                    isNotNumber: (value) => isNaN(value) || "Name cannot be number"
                }})} />
            </label>
            {errors.name && <p>{errors.name.message}</p>}

            <label>
                Email:
                <input {...register('email', {required: true})} />
            </label>
            {errors.email && <p>Invalid email format.</p>}
            <button type='submit'>Submit</button>
            <button type='submit' onClick={() => reset()}>Reset</button>
        </form>
    </div>
  )
}

export default App
