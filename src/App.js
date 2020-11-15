import React from 'react';
import { dressData } from './dressData';
import './App.css';

import ColorForm from './ColorForm';
import SizeForm from './SizeForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dressData,
      color: '',
      size: 14, 
      sortByPriceLowToHigh: false
    }

    this.handleColorChange = this.handleColorChange.bind(this);
    // this.handleSizeChange = this.handleSizeChange.bind(this);


  }

  /* handleColorChange updates state color, updates current state's data array 
  first, it grabs the color selected from dropdown menu
  then, it updates the color state
  then, we asynchronously reset state data to the new data array filtered by color
  that way, we can apply multiple filters :D */

  handleColorChange(color) {
    this.setState({color: color}, () => {
      let filtered = dressData.filter((dress) => { return dress.color === color; });
      this.setState({data: filtered});
    });
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          Queenly Interview Take-Home Exercise: Sorting and Filtering Dresses
        </header>

        <div className="dressFilters">
          Put your filter/sort buttons and dropdown menus here
          <ColorForm color={this.state.color} onColorChange={this.handleColorChange}/>
          <SizeForm />
          {/* <SortByPriceLowToHigh /> */}
        </div>
        <div className="dressSortResults">
          {this.state.data.map((dressDataItem) => (
            <div className="dressGridItem">
              <div className="dressGridImgContainer">
                <img src={dressDataItem['photo_url']} width={150}/>
              </div>
              <div>${dressDataItem['price']}</div>
              <div>Size {dressDataItem['size']}</div>
              <div>Color: {dressDataItem['color']}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default App;
