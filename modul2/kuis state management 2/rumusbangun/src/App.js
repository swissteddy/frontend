import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      angka1:0,
      angka2:0,
      hasil:0,
      rumus:1,
      submit:false
    }
    this.update=this.update.bind(this)
    this.button=this.button.bind(this)
    this.persegi=this.persegi.bind(this)
    this.persegiPanjang=this.persegiPanjang.bind(this)
    this.lingkaran=this.lingkaran.bind(this)
  } 
  update(event){
    this.setState({[event.target.name]:event.target.value})    
  }

  button(name,val){
    this.setState({[name]:val})    
  }
  result = () => {
    let angka1 = parseInt(this.state.angka1)
    let angka2 = parseInt(this.state.angka2)
    let hasil = 0
    let rumus = this.state.rumus

      if(rumus === 1) {
        hasil=angka1*angka1
      }else if(rumus === 2) {
        hasil=angka1*angka2
      }else if(rumus === 3) {
      hasil= 3.14 * angka1 * angka1
      }
 
    this.setState({
      hasil,submit:true
    });}

    tampil() {
      if(this.state.rumus === 1){
        return (
          <div>
          <br/><br/>
              <input name="angka1" type="number" placeholder="Masukan Sisi " onChange={this.update}/><br/><br/>
              <button onClick={this.result}>Submit</button>
          </div>
        )
      }else if (this.state.rumus === 2){
          return(
          <div>
          <br/> <br/>
            <input name="angka1" type="number" placeholder="Masukan Panjang" onChange={this.update}/><br/><br/>
            <input name="angka2" type="number" placeholder="Masukan Lebar" onChange={this.update}/><br/><br/>
            <button onClick={this.result}>Submit</button>
          </div>
          )
      }else if (this.state.rumus === 3){
          return(
          <div>
          <br/><br/>
              <input name="angka1" type="number" placeholder="Masukan Jari-Jari" onChange={this.update}/><br/><br/>
              <button onClick={this.result}>Submit</button>
          </div>
    )}}

persegi = () => {
    this.setState({rumus: 1});
  }

persegiPanjang = () => {
    this.setState({rumus: 2});
  } 
lingkaran = () => {
    this.setState({rumus: 3});
  }
back = () => {
    this.setState({
     submit:false,angka1:0,angka2:0
   });  
}
  render(){
    return(
      <div>
        <center>
        {!this.state.submit ? (
        <div>
          <button onClick = {() => this.button('rumus',1)}>Persegi</button>
          <button onClick={() => this.button('rumus',2)}>Persegi Panjang</button>
          <button onClick={() => this.button('rumus',3)}>Lingkaran</button><br/>
         {this.tampil()}
          </div>
            ):(
            <div>
              <h1>luas = {this.state.hasil}</h1>
              <button onClick={this.back}>Back</button>
          </div>)}
        </center>
      </div>
    )}}
export default App;