import React from 'react';

class SortByPriceLowToHigh extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    console.log('event target here', event.target.value);
    this.props.sortedByPrice(event.target.value);

  }


  render() {
    console.log(this.props.sortedByPriceLowToHigh);
    return (
      <form>
        <label>
          Sort By Pricing:
          <select value={this.props.sortedByPriceLowToHigh} onChange={this.handleChange}>
            <option value="">Sort Price?</option>
            <option value="true">From Low to High</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SortByPriceLowToHigh; 