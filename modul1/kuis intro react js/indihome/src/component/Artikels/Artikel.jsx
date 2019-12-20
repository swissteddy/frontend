import React, { Component } from 'react';
import ArtikelProp from '../state/state';
class Artikel extends Component {
    render() {
        return (
            <div className="artikelwrapper">
                <div className="Appartikel" >
                    <ArtikelProp des="belajar Props" harga="120000" />
                    <ArtikelProp des="belajar State" harga="150000" />
                    <ArtikelProp des="belajar android" harga="220000" />
                </div>

            </div>

        )
    }
}
export default Artikel;
