import React from 'react'
import {Container} from "react-bootstrap"
import {useFormik} from "formik";
import * as Yup from "yup"
function FormikYap() {
  const initialValues={
    firstName:""
  }
  const validationSchema=Yup.object({
    firstName:Yup.string().min(5,"it must be minimun 5 character").required("it musnt be null")
  })
  const onSubmit=(values)=>{
    console.log(values)
  }
  const formik =useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });
  return (
    <Container>
      <h2>Formik-Yup</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label> <br />
        <input type="text"
        id='firstName'
        name='firstName'
        placeholder='enter your name'
        /* value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} */
        {...formik.getFieldProps("firstName")}
         />
        <br />
        {
          formik.touched.firstName &&formik.errors.firstName
        ?  <div style={{color:"red"}}>{formik.errors.firstName}</div>:null
        }
        <br />
        <button type='submit'>Formu Gönder</button>
      </form>
    </Container>
  )
}

export default FormikYap