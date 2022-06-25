import { TextField, Button } from '@mui/material';
import { RegisterType } from 'auth-module/models/resiterType';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './register-component.scss';


const Register = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<RegisterType>();
    return (
        <form className="register">
            <TextField type={'email'} id="email" className="register_input" label="Email"
                variant="outlined"
                {...register("email", { required: true, maxLength: 30 })}
                error={!!errors.email}
            />
            <TextField type={'text'} id="name" className="register_input" label="Name"
                variant="outlined"
                {...register("name", { required: true, maxLength: 30 })}
                error={!!errors.email}
            />
            <TextField type={'password'} id="password" className="register_input" label="Password"
                variant="outlined"
                {...register("password", { required: true, maxLength: 20 })}
                error={!!errors.password}
            />
            <TextField type={'password'} id="confirmPassword" className="register_input" label="Confirm Password"
                variant="outlined"
                {...register("confirmPassword", { required: true, maxLength: 20 })}
                error={!!errors.confirmPassword}
            />
            <Button type="submit" variant="contained" color="primary">Sing UP</Button>
            <Link className="register_sing-in" to={'/login'}>Sign in</Link>

        </form>
    )
}

export default Register;