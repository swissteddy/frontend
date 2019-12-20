import React, {Component} from 'react';
import '../styles/style.css';

const Materi = (props) => {
    return(
        <div className="wrapper">
            <div className="content">
                <div className="gambarpaket">
                    <img className="imageslider" src={require('./1.png')} />
                </div>
                {/* <p className='des'>Deskripsi</p>
                <p className='des'>harga paket</p> */}
                <p className='des'>{props.des}</p>
                <p className='des'>{props.harga}</p>
            </div>
        </div>
    )
}

export default Materi;