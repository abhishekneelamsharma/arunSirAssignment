import React, { useState } from 'react'

export default function Login() {
  const [storeLoginUser, setstoreLoginUser] = useState({});

  let name, value;
  const storeUser = (e) => {
    name = e.target.name;
    value = e.target.value;
    setstoreLoginUser({ ...storeLoginUser, [name]: value });
  }

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = storeLoginUser;
  
      const res = await fetch("/login", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json();
      console.log(data);
      if(res.status === 401 || !data){
          window.alert("there is an error");
      }else{
          window.alert("login successfully");
          setstoreLoginUser({...storeLoginUser,email:"",password:""});
      }


    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="login-page  d-flex justify-content-center align-items-center">
        <div>
          <form action="" className='text-center mt-5'>
            <input type="text" name="email" value={storeLoginUser.email} onChange={storeUser} placeholder='enter your email' autoComplete='off'/>
            <input type="text" name="password" value={storeLoginUser.password} onChange={storeUser} placeholder='enter your password' autoComplete='off' />
            <button className='btn btn-dark px-5' onClick={loginUser}>login</button>
          </form>
        </div>
      </div>
    </>
  )
}
