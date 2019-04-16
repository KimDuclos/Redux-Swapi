import React from "react";
import { connect } from "react-redux";

import CharacterList from "../components/CharacterList";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Fetching Star Wars Character Data....</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
   mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChars
  }
)(CharacterListView);
