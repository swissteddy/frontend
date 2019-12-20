import React, {Component, Fragment} from 'react';

class Home extends Component{
    render(){
        return(
            <Fragment className="contentHome">
                <div className="slider">
                    <div className="slidercontent">
                        <img className="imageslider" src={require('../../images/desktop.jpg')}/>
                    </div>
                </div>
                <div className="content">
                    <h2 className="datacontent">Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</h2>
                        <div className="content-gambar">
                        <div className="image">
                        <img className="imageslider" src={require('../../images/hooq-home.jpg')}/>
                        </div>
                        <div className="image">
                        <img className="imageslider" src={require('../../images/iflix-home.jpg')}/>
                        </div>
                        <div className="image">
                        <img className="imageslider" src={require('../../images/catchplay-home.jpg')}/>
                        </div>
                        <div className="image">
                        <img className="imageslider" src={require('../../images/edukids-home.jpg')}/>
                        </div>
                        </div>
                        <div className="content-gambar2">
                            <div className="contentyoutube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/mqv5uAYtF6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="contentmap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63457.90841401869!2d106.83248070356679!3d-6.248009684043672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f158843078e3%3A0xce64d3c98a332ab0!2sThe%20Telkom%20Hub!5e0!3m2!1sid!2sid!4v1571142435264!5m2!1sid!2sid" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>
                </div>
            </Fragment>
            // <div>
                // ini Home
            // </div>
        )
    }
}

export default Home;