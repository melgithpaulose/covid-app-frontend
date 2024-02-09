import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const PatientView = () => {
    const [data,setData]=new useState([])
    const getData =()=>{
        axios.get("http://localhost:2004/api/covid/patientview").then(
            (respose)=>{
                setData(respose.data)
            }
        )
        }
    useEffect( ()=>{getData()},[] )
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
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
                                        (value,index)=>{return <tr>
                                            <td scope="row">{value.name}</td>
                                            <td>{value.address}</td>
                                            <td>{value.phno}</td>
                                            <td>{value.symptoms}</td>
                                            <td>{value.status}</td>
                                        </tr>}
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientView