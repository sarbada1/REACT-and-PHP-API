import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser() {
const navigate=useNavigate();
    const [inputs,setInputs]=useState([])
const {id}=useParams();
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {

        axios.get(`http://localhost/api/user/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

const handleChange=(event)=>{
    const name= event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}));
}

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
       // Log the response from the server
      // You can update your component state or show a success message here
    } catch (error) {
      console.error(error); // Log any errors that occur
      // Handle errors or show an error message to the user
    }
  };

  
    return (
        <div>

            <h1>Create User</h1>
            <form onSubmit={handleSubmit} method="post">
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name:</label>

                            </th>
                            <td>

                                <input type="text" 
                                value={inputs.name}
                                name="name"
                                onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td>
                                <input type="text" value={inputs.email} name="email"
                                onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile:</label>
                            </th>
                            <td>
                                <input type="text" value={inputs.mobile} name="mobile"
                                onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </form>
        </div>
    )
}
