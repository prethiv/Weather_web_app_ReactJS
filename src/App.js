import logo from './logo.svg';
import React from 'react';
import './App.css';
import data from './Cities.json';

var weather = require('openweather-apis');

class App extends React.Component{


  constructor(props){
      super(props);
      this.state={
        name:"IT",
        num1:0,
        num2:0,
        num3:0,
        turnlighton:false,
        num4:0,
        marksheet:[[90,90,90,270],[80,80,73,233],[70,70,60,200]],
        names:['Ajay','Ajith','Prethiv'],
        countries:[],
        cities:[],
        humidity:"",
        temp:"",
        pressure:"",
        rain:"",
        url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I-XMqXUBF6jKxrO712-V1QHaI3%26pid%3DApi%26h%3D160&f=1"
      }
      weather.setLang('en');
      weather.setCity('Chennai');
      weather.setUnits('metric');
      weather.setAPPID('ac390e28b7f4564b9490fee92d000c74');
      let d=[]
      for(let i in data){
        d.push(i)
      }
      this.state.countries=d
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

  getChennaiWeather=()=>{
    weather.setCity('Fairplay');
    weather.getSmartJSON((err,data)=>{
      if(err){
          console.log("Error occured while fetching smart json")
          return
      }
      console.log("Smart Data received is ",data)
      let desc=data.description;

      console.log(desc)

      if(desc==="haze"){
         // this.setState({url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DyqQBtob7rlJH4_VNtkXNAHaEo%26pid%3DApi&f=1"})
      }

          })

  }

  renderCity=(event)=>{

    let cou=event.target.value;
    console.log(cou)

    let ans=[]

    for(let i in data){
      if (i===cou){
        ans=data[i]
      }
    }

    this.setState({cities:ans})

  }

  displayweather=(event)=>{

    let cityname=event.target.value;

    weather.setCity(cityname);
    weather.getSmartJSON((err,data)=>{
      if(err){
          console.log("Error occured while fetching smart json")
          return
      }
      console.log("Smart Data received is ",data)
      let desc=data.description;

      this.setState({humidity:data.humidity})
      this.setState({temp:data.temp})
      this.setState({pressure:data.pressure})
      this.setState({rain:data.rain})
      console.log(desc)

      if(desc==="scattered clouds"){
        this.setState({url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hEWw4w794ZYjyT50Ry0-dwHaEL%26pid%3DApi%26h%3D160&f=1"})
         // this.setState({url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DyqQBtob7rlJH4_VNtkXNAHaEo%26pid%3DApi&f=1"})
      }



          })


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
    {this.state.names.map(name=>(
        <h1>{name}</h1>
    ))}

    {this.state.marksheet.map(student=>(
      <h1>{
      student.map(subject=>(
          <label>{subject+" "}</label>
      ))}
      </h1>
    ))}

      <button onClick={this.getChennaiWeather}>Check Chennai Weather</button>

<br/><br/>
      <select onChange={this.renderCity}>
              {this.state.countries.map(items=>(
                        <option>{items}</option>
                    ))}
                </select>
                <label>      </label>
      <select onChange={this.displayweather} >

      {this.state.cities.map(items=>(
                        <option>{items}</option>
                    ))}
      </select>

<br/>

<img src={this.state.url}/>

<li>
<h1>Humidity {this.state.humidity}</h1>
<h1>Pressure {this.state.pressure}</h1>
<h1>Temp {this.state.temp}</h1>
<h1>Rain {this.state.rain}</h1>
</li>

<br/>

      </div>




    )
  }


}

export default App;
