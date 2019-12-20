import React, { Component } from 'react';
import './App.css';

import { update, calculate, switchTab } from "./store/actions/action";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    angka1: state.angka1,
    angka2: state.angka2,
    hasil: state.hasil,
    type: state.type
});

const mapDispatchToProps = (dispatch) => ({
  update: (name, value) => dispatch(update(name, value)),
  calculate: () => dispatch(calculate()),
  switchTab: (name, value) => dispatch(switchTab(name, value))
});

class App extends Component {
  render() {
    const {angka1, angka2, hasil, type, update, calculate, switchTab} = this.props
    return (
      <div className="App">
        <center>
          <button onClick={() => {switchTab('type','persegi panjang')}}>Persegi Panjang</button>
          <button onClick={() => {switchTab('type','persegi')}}>Persegi</button>
          <button onClick={() => {switchTab('type','lingkaran')}}>Lingkaran</button>

          <div>
          {type === "persegi panjang" &&
            <div>
              <input type="number" name="angka1" placeholder="panjang" onChange={(event) => {update(event.target.name, event.target.value)}} /><br />
              <input type="number" name="angka2" placeholder="lebar" onChange={(event) => {update(event.target.name, event.target.value)}} /><br />
              <button onClick={calculate}>Calculate</button>
              <h1>Luas {type} adalah {hasil}</h1>
            </div>}
          {type === "persegi" &&
            <div>
              <input type="number" name="angka1" placeholder="sisi" onChange={(event) => {update(event.target.name, event.target.value)}} /><br />
              <button onClick={calculate}>Calculate</button>
              <h1>Luas {type} adalah {hasil}</h1>
            </div>}
          {type === "lingkaran" &&
            <div>
              <input type="number" name="angka1" placeholder="diameter" onChange={(event) => {update(event.target.name, event.target.value)}} /><br />
              <button onClick={calculate}>Calculate</button>
              <h1>Luas {type} adalah {hasil}</h1>
            </div>}
          </div>
        </center>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
