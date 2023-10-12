import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
const navigate=useNavigate();
    const [inputs,setInputs]=useState([])

const handleChange=(event)=>{
    const name= event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}));
}

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        axios.post('http://localhost/api/user/save', inputs).then(function(response){
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

            <h1>Edit User</h1>
            <form onSubmit={handleSubmit} method="post">
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name:</label>

                            </th>
                            <td>

                                <input type="text" name="name"
                                onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td>
                                <input type="text" name="email"
                                onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile:</label>
                            </th>
                            <td>
                                <input type="text" name="mobile"
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
