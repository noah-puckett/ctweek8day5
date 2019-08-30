import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';
import { getQuote, getCharacterName, getCharacterImage, getLoading } from '../../selectors/simpsonsSelectors';
import { fetchQuote } from '../../actions/simpsonsActions';

class SimpsonsQuote extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        fetch: PropTypes.func.isRequired,
        quote: PropTypes.string.isRequired,
        characterName: PropTypes.string.isRequired,
        characterImage: PropTypes.string.isRequired,
    }

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        const { quote, characterName, characterImage, fetch, loading } = this.props;
        if(loading) return <h1>WAIT A SECOND, JEEZ</h1>;
        return (<>
        <Quote quote={quote} characterName={characterName} characterImage={characterImage} />
        <Load onClick={fetch}/>
        </>);
    }

}

const mapStateToProps = state => ({
    loading: getLoading(state),
    quote: getQuote(state),
    characterName: getCharacterName(state),
    characterImage: getCharacterImage(state)
});

const mpaDispatchToProps = dispatch => ({
    fetch() {
        dispatch(fetchQuote());
    }
});

export default connect(
    mapStateToProps, mpaDispatchToProps)(SimpsonsQuote);
