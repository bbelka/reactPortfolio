import React from 'react';
import './index.css';

function Portfolio() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center projects">
                    <div className="card">
                        <img src="../../utils/images/SocialDistance2.png" className="card-img-top cardImg"
                            alt="Screen shot of Social Distance app." />
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Social Distance</h5>
                            <p className="card-text">A fun little app designed to keep you conneted<br />...and disconnected...
                        </p>
                            <div className="d-flex justify-content-around">
                                <a href="https://bbelka.github.io/covidDistractions/" className="btn btn-light">deployed</a>
                                <a href="https://github.com/bbelka/covidDistractions" className="btn btn-light">github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center projects">
                    <div className="card">
                        <img src="../../utils/images/quizPanda.png" className="card-img-top cardImg"
                            alt="Screen shot of Quiz Panda app." />
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Quiz Panda</h5>
                            <p className="card-text">A full-stack quiz generation app, including private profiles, email
                            generation, and storage and retrieval of works in progress.</p>
                            <div className="d-flex justify-content-around">
                                <a href="http://quizpanda.herokuapp.com/" className="btn btn-light">deployed</a>
                                <a href="https://github.com/sali6798/quiz-panda" className="btn btn-light">github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center projects">
                    <div className="card">
                        <img src="../../utils/images/WeatherDash.png" className="card-img-top cardImg"
                            alt="Screen shot of Social Distance app." />
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Accesses data from three different API's to provide pertinent weather
                            infomation for a desired location</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://bbelka.github.io/weatherDashboard/" className="btn btn-light">deployed</a>
                                <a href="https://github.com/bbelka/weatherDashboard" className="btn btn-light">github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center projects">
                    <div className="card">
                        <img src="../../utils/images/NYT.png" className="card-img-top cardImg"
                            alt="Screen shot of New Your Times search app." />
                        <div className="card-body bg-dark">
                            <h5 className="card-title">NY Times Article Search</h5>
                            <p className="card-text">A search app, accessing the NYTimes API to produce your results related to
                            your desired topic</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://bbelka.github.io/NYTimesSearch/" className="btn btn-light">deployed</a>
                                <a href="https://github.com/bbelka/NYTimesSearch" className="btn btn-light">github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;