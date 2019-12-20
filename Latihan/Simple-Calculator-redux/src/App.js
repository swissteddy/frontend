import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {backHandler, changeHandler, submitHandler} from './store/actions/action'

class App extends Component {
  render(){
    const {hasil, angka1, angka2, operator, submit, changeHandler, submitHandler, backHandler} = this.props
    return (
      <div>
        <center>
          {!submit ? (
            <div>
              <input type="number" name="angka1" placeholder = "Angka 1" onChange={(event) => {
                changeHandler(event.target.name,event.target.value);
              }}
              />
              <br/><br/>

              <select name="operator" onChange={(event) =>{
                changeHandler(event.target.name,event.target.value);
              }}>
                <option value="">=Pilih Operator=</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
              <br/><br/>

              <input type="number" name="angka2" placeholder="angka2" onChange={(event) =>{
                changeHandler(event.target.name,event.target.value);
              }}/>
              <br/><br/>
              <input type="submit" onClick={submitHandler} value="Hasil"/>
              </div>
            ):(
              <div>
                <h1>Hasil {angka1} {operator} {angka2} adalah {hasil}</h1>
                <button onClick={backHandler}>Back To Home</button>
            </div>
          )}
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  submit:state.submit,
  hasil:state.hasil,
  angka1:state.angka1,
  angka2:state.angka2,
  operator:state.operator
})

const mapDispatchToProps = (dispatch) => ({
  changeHandler:(name,value) => dispatch(changeHandler(name,value)),
  backHandler:() => dispatch(backHandler()),
  submitHandler:() => dispatch(submitHandler()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       submit: false,
//       hasil:0,
//       angka1:0,
//       angka2:0,
//       operator:""
//     };
//     this.submitHandler = this.submitHandler.bind(this);
//     this.backHandler = this.backHandler.bind(this);
//     this.changeHandler = this.changeHandler.bind(this);
//   }

//   changeHandler(event){
//     let value = event.target.value
//     this.setState({[event.target.name]:value})
//   }

//   submitHandler() {
//     let angka1 = parseInt(this.state.angka1)
//     let angka2 = parseInt(this.state.angka2)
//     let operator = this.state.operator
//     let hasil= 0
//     if(operator==="+"){
//       hasil=angka1 + angka2
//     }else if(operator==="-"){
//       hasil=angka1 - angka2
//     }
//     this.setState({
//       hasil,
//       submit:!this.state.submit
//     })
//   }

//   backHandler(){
//     this.setState({
//       submit:!this.state.submit
//     })
//   }

//   render() {
//     return (
//       <div>
//         <center>
//           {!this.state.submit ? (
//             <div>
//               <input type="number" name="angka1" placeholder="Angka 1" onChange={this.changeHandler}/>
//               <br/><br/>

//               <select name="operator" onChange={this.changeHandler}>
//                 <option value="">=Pilih Operator=</option>
//                 <option value="+">+</option>
//                 <option value="-">-</option>
//                 <option value="*">*</option>
//               </select>
//               <br/><br/>

//               <input type="number" name="angka2" placeholder="Angka 2"  onChange={this.changeHandler}/>
//               <br/><br/>
              
//               <input type="submit" onClick={() => this.submitHandler()} value="Hasil"/>
//             </div>
//           ):(
//             <div>
//               <h1>Hasil {this.state.angka1} {this.state.operator} {this.state.angka2} adalah {this.state.hasil} </h1> 
//               <button onClick={() => this.backHandler()}>Back To Home</button>
//             </div>
//           )}
//         </center>
//       </div>
//     );
//   }
// }

// export default App;
