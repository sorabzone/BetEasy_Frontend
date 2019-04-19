import React from 'react';
import styled from 'styled-components';

const eventType = {
    typename: "ALL"
};

const Button = styled.img`
  width: 80px;
  height: 65px;
  background-image: url("./images/${props => props.eventType.typename}.png");
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
`

class RaceFilters extends React.PureComponent {
    render() {
        const { races, handleFilter } = this.props;
        const raceFilters = Array.from(new Set(races.map(n => n.EventTypeDesc)));

        return <FilterRow>
            <div key="ALL" className="column">
                <Button onClick={handleFilter("ALL")} eventType={{ typename: "ALL" }} />
            </div>
            {
                raceFilters.map((type, index) => {
                    return (
                        <div key={`${index}_${type}`} className="column">
                            <Button onClick={handleFilter(type)} eventType={{ typename: type }} />
                        </div>
                    );
                })
            }
        </FilterRow>
    }
}

export default RaceFilters