import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import http from "../http";

export default function Home() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  },[]);
  
  const fetchAllUsers = () => {
    http.get('/users').then(res=>{
      setUsers(res.data);
    })
  } 

  const deleteUser = (id) => {    
    http.delete('/users/'+id).then(res=>{
      fetchAllUsers();
    })
  }
  
  return (
    <div>
      <h2>Users listing ...</h2>
      <table className="table">
        <thead>
          <tr>
            <th>serial No.</th>
            <th>Username</th>
            <th>Email Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>(
            <tr key={user.id}>
              <td>{++index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-info" to={{pathname:"/Edit/"+user.id}}>Edit</Link>
                &nbsp;&nbsp;
                <Link className="btn btn-success" to={{pathname:"/View/"+user.id}}>View</Link>
                &nbsp;&nbsp;
                <button type="submit" className="btn btn-danger" 
                onClick={()=>{deleteUser(user.id)}}>Delete</button>
                &nbsp;&nbsp;
              </td>              
            </tr>
          ))}          
        </tbody>
      </table>
    </div>
  )
}
