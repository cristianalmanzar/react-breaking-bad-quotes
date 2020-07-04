import React from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'



export const FormCustomHook = () => {


    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = values;

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder=" John Smith"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="example@example.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

        </>
    )
}
