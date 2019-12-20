// import React, {Component} from 'react';

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       value:0,
//     }
//   }

//   incrementAction = () => {
//     this.setState({
//       value:this.state.value+1
//     })
//   }

//   decreaseAction=() => {
//     this.setState({
//       value:this.state.value-1
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.value}</h1>
//         <button onClick={this.incrementAction}>increment</button>
//         <button onClick={this.decreaseAction}>decrease</button>
//       </div>
//     );
//   }
// }

// export default App;

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import { decreaseAction, increaseAction } from './store/actions/action';

// class App extends Component {
//   render(){
//     const {value, decreaseAction, increaseAction} = this.props;
//     return (
//       <div>
//         <h1>{value}</h1>
//         <button onClick={increaseAction}>increment</button>
//         <button onClick={decreaseAction}>decrease</button>
//       </div>
//     );
//   }
// }
  
//   const mapStateToProps = (state) => ({
//     value: state.value,
//   });

//   const mapDispatchToProps = (dispatch)=> ({
//     increaseAction:() => dispatch(increaseAction()),
//     decreaseAction:() => dispatch(decreaseAction()),
//   });


// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React from 'react'
import {Route} from 'react-router-dom';

import Navbar from "./navbar";
import Home from './component/home'
import Users from './component/user'
import COntact from './component/contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Simple React Router Redux</h1>
        <Navbar context={this.context} />
        <hr/>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={COntact} />
      </div>
    )
  }
}

export default App;