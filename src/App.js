import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component{


  constructor(props){
      super(props);
      this.state={
        name:"IT",
        num1:0,
        num2:0,
        num3:0,
        turnlighton:false,
        num4:0
      }
  }

  handleClick=()=>{
    console.log(this.state.name)
    this.setState({name:"CSE"})
    console.log(this.state.name)
  }

  addtwonos=()=>{
    let n1=this.state.num1;
    let n2=this.state.num2;
    console.log("N1",n1,"N2",n2)
    let n3=parseInt(n1)+parseInt(n2);
    console.log("N3",n3)
    this.setState({num3:n3})
  }

  updatenum1=(event)=>{

    console.log("Event",event)
    this.state.num1=event.target.value
    console.log("Num1",this.state.num1)
  }

  updatenum2=(event)=>{

    console.log("Event",event)
    this.state.num2=event.target.value
    console.log("Num2",this.state.num2)
  }

  turnon=()=>{
    let n=this.state.num4
    if(n%2==0){
    console.log(this.state.turnlighton)
    this.setState({turnlighton:true})
    }
    else{
      console.log(this.state.turnlighton)
      this.setState({turnlighton:false})
    }
    n=n+1
    this.state.num4=n
  }


  render(){

    return (
      <div>
      <button onClick={this.handleClick}>Click me</button>
      <h1>Hello {this.state.name}</h1>

      <label>Num1:</label><input type="text" onChange={this.updatenum1}/>
      <label>Num2:</label><input type="text" onChange={this.updatenum2}/>
      <br/>
      <button onClick={this.addtwonos}>Calculate</button>
      <h1>The sum of two numbers {this.state.num3}</h1>
<br/>
      {this.state.turnlighton?
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sfplPSVcBBGcuoTT58UfVwHaHa%26pid%3DApi%26h%3D160&f=1"/>:
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DHmU7OCheB8l-N-fv61yZgHaIq%26pid%3DApi%26h%3D160&f=1" />
}

<button onClick={this.turnon}>SWITCH</button>
      </div>



    )
  }


}

export default App;
