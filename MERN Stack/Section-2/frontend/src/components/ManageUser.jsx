import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const ManageUser = () => {

    const [userList, setuserList] = useState([]);

    const fetchUserData_2 = async () => {
        const apikey = '6058489d29d0be267b731058dcc04f17';
        let url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=' + apikey;

        fetch(url)
        .then(function (response) {
            console.log(response.status);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
      };

  const fetchUserData = async () => {
    // const apikey = '6058489d29d0be267b731058dcc04f17';
    // let url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res);
    console.log(res.status);

    if(res.status === 200){
       const data = await res.json();
       console.log(data);
       setuserList(data);
    }
  };

  const deleteUser = async (id) => {
    console.log(id);
    const res =  await fetch('http://localhost:5000/user/delete/' + id, {
        method : "DELETE",
    });

    if(res.status===200){
        toast.error('user is deleted');
        fetchUserData();
    }
  }

  const display = () => {
    if(userList.length===0){
        return <h1 className='text-center'>No Data Found</h1>
    }

    return <table className='table table-dark table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {
                userList.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><button className='btn btn-outline-danger' onClick={() => {deleteUser(user._id)}}>Delete</button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  }

  useEffect(() => {
    fetchUserData();
    fetchUserData_2(); 
  }, [])
  
  return (
    <div>
        <h1 className='text-center'>Manage User Data</h1>
        <hr className='container'/>
        <div className='container'>
            {display()}
        </div>
    </div>
  )
}

export default ManageUser