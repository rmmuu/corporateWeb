
import { useFormik } from 'formik'

const LoginForm = () => {

    const validate = values => {
        const errors = {}

        if (!values.email) {
            errors.email = 'Required'
        } else if (values.email.length < 4) {
            errors.email = 'Must be 5 characters or more'
        }

        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
            errors.password = 'Must not be 12345678 !!!'
        }

        if (!values.repassword) {
            errors.repassword = 'Required'
        } else if (values.repassword !== values.password) {
            errors.repassword = 'Second password doesn\'t match'
        }

        return errors
    }
    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }

    })

    return (
        <div className='loginForm'>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} /><br/>
                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password} /><br/>
                {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                <input
                    id="repassword"
                    name="repassword"
                    type="password"
                    placeholder='token'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repassword} /><br/>
                {formik.touched.repassword && formik.errors.repassword ? <div className='error'>{formik.errors.repassword}</div> : null}
                <button type="submit" className='signinBtn'>sign in</button>
            </form>
        </div>
    )
}

export default LoginForm;