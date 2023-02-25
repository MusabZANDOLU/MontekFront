import '../../assets/scss/loader.scss'

const LoadingPage = () => {
    return (
        <div>
            <span className="loader loaderClass"></span>
            <div className='loaderTextClass'>İşlem yapılıyor lütfen bekleyiniz.</div>
        </div>
    )
}

export default LoadingPage
