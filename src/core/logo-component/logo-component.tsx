import logo from 'logo.svg';

type LogoPropsType = {
    width?: number,
    height?: number
}

const Logo = ({ width = 50, height = 50 }: LogoPropsType) => {
    return (
        // <h1>/Hello</h1>
        <div className="logo">
            <img src={logo} width={width} height={height} className="App-logo" alt="logo" />
        </div>
    )
}

export default Logo;