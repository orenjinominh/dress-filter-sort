import React from 'react';

class SizeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {size: 0};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({size: parseInt(event.target.value)});
  }


  render() {
    return (
      <form>
        <label>
          What's Your Dress Size?  
          <select value={this.state.color} onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SizeForm; 