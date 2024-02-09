import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const PatientSearch = () => {
    const [input, setInput] = new useState(
        {
            "name": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const [data,setData]=new useState([])

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:2004/api/covid/patientsearch", input).then(
            (response) => {
                setData(response.data)
                console.log(response.data)
            }
        )
    }

    
    
    useEffect( ()=>{readValues()},[] )

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info" onClick={readValues}>Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Patient Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Symptoms</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <td scope="row">{value.name}</td>
                                                        <td>{value.address}</td>
                                                        <td>{value.phno}</td>
                                                        <td>{value.symptoms}</td>
                                                        <td>{value.status}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientSearch