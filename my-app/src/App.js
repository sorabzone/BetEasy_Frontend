import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoadRaces } from './actions/raceManager.js';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import RaceList from './components/raceList';
import RaceFilters from './components/filters';
import ErrorBox from './components/errorBox';

const ContainerDiv = styled.div`
  width: 400px;
`;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedType: 'ALL'
        }
    }

    componentWillMount() {
        this.props.LoadRaces();
    }

    componentDidMount() {
        this.timeInterval = setInterval(() => {
            this.props.LoadRaces();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
    }

    handleFilter = (selectedType) => (e) => {
        this.setState({ selectedType });
    }

    render() {
        const { races, errorMessage } = this.props;
        const { selectedType } = this.state;

        return (
            <ContainerDiv className="container">
                {!!errorMessage && <ErrorBox errorMessage={errorMessage} />}
                {races.length > 0 && <RaceFilters races={races} handleFilter={this.handleFilter} />}
                <RaceList races={races} selectedType={selectedType}/>
            </ContainerDiv>
        );
    }
}

function mapStateToProps(state) {
    return {
        races: state.raceManager.races,
        errorMessage: state.raceManager.errorMessage
    }
};

function mapDispatchToProps(dispatch) {
    return { LoadRaces: bindActionCreators(LoadRaces, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
