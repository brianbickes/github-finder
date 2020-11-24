import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

/*On Submit is being used as an arrow function with 'e' being passed in and using preventDefault. Console.log confirms logging of text is functional */ 
  onSubmit = e => {
      e.preventDefault(); 
      console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='Submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
