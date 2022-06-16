import './login-component.scss';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import googleIcon from 'svg/google.svg';
import githubIcon from 'svg/github.svg';

export type LoginType = {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginType>();
    return (
        <div className="login">
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
            {/* <Link to={'/register'}>Sign up</Link> */}
            <span className="login_sing-up">Sing up</span>
            <Stack className='login_icons' direction={'row'} justifyContent={'space-around'}>
                <img src={googleIcon} alt="" width={50} height={50} />
                <img src={githubIcon} alt="" width={50} height={50} />
            </Stack>
        </div>
    )
}

export default Login;