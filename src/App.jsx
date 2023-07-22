// import react
import { Component } from 'react';
import axios from 'axios';

const LOCATION_IQ_API_KEY = import.meta.env.VITE_LOCATION_IQ_API_KEY;
console.log(LOCATION_IQ_API_KEY);

// create App Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      cityDisplayName: '',
      cityLon: '',
      cityLat: ''
    }
  }

  handleGetNashville = async () => {
    console.log("click");
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${LOCATION_IQ_API_KEY}&q=nashville&format=json`);
    let data = result.data;
    console.log(data);
    this.setState({
      cityDisplayName: data[1].display_name,
      cityLat: data[1].lat,
      cityLon: data[1].lon
    });
    console.log("done");
  }

  handleGetFortLauderdale = async () => {
    console.log("click");
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${LOCATION_IQ_API_KEY}&q=fort%20lauderdale&format=json`)
      let data = result.data;
    console.log(data);
    this.setState({
      cityDisplayName: data[1].display_name,
      cityLat: data[1].lat,
      cityLon: data[1].lon
    });
  }

  handleGetSmyrna = async () => {
    let result = await axios.get("https://us1.locationiq.com/v1/search?key=pk.396757b389f5edb1ab8bee91a1e5741e&q=smyrna&format=json");
    console.log(result)
    let data = result.data;
    this.setState({
      cityDisplayName: data[4].display_name,
      cityLat: data[4].lat,
      cityLon: data[4].lon,
    });
  }

  handleGetAtlanta = async () => {
    console.log('click');
    let result = await axios.get("https://us1.locationiq.com/v1/search?key=${location_IQ_API_KEY}&q=atlanta&format=json")
    console.log(result)
    let data = result.data;
    this.setState({
      cityDisplayName: data[1].display_name,
      cityLat: data[1].lat,
      cityLon: data[1].lon,
    });

  }


  handleGetNewOrleans = async () => {
    console.log('click');
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${LOCATION_IQ_API_KEY}&q=new%20orleans&format=json`)
    console.log(result)
    let data = result.data;
    this.setState({
      cityDisplayName: data[0].display_name,
      cityLat: data[0].lat,
      cityLon: data[0].lon,
    });

  }


  handleGetBirmingham = async () => {
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${LOCATION_IQ_API_KEY}&q=birmingham&format=json`)
    console.log(result)
    let data = result.data;
    this.setState({
      cityDisplayName: data[0].display_name,
      cityLon: data[0].lon,
      cityLat: data[0].lat,
    });
  }











  render() {
    return (
      <>
        <h3> {this.state.cityDisplayName} </h3>
        <p> latitude {this.state.cityLat} </p>
        <p> longitude: {this.state.cityLon} </p>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_IQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=18`} />
        <button onClick={this.handleGetCity} >get City Data</button>


        <button onClick={this.handleGetFortLauderdale}>get Fort Lauderdale Data</button>


        <button onClick={this.handleGetSmyrna}>Get Smyrna</button>


        <button onClick={this.handleGetNewOrleans}>get New Orleans Data</button>


        <button onClick={this.handleGetBirmingham}>get Birmingham Data</button>



        <button onClick={this.handleGetAtlanta} >get Atlanta Data </button>





      </>);
  }
}


// export
export default App;