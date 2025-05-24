import React, {useEffect} from 'react';
import './App.css'
import {useForm} from 'react-hook-form'

function App() {

    const {register, handleSubmit,
        reset ,formState: {errors}, watch} = useForm({
         mode: 'onChange'
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const existingUsernames = ['admin','user123','john']

    const checkIfUsernameExist = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return existingUsernames.includes(username);
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
                    isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                    checkUsername: async (value) => {
                        const exist = await checkIfUsernameExist(value);
                        return !exist || 'Username already exists'
                    }
                }})} />
            </label>
            {errors.name && <p>{errors.name.message}</p>}
            <br/>
            <label>
                Email:
                <input {...register('email', {required: true})} />
            </label>
            {errors.email && <p>Invalid email format.</p>}
            <br/>
            <label>
                Password:
                <input type='password' {...register('password', {
                    required: true,
                minLength: 2,

                })} />
            </label>
    <br/>
            <label>
                Confirm Password:
                <input type='password' {...register('password', {
                    required: true,
                    minLength: 2,
                    validate: value => value === watch('password') || 'Passwords do not match'
                })} />
            </label>
            <br/>
            <button type='submit'>Submit</button>
            <br/>
            <button type='submit' onClick={() => reset()}>Reset</button>
        </form>
    </div>
  )
}

export default App
