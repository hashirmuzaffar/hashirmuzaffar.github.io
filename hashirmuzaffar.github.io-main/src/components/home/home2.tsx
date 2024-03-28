import './home.css'
import 'animate.css'

function Home2() {

    return (
        <div>
            <div className="container">
                <div className="image-container" style={{ width: "85px", height: "220px" }}>
                    <img
                        src='images\p.png' alt="Your Image" className="cropped-image" style={{ width: "84px", height: "100%", }} />
                </div>
                <div className="image-container" style={{ width: "95px", height: "220px" }}>
                    <img src='images\o.png' alt="Your Image" className="cropped-image" style={{ width: "90px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "130px", height: "220px"}}>
                    <img src='images\w.png' alt="Your Image" className="cropped-image" style={{ width: "130px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "74px", height: "220px" }}>
                    <img src='images\e.png' alt="Your Image" className="cropped-image" style={{ width: "74px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "110px", height: "220px" }}>
                    <img src='images\r.png' alt="Your Image" className="cropped-image" style={{ width: "90px", height: "100%" }} />
                </div>
                <div className="image-container" style={{ width: "84px", height: "220px" }}>
                    <img src='images\question-mark.png' alt="Your Image" className="cropped-image" style={{ width: "80px", height: "100%" }} />
                </div>
            </div>
            <div className='container-3'>
            <p className='bodytext'>Mastery of creativity and development, which enables the creation of groundbreaking apps that revolutionize generations, is power, and I am powerful. ;)
            </p>
            </div>
            <div className="container-3">
            </div>
            </div>

            );
}

export default Home2