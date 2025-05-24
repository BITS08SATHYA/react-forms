import { useState } from 'react'

import './App.css'

function App() {

    const [formData, setFormData] = useState({
        name: '',
        email: ''

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('FormData submitted: ' , formData)

    }

    const handleChange = (e) => {
        // e.preventDefault()
        // console.log(formData.name)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

  return (
    <div>
        <h1>Forms in react</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default App
