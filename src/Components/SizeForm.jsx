import React from "react";

class SizeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }

/* handleChange
 * Sets this.props to value selected from dropdown
 * @param {Event} size selected from SizeForm.js dropdown OR {String} empty string if no size selected
*/

  handleChange(event) {
    if (event.target.value) {
      this.props.onSizeChange(parseInt(event.target.value));
    } else {
      // accounts for no filter aka when value of '' is passed to App state
      this.props.onSizeChange('');
    }
  }


  render() {
    return (
      <form>
        <label>
          Dress Size:
          <select value={this.props.size} onChange={this.handleChange}>
          <option value="">Show All Sizes</option>
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