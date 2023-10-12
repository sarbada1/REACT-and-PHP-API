import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {

        axios.get(`http://localhost/api/user/`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
const deleteUser=(id)=>{
    axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
        getUsers();
    })
}
    var i = 1;

    return (
        <div>

            <h1>List User</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>


                </thead>
                <tbody>
                    {users.map((user, index) => 
                        <tr key={index}>
                            <td>{i++}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight:"15px"}}><button>Edit</button></Link>
                                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}
