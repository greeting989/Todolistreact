import React, { useEffect, useState } from 'react';
const url = "https://reqres.in/api/users?page=2 ";

export default Function App(){

  const [Users,setUsers] = useState([]);
  const [error,setError] = useState('');
  useEffect(()=>{
    fetch(url)
      .then((response)=>{
        if(response.ok) return response.json()
        throw new Error('Something went wrong ');
      })
  })


}