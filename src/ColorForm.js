import React from 'react';


class ColorForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange(event) {
    // this.setState({color: event.target.value}, () => {console.log('dress color chosen:', this.state)});
    this.props.onColorChange(event.target.value);
  }


  render() {
    return (
      <form>
        <label>
          Pick your favorite color: 
          <select value={this.props.color} onChange={this.handleChange}>
            <option value="">Show All Colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
          </select>
        </label>
      </form>
    );
  }
}


export default ColorForm; 