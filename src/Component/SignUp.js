import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const initialValues = {
    email: "",
    password: "",
    OTP: ""
}
const onSubmit = values => {
    axios.post('https://zohoform-c8ffc-default-rtdb.firebaseio.com/register.json',
        values).then(alert("welcome to zoho"))
}
const validationSchema = Yup.object({
    email: Yup.string().required('required email'),
    password: Yup.string().required('required email'),
    OTP: Yup.string().required('please enter the valid OTP')
})
const SignUp = () => {
    return (
        <>
            <center className="mid2">
                <div className='ContainerF2'>
                    <div className='signC'>
                        <h2><u>Sign Up</u></h2>
                        <h5 className='signC'>Already have an Account<a href='/'>Sign In</a></h5><br />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}>
                            <Form>
                                <label className='Lc' htmlFor="email"><b>EMAIL:</b></label>
                                <Field className="Fc" type="email" placeholder="enter your email" name="email" id="email" autoComplete='off' />
                                <div className='err'>
                                    <ErrorMessage name="email" /> <br />
                                </div>
                                <label className='Lc' htmlFor="password" ><b>password:</b></label>
                                <Field className="Fc" placeholder="enter your password" type="password" name="password" id="password" autoComplete='off' />
                                <div className='err'>  <ErrorMessage name="password" className='err' /></div> <br />
                                <label htmlFor='verification'><b>Secret:</b></label>
                                <Field className="Fc" placeholder="enter the verifiation code" type="otp" name="OTP" id="OTP" autoComplete='off' />
                                <div className='err'>  <ErrorMessage name="OTP" /></div> <br />
                                <button type="submit" className='btn'><b>Sign Up</b></button><br /><br />
                                <div><h6><b>By clicking the "Sign Up button, you are creating an account,and you agree to the Term of Use</b></h6></div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </center>

        </>
    )
}

export default SignUp