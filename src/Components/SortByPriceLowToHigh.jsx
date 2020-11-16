import React from "react";

class SortByPriceLowToHigh extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

/* handleChange
 * Sets this.props to value selected from dropdown
 * @param {Event} sort option from SortByPriceLowToHigh dropdown
*/

  handleChange(event) {
    this.props.sortedByPrice(event.target.value);
  }


  render() {
    return (
      <form>
        <label>
          Sort By Pricing:
          <select value={this.props.sortedByPriceLowToHigh} onChange={this.handleChange}>
            <option value="">Show Sort Options</option>
            <option value="true">From Low to High</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SortByPriceLowToHigh; 