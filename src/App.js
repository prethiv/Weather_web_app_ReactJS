import logo from "./logo.svg";
import React from "react";
import "./App.css";
import data from "./Cities.json";
import "bootstrap/dist/css/bootstrap.css";

var weather = require("openweather-apis");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "IT",
      num1: 0,
      num2: 0,
      num3: 0,
      turnlighton: false,
      num4: 0,
      marksheet: [
        [90, 90, 90, 270],
        [80, 80, 73, 233],
        [70, 70, 60, 200],
      ],
      names: ["Ajay", "Ajith", "Prethiv"],
      countries: [],
      cities: [],
      humidity: "",
      temp: "",
      pressure: "",
      rain: "",
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F8f342f30971807.563b2b138deaa.gif&f=1&nofb=1",
      countrydropdownVisibility: true,
    };
    this.auxilary = {
      dropdown: false,
    };
    weather.setLang("en");
    weather.setCity("Chennai");
    weather.setUnits("metric");
    weather.setAPPID("ac390e28b7f4564b9490fee92d000c74");
    let d = [];
    for (let i in data) {
      d.push(i);
    }
    this.state.countries = d;
  }

  handleClick = () => {
    console.log(this.state.name);
    this.setState({ name: "CSE" });
    console.log(this.state.name);
  };

  addtwonos = () => {
    let n1 = this.state.num1;
    let n2 = this.state.num2;
    console.log("N1", n1, "N2", n2);
    let n3 = parseInt(n1) + parseInt(n2);
    console.log("N3", n3);
    this.setState({ num3: n3 });
  };

  updatenum1 = (event) => {
    console.log("Event", event);
    this.state.num1 = event.target.value;
    console.log("Num1", this.state.num1);
  };

  updatenum2 = (event) => {
    console.log("Event", event);
    this.state.num2 = event.target.value;
    console.log("Num2", this.state.num2);
  };

  turnon = () => {
    let n = this.state.num4;
    if (n % 2 == 0) {
      console.log(this.state.turnlighton);
      this.setState({ turnlighton: true });
    } else {
      console.log(this.state.turnlighton);
      this.setState({ turnlighton: false });
    }
    n = n + 1;
    this.state.num4 = n;
  };

  getChennaiWeather = () => {
    weather.setCity("Fairplay");
    weather.getSmartJSON((err, data) => {
      if (err) {
        console.log("Error occured while fetching smart json");
        return;
      }
      console.log("Smart Data received is ", data);
      let desc = data.description;

      console.log(desc);

      if (desc === "haze") {
        // this.setState({url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DyqQBtob7rlJH4_VNtkXNAHaEo%26pid%3DApi&f=1"})
      }
    });
  };

  renderCity = (event) => {
    let cou = event.target.value;

    console.log(event);
    // console.log(JSON.stringify(cou)+"L")
    // console.log(cou+"L")
    // console.log(cou.toString()+'l')

    // let ans = [];

    // // for (let i in data) {
    // //   // console.log('"'+i+'"',cou)
    // //   // console.log(typeof(i),typeof(cou))
    // //   if ('"'+String(i)+'"' === cou.toString()) {
    // //     ans = data[i];
    // //   }
    // // }

    // console.log(ans)
    console.log(data[cou]);
    this.setState({ cities: data[cou] });
  };

  displayweather = (event) => {
    let cityname = event.target.value;

    weather.setCity(cityname);
    weather.getSmartJSON((err, data) => {
      if (err) {
        console.log("Error occured while fetching smart json");
        return;
      }
      console.log("Smart Data received is ", data);
      let desc = data.description;

      this.setState({ humidity: data.humidity });
      this.setState({ temp: data.temp });
      this.setState({ pressure: data.pressure });
      this.setState({ rain: data.rain });
      console.log(desc);
      // var desc = ["clear sky", "overcast clouds", "few clouds", "light snow"];
      var tags = [
        {
          name: "scattered clouds",
          url:
            "https://media1.giphy.com/media/PIh4laWJlz9bq/200w.webp?cid=ecf05e47cl4n43uxkfolmzhg7is7x5atv68rqqanid908fj5&rid=200w.webp",
        },
        {
          name: "clear sky",
          url:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1d25e530971807.563b2b14208f0.gif",
        },
        {
          name: "overcast clouds",
          url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ljrvmBWNLDneQk1QUA_WJAHaEK%26pid%3DApi&f=1",
        },
        {
          name: "light snow",
          url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FbeiDTtF9I-rMNiwTxFtOgHaGK%26pid%3DApi&f=1",
        },
        {
          name: "default",
          url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F8f342f30971807.563b2b138deaa.gif&f=1&nofb=1",
        },
      ];

      if (desc === "scattered clouds") {
        this.setState({
          url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hEWw4w794ZYjyT50Ry0-dwHaEL%26pid%3DApi%26h%3D160&f=1",
        });
        // this.setState({url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DyqQBtob7rlJH4_VNtkXNAHaEo%26pid%3DApi&f=1"})
      }
      else if(desc==="clear sky"){
        this.setState({url:tags[1].url})
      }
      else if(desc==="overcast clouds"){
        this.setState({url:tags[2].url})
      }
      else if(desc==="light snow"){
        this.setState({url:tags[3].url})
      }
       else {
        this.setState({ url: tags[4].url });
      }
    });
  };

  dropDownCountry = () => {
    console.log("Inside dropdown");
    if (this.auxilary.dropdown) {
      this.setState({ countrydropdownVisibility: false });
      this.auxilary.dropdown = false;
    } else {
      this.setState({ countrydropdownVisibility: true });
      this.auxilary.dropdown = true;
    }
  };

  render() {
    var space = "         ";

    return (
      <div className="container-fluid">
        {/*  <button onClick={this.handleClick}>Click me</button>
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

      <br/><br/>*/}
        {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}

        <div style={{ margin: 75 }} className="bg bg-light">
          <select
            onChange={this.renderCity}
            className="btn btn-warning"
            style={{ marginLeft: 50, fontFamily: "century gothic" }}
          >
            {this.state.countries.map((items) => (
              <option className="badge badge-light bg-light">{items}</option>
            ))}
          </select>

          <select
            onChange={this.displayweather}
            className="btn btn-info"
            style={{ marginLeft: 50, fontFamily: "century gothic" }}
          >
            {this.state.cities.map((items) => (
              <option className="badge badge-light bg-light">{items}</option>
            ))}
          </select>

          <br />
          <br />

          <img
            height="100"
            width="100"
            className="rounded"
            src={this.state.url}
            style={{ margin: 50 }}
          />

          <ul
            style={{
              fontSize: 30,
              listStyleType: null,
              fontFamily: "century gothic",
              fontWeight: "bold",
            }}
          >
            <h3>
              Humidity{" "}
              <label className="text-primary"> {this.state.humidity}</label>
            </h3>
            <h3>
              Pressure{" "}
              <label className="text-success">{this.state.pressure}</label>
            </h3>
            <h3>
              Temp <label className="text-danger"> {this.state.temp}</label>
            </h3>
            <h3>
              Rain <label className="text-warning">{this.state.rain}</label>
            </h3>
          </ul>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
