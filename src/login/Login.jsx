import { useEffect, useRef, useState } from 'react';

export default function Login() {
    // every time state changes component will re-render.
    // state interact with DOM using virtualDOM.

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log(emailRef, passwordRef)

    useEffect(() => {
        // focus on the email input when component mounts
        emailRef.current.focus();
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailRef.current.value === '') {
            emailRef.current.focus();
        } else if (passwordRef.current.value === '') {
            passwordRef.current.focus();
        } else {
            // Handle form submission logic
            console.log(emailRef.current.value, passwordRef.current.value);
        }
    };

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='w-50 bg-warning mt-2 rounded p-2'>
                <h2 className='text-center'>Sign In</h2>
                {/* login input */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        ref={emailRef}


                    />
                </div>
                {/* password input */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        ref={passwordRef}

                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
