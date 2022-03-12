import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"


const VerF = () => {
    const initialValues = {
        Email: "",
        OTP: "",
    }
    const onSubmit = values => {
        console.log(values)
    }
    const validationSchema = Yup.object({
        Email: Yup.string().required('required Email'),
        OTP: Yup.string().required("required Don't match")

    })

    return (
        <>
            <center className="mid3">
                <div className='ContainerF'>
                    <h3><u>Verify YourSelf</u></h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}>
                        <div>
                            <Form className='FormC'>
                                <label className='Lc' htmlFor="Email" ><b>EMAIL:</b></label><br />
                                <Field className="Fc" type="Email" placeholder="enter your email" name="Email" id="Email"  autoComplete='off' />

                                <div className='err'>
                                    <ErrorMessage name="Email" /> <br />
                                </div>
                                <label htmlFor="OTP"><b>OTP:</b></label>
                                <Field className="Fc" type="OTP" name="OTP" id="OTP" placeholder="please enter the OTP" autoComplete='off' />
                                <div className='err'> <ErrorMessage name="OTP" /></div> <br />
                                <button type="submit" className='btn'>Sign In</button>
                            </Form>
                        </div>
                    </Formik>
                </div>
            </center>
        </>
    )
}

export default VerF