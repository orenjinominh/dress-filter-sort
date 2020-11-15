import React from 'react';
import { dressData } from './dressData';
import './App.css';

import ColorForm from './ColorForm';
import SizeForm from './SizeForm';
import SortByPriceLowToHigh from './SortByPriceLowToHigh';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dressData,
      color: '',
      size: '', 
      sortedByPriceLowToHigh: false
    }

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
  }


  handleColorChange(color) {
    this.setState( {color: color}, () => {console.log('dresses filtered by this color:', this.state.color)});
  }

  handleSizeChange(size) {
    this.setState( {size: size},  () => {console.log('dresses filtered by this size:', this.state.size)});
  } 

  sortByPrice(sorted) {
    this.setState({sortedByPriceLowToHigh: sorted}, () => {console.log('sort by ascending order on', this.state.sortByPriceLowToHigh)}); 
  }


  render() {
    // by slicing state, we preserve the state.data to be re-filtered without any resets 
    let dresses = this.state.data.slice();
    // filters by size and color, and sort by price ascending (low to high)
    if (this.state.color !== '') {
      dresses = dresses.filter((dress) => {return dress['color'] === this.state.color});
    }

    if (this.state.size !== '') {
      dresses = dresses.filter((dress) => {return dress['size'] === this.state.size})
    }

    if (this.state.sortedByPriceLowToHigh !== false) {
      dresses = dresses.sort((a, b) => {return a.price - b.price});
    }


    return (
      <div className="App">
        <header className="App-header">
          Queenly Interview Take-Home Exercise: Sorting and Filtering Dresses
        </header>

        <div className="dressFilters">
          <ColorForm color={this.state.color} onColorChange={this.handleColorChange}/>
          <SizeForm size={this.state.size} onSizeChange={this.handleSizeChange}/>
          <SortByPriceLowToHigh sorted={this.state.sortedByPriceLowToHigh} sortedByPrice={this.sortByPrice}/>
        </div>
        <div className="dressSortResults">
          {dresses.length ? dresses.map((dressDataItem) => (
            <div className="dressGridItem">
              <div className="dressGridImgContainer">
                <img src={dressDataItem['photo_url']} width={150}/>
              </div>
              <div>${dressDataItem['price']}</div>
              <div>Size {dressDataItem['size']}</div>
              <div>Color: {dressDataItem['color']}</div>
            </div>
          )) : <div>Sorry, we're out of stock in that size and color! Please search again.</div>}
        </div>
      </div>
    );
  }

}

export default App;
