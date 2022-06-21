import './login-component.scss';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import googleIcon from 'svg/google.svg';
import githubIcon from 'svg/github.svg';
import { Link } from 'react-router-dom';

export type LoginType = {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginType>();
    return (
        <form className="login">
            <TextField type={'email'} id="email" className="login_input" label="Email"
                variant="outlined"
                {...register("email", { required: true, maxLength: 30 })}
                error={!!errors.email}
            />
            <TextField type={'password'} id="password" className="login_input" label="Password"
                variant="outlined"
                {...register("password", { required: true, maxLength: 20 })}
                error={!!errors.password}
            />
            <Button type="submit" variant="contained" color="primary">Sing IN</Button>
            <Link className="login_sing-up" to={'/register'}>Sign up</Link>
            <Stack className='login_icons' direction={'row'} justifyContent={'space-around'}>
                <img src={googleIcon} alt=""/>
                <img src={githubIcon} alt=""/>
            </Stack>
        </form>
    )
}

export default Login;