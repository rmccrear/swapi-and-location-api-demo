// import react
import {Component} from 'react';
import axios from 'axios';

// create App Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      nashvilleDisplayName: '',
      nashvilleLon: '',
      nashvilleLat: ''
    }
  }
  
  handleGetNashville = async () =>{
    console.log("click");
    let result = await axios.get("https://us1.locationiq.com/v1/search?key=pk.396757b389f5edb1ab8bee91a1e5741e&q=nashville&format=json");
    let data = result.data;
    console.log(result.data[0].lat);
    this.setState({
      nashvilleDisplayName: data[0].display_name,
      nashvilleLat: result.data[0].lat,
      nashvilleLon: result.data[0].lon
    })
    console.log("done");
  }

  render() {
    return (
      <>
        <h3> { this.state.nashvilleDisplayName } </h3>
        <p> latitude { this.state.nashvilleLat } </p>
        <p> longitude: { this.state.nashvilleLon } </p>
        <button onClick={this.handleGetNashville} >get Nashville Data</button>
      </>);
    }
}


// export
export default App;