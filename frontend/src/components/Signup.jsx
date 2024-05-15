import React, { useState } from 'react'

export default function Signup() {

    const [user, setUser] = useState({});

    let name, value;
    const storeUser = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const signupUser = async (e) => {
        try {
            e.preventDefault();
            const { name, email, password, cpassword } = user;
            const res = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, cpassword })
            })

            const data = await res.json();
            if (res.status === 401 || !data) {
                window.alert("there is an error");
            } else {
                window.alert("registered successfully");
                setUser({ ...user, name: "", email: "", password: "", cpassword: "" });
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
                        <input type="text" name="name" value={user.name} placeholder='enter your name'
                            onChange={storeUser} autoComplete='off' />
                        <input type="text" name="email" value={user.email} placeholder='enter your email' onChange={storeUser} autoComplete='off' />
                        <input type="text" name="password" value={user.password} placeholder='enter your password' onChange={storeUser} autoComplete='off' />
                        <input type="text" name="cpassword" value={user.cpassword} placeholder='confirm your password' onChange={storeUser} autoComplete='off' />
                        <button className='btn btn-dark px-5' onClick={signupUser}>Signup</button>
                    </form>
                </div>
            </div>
        </>
    )
}
