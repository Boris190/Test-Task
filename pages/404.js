const ErrorPage = () => {
    return (
        <section className='error_section'>
            <a href='/' className='logo'>
                <img src='/errorLogo.png' alt="" />
            </a>
            <div className='error_back'>
                <img src='/errorBack.png' alt=""/>
            </div>
            <div className='content'>
                <h2 className='title'>Oooops page is not found :(</h2>
                <a href='/' className="btn">Back Home</a>
            </div>
        </section>
   )
}

export default ErrorPage;