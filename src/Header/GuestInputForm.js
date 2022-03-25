import React from "react";
import PropTypes from "prop-types";

const GuestInputForm = props =>

<form onSubmit= {this.newGuestSubmitHandler}>
  <input
  type="text" 
  onChange={this.handleNameInput}
  value={this.state.pendingGuest}
  placeholder="Invite Someone" 
  />
  <button type="submit" name="submit" value="submit">Submit</button>
</form>;

GuestInputForm.PropTypes ={
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default GuestInputForm;