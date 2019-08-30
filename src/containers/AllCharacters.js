import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CharactersList from '../components/CharactersList';
import { fetchCharacters } from '../actions/characterActions';
import { getCharacters } from '../selectors/getCharacters';

class AllCharacters extends Component {

    static propTypes = {
        fetch: PropTypes.func.isRequired,
        characters: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        const { characters } = this.props;
        return <CharactersList characters={characters} />;
    }

}

const mapStateToProps = state => ({
    characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
    fetch() {
        dispatch(fetchCharacters());
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(AllCharacters);
