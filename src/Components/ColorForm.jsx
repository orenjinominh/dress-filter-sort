import React from "react";


class ColorForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }
/* handleChange
 * Sets this.props to value selected from dropdown
 * @param {Event} color selected from ColorForm.js dropdown
*/

  handleChange(event) {
    this.props.onColorChange(event.target.value);
  }


  render() {
    return (
      <form>
        <label>
          Color: 
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