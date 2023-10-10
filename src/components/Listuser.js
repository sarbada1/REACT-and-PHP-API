import { useState } from "react";
import axios from "axios";

export default function ListUser() {

    const [inputs,setInputs]=useState({})

const handleChange=(event)=>{
    const name= event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}));
}

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/api/user/save', inputs);
      console.log(response.data); // Log the response from the server
      // You can update your component state or show a success message here
    } catch (error) {
      console.error(error); // Log any errors that occur
      // Handle errors or show an error message to the user
    }
  };
  
    return (
        <div>

            <h1>List User</h1>
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
