import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link } from 'react-router-dom'

const initialValues = {
    Email: "",
    Password: "",
}
const onSubmit = values => {
    axios.get('https://zohoform-c8ffc-default-rtdb.firebaseio.com/register.json',)
        .then(function (res) { console.log(res.data) })
    const res = ("")
    if (res.data === values) {
        <Link to="./Contact" element={<contact />}></Link>
    }else{
        alert('please enter a valid email and password')
    }
}
const validationSchema = Yup.object({
    Email: Yup.string().required('required Email'),
    Password: Yup.string().required('required Password')

})


const SignIn = () => {
    return (
        <>
            <center className="mid">
                <h2><u>Sign In</u></h2>
                <h5 >Don't have an account?<a href='./SignUp'>Sign Up</a></h5>
                <div>
                    <div className='ContainerF'>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}>
                            <div>
                                <Form className='FormC'>
                                    <label className='Lc' htmlFor="Email" ><b>EMAIL:</b></label><br />
                                    <Field className="Fc" placeholder="enter your email" type="Email" name="Email" id="Email" autoComplete='off' />

                                    <div className='err'>
                                        <ErrorMessage name="Email" /> <br />
                                    </div>
                                    <label htmlFor="Password"><b>Password:</b></label>
                                    <Field className="Fc" placeholder="enter your password" type="Password" name="Password" id="Password" autoComplete='off' />
                                    <div className='err'> <ErrorMessage name="Password" /></div> <br />
                                    <a className='alignC' href='./verF'>Forgot password</a>
                                    <button type="submit" className='btn'>Sign In</button>
                                </Form>
                            </div>
                        </Formik>
                    </div>
                </div>
            </center>

        </>
    )
}

export default SignIn