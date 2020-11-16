import React from "react";
import { dressData } from "./assets/dressData";
import "./App.css";

/* IMPORT COMPONENTS */
import ColorForm from "./Components/ColorForm";
import SizeForm from  "./Components/SizeForm";
import SortByPriceLowToHigh from "./Components/SortByPriceLowToHigh";

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
    this.filterAndSort = this.filterAndSort.bind(this);
  }

/* handleColorChange
 * Updates App component state: color
 * @param {String} color selected from ColorForm.js dropdown
*/

  handleColorChange(color) {
    this.setState( {color: color});
  }

/* handleSizeChange
 * Updates App component state: size
 * @param {Number} size selected from SizeForm.js dropdown OR {String} empty string if no size selected
*/

  handleSizeChange(size) {
    this.setState( {size: size});
  }

/* sortByPrice
 * Updates App component state: sortedByPriceLowToHigh
 * @param  {Boolean} From Low to High selected from ColorForm.js dropdown
*/

  sortByPrice(sorted) {
    this.setState({sortedByPriceLowToHigh: sorted});
  }

/* filterAndSort
 * filters data by color and size
 * sorts data from lowest to highest price
 * @param {Array} Array of data
 * @return {Array} filtered and/or sorted array of object representing one dress
*/

  filterAndSort(dresses) {
    if (this.state.color !== '') {
      dresses = dresses.filter((dress) => {return dress['color'] === this.state.color});
    }

    if (this.state.size !== '') {
      dresses = dresses.filter((dress) => {return dress['size'] === this.state.size});
    }

    if (this.state.sortedByPriceLowToHigh !== false) {
      dresses = dresses.sort((a, b) => {return a.price - b.price});
    }
  }

  render() {
    let dresses = [...this.state.data];
    this.filterAndSort(dresses);

    return (
      <div className="App">
        <header className="App-header">
          Queenly
        </header>
        <div className="dressFilters">
          <ColorForm color={this.state.color} onColorChange={this.handleColorChange}/>
          <SizeForm size={this.state.size} onSizeChange={this.handleSizeChange}/>
          <SortByPriceLowToHigh sorted={this.state.sortedByPriceLowToHigh} sortedByPrice={this.sortByPrice}/>
        </div>
        <div className="dressSortResults">
          {dresses.length > 0 ? dresses.map((dressDataItem) => (
            <div className="dressGridItem">
              <div className="dressGridImgContainer">
                <img src={dressDataItem['photo_url']} width={150}/>
              </div>
              <div>${dressDataItem['price']}</div>
              <div>Size {dressDataItem['size']}</div>
              <div>Color: {dressDataItem['color']}</div>
            </div>
          )) : <div>Out of stock, please try another color or size.</div>}
        </div>
      </div>
    );
  }

}

export default App;
