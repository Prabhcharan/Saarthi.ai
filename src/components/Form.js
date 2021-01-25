import React from 'react'
import { useFormik } from 'formik'
import Calendar from './Calendar'

const initialValues = {
    name: '',
    id: '',
    dept: 'Front-End',
    email: '',
    doj: '23/01/2021'
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {
    let errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.id) {
        errors.id = 'Required'
    }
    if (!values.dept) {
        errors.dept = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)) {
        errors.email = 'Invalid e-mail format'
    }
    if (!values.doj) {
        errors.doj = 'Required'
    }
    return errors
}

function Form() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='id'>Employee ID</label>
                    <input
                        type='text'
                        id='id'
                        name='id'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id}
                    />
                    {formik.touched.id && formik.errors.id ? <div className='error'>{formik.errors.id}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='dept'>Department</label>
                    <select
                        id='dept'
                        name='dept'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dept}
                    >
                        <option selected value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Deep Learning">Deep Learning</option>
                        <option value="Bot Developer">Bot Developer</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>

                    {formik.touched.dept && formik.errors.dept ? <div className='error'>{formik.errors.dept}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email ID</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='doj'>Date of Joining(DOJ)</label>
                    <Calendar
                        id='doj'
                        name='doj'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.doj}
                    />
                    {formik.touched.doj && formik.errors.doj ? <div className='error'>{formik.errors.doj}</div> : null}
                </div>


                <button type='submit'>Submit Details</button>
                <button>Clear</button>
            </form>
        </div>
    )
}

export default Form