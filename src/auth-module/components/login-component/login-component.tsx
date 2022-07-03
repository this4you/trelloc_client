import './login-component.scss';
import LoadingButton from '@mui/lab/LoadingButton';
import { Stack, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import googleIcon from 'svg/google.svg';
import githubIcon from 'svg/github.svg';
import { Link } from 'react-router-dom';
import { LoginType } from 'auth-module/models/loginType';
import { useAuth } from 'auth-module/hooks';
import { useAppSelector } from 'core/hooks';
import { selectAuth } from 'auth-module/redux/auth-state';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>();
    const auth = useAuth();
    const { loading } = useAppSelector(selectAuth);
    const onSubmit = handleSubmit(data => {
        auth.signIn(data);
    });
    return (
        <form className="login" onSubmit={onSubmit}>
            <TextField disabled={loading} type={'email'} id="email" className="login_input" label="Email"
                variant="outlined"
                helperText={errors.email?.message}
                {...register("email", { required: true, maxLength: { value: 20, message: "Max length 20" } })}
                error={!!errors.email}
            />
            <TextField disabled={loading} type={'password'} id="password" className="login_input" label="Password"
                variant="outlined"
                helperText={errors.password?.message}
                {...register("password", { required: true, maxLength: { value: 20, message: "Max length 20" } })}
                error={!!errors.password}
            />
            <LoadingButton name="submit" loading={loading} type="submit" variant="contained" color="primary">Sing IN</LoadingButton>
            <Link className="login_sing-up" to={'/register'}>Sign up</Link>
            <Stack className='login_icons' direction={'row'} justifyContent={'space-around'}>
                <img src={googleIcon} alt="" />
                <img src={githubIcon} alt="" />
            </Stack>
        </form>
    )
}

export default Login;