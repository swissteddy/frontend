import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      angka1:0,
      angka2:0,
      hasil:0,
      operator:"",
      submit:false
    }
    // this.update1=this.update1.bind(this)
    // this.update2=this.update2.bind(this)
    // this.operate=this.operate.bind(this)
    this.update=this.update.bind(this)
  }

  back = () => {
    this.setState({
      submit:false
  });
  }

  update(event){
    // alert(event.target.value);
    this.setState({[event.target.name]:event.target.value});
  }
  result =() => {
    // console.log(this.state);
  let operator = this.state.operator
  let angka1 = parseInt(this.state.angka1)
  let angka2 = parseInt(this.state.angka2)
  let hasil=0
  if(operator==="+"){
    hasil=angka1+angka2
  }
  else if(operator==="-"){
    hasil=angka1-angka2
  }
  else {
    hasil=angka1*angka2
  }
    this.setState({
      hasil, submit:true
    });
    // alert(hasil)
  }

//  update1(event){
//    alert(event.target.value);
//    this.setState({angka1:event.target.value});
   
//  }
//  update2(event){
//    alert(event.target.value);
//    this.setState({angka2:event.target.value});
//  }
//  operate(event){
//    alert(event.target.value);
//    this.setState({operate:event.target.value});
//  }

  render() {
    return (
      <div>
        <center>
        {!this.state.submit ? (
          <div>
          <input type="number" placeholder="Angka1" name="angka1" onChange={this.update}/>
          <br/><br/>

          <select name="operator" onChange={this.update}>
            <option>=Pilih Operator=</option>
            <option>+</option>
            <option>-</option>
            <option>*</option>
          </select>
          <br/><br/>

          <input type="number" placeholder="Angka2" name="angka2" onChange={this.update}/>
          <br/><br/>

          <button onClick ={this.result}>Submit</button>
          </div>
        ):(<div>
          <h1>Hasil dari {this.state.angka1} {this.state.operator} {this.state.angka2} adalah {this.state.hasil} </h1>
          <button onClick ={this.back}>Back</button>
        </div>)}
        </center>
      </div>
    );
  }
}

export default App;