import React from 'react';
import './App.css'
import {useForm} from 'react-hook-form'

function App() {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);


  return (
    <div>
        <h1>Forms in react</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register('name')} />
            </label>

            <label>
                Email:
                <input {...register('email')} />
            </label>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default App
