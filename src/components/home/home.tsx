import './home.css'
import 'animate.css'

function Home() {

    return (
        <div>
            <div className="container">
                <div className="image-container" style={{ width: "85px", height: "230px" }}>
                    <img
                        src='images\h.png' alt="Your Image" className="cropped-image" style={{ width: "84px", height: "100%", }} />
                </div>
                <div className="image-container" style={{ width: "40px", height: "230px" }}>
                    <img src='images\i.png' alt="Your Image" className="cropped-image animate__delay-5s" style={{ width: "36px", height: "220px" }} />
                </div>
                <div className="image-container" style={{ width: "31px", height: "230px", paddingRight: "40px" }}>
                    <img src='images\comma.png' alt="Your Image" className="cropped-image" style={{ width: "30px", height: "210px" }} />
                </div>
                <div className="image-container" style={{ width: "40px", height: "230px" }}>
                    <img src='images\i.png' alt="Your Image" className="cropped-image" style={{ width: "36px", height: "220px" }} />
                </div>
                <div className="image-container" style={{ width: "120px", height: "230px", paddingRight: "40px" }}>
                    <img src='images\m.png' alt="Your Image" className="cropped-image" style={{ width: "116px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "85px", height: "230px" }}>
                    <img src='images\h.png' alt="Your Image" className="cropped-image" style={{ width: "84px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "85px", height: "230px" }}>
                    <img src='images\a.png' alt="Your Image" className="cropped-image" style={{ width: "89px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "85px", height: "230px" }}>
                    <img src='images\s.png' alt="Your Image" className="cropped-image" style={{ width: "85px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "85px", height: "230px" }}>
                    <img src='images\h.png' alt="Your Image" className="cropped-image" style={{ width: "84px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "40px", height: "230px" }}>
                    <img src='images\i.png' alt="Your Image" className="cropped-image" style={{ width: "36px", height: "220px" }} />
                </div>
                <div className="image-container" style={{ width: "85px", height: "230px" }}>
                    <img src='images\r.png' alt="Your Image" className="cropped-image" style={{ width: "86px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "40px", height: "230px" }}>
                    <img src='images\exclamation.png' alt="Your Image" className="cropped-image" style={{ width: "36px", height: "220px" }} />
                </div>
            </div>
            <div className='container-2'>
                <p className='bodytext'>I AM CURRENTLY A STUDENT</p>
            </div>
            <div className="container-3">
                <p className="bodytext">@</p>
                <p className="bodytext">
                    <a href="https://www.iba.edu.pk/" className='link' target="_blank" rel="noopener noreferrer">INSTITUE OF BUSINESS ADMINISTRATION KARACHI</a>
                </p>
            </div>
            </div>

            );
}

export default Home
