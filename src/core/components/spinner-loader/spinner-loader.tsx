import { PuffLoader } from 'react-spinners';
import './spinner-loader.scss';

type SpinnerLoaderType = {
    loading: boolean
}

const SpinnerLoader = ({ loading }: SpinnerLoaderType) => {
    return (
        <>
            {loading ? <div className="loader">
                <PuffLoader color={"#ffffff"} loading={loading} size={150} />
            </div> : <div />}
        </>
    )
}

export default SpinnerLoader;