import React from 'react';
import { dressData } from './dressData';
import './App.css';

import ColorForm from './ColorForm';
import SizeForm from './SizeForm';
import { createPortal } from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dressData,
      color: '',
      size: '', 
      sortByPriceLowToHigh: false
    }

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleReset= this.handleReset.bind(this);


  }

  /* handleColorChange updates state color, updates current state's data array 
  first, it grabs the color selected from dropdown menu
  then, it updates the color state
  then, we asynchronously reset state data to the new data array filtered by color
  that way, we can apply multiple filters :D */

  handleColorChange(color) {
    // this seems to keep separate filters functional by color
    if (this.state.color !== color && this.state.size === '') {
      this.setState({data: dressData});
    }

    this.setState({color: color}, () => {
      let dataToFilter = this.state.data;
      let filtered = dataToFilter.filter((dress) => { return dress.color === color; });
      this.setState({data: filtered}, () => {console.log('filtered by color array here', this.state.data)});


    });
  }
  /* handleSizeChange uses the same functionality to update current size and data on state*/
  handleSizeChange(size) {
    if (this.state.size !== size && this.state.color === '') {
      this.setState({data: dressData});
    }

    this.setState({size: size}, () => {
      let dataToFilter = this.state.data;
      let filtered = dataToFilter.filter((dress) => { return dress.size === size;  });
      this.setState({data: filtered}, () => {console.log('filtered by size array here', this.state.data)});
  
    });
  } 

  handleReset() {
    this.setState({data: dressData, color: '', size: ''});
  }

  render() {
    let renderedData = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
          Queenly Interview Take-Home Exercise: Sorting and Filtering Dresses
        </header>

        <div className="dressFilters">
          <ColorForm color={this.state.color} onColorChange={this.handleColorChange}/>
          <SizeForm size={this.state.size} onSizeChange={this.handleSizeChange}/>
          <button onClick={this.handleReset}>Reset My Search</button>
          {/* <SortByPriceLowToHigh /> */}
        </div>
        <div className="dressSortResults">
          {renderedData.map((dressDataItem) => (
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
