import React from 'react';

class SortByPriceLowToHigh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sortByPriceLowToHigh: false};

    this.handleChange = this.handleChange.bind(this);
    this.sortByPriceLowToHigh = this.SortByPriceLowToHigh(this);

  }

  sortByPriceLowToHigh(data) {
    let sorted = data.sort((a,b) => (a - b));
    return sorted; 
  }

  handleChange(event) {
    this.sortByPriceLowToHigh(this.props.data);
    this.setState({sortByPriceLowToHigh: true});
  }


  render() {
    return (
      <form>
        <label>
          Sort By Pricing:
          <select value={this.state.sortByPriceLowToHigh} onChange={this.handleChange}>
            <option value="true">From Low to High</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SortByPriceLowToHigh; 