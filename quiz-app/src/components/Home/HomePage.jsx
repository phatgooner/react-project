import videoIntro from '../../assets/video-homepage.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop width="750" >
                <source src={videoIntro} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div style={{ fontSize: '75px', lineHeight: '1.2' }}>Get to know your customers with forms worth filling out</div>
                <div className='fs-4'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</div>
                <div><button className='btn btn-dark rounded-2'>Get started. It's free</button></div>
            </div>
        </div>
    )
}

export default HomePage