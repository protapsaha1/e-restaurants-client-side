import notFound from '../../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='mx-auto'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default ErrorPage;