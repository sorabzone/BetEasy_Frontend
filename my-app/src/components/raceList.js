import React from 'react';

class RaceList extends React.PureComponent {
    getTime(AdvertisedStartTime) {
        return new Date(AdvertisedStartTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    render() {
        const { races, selectedType } = this.props;
        
        let filterRaces = races;
        if (selectedType !== 'ALL') {
            filterRaces = races.filter(race =>
                race.EventTypeDesc === selectedType
            )
        }

        return <div>
            {
                filterRaces.map((race, index) => {
                    return (
                        <div key={race.EventID}>
                            <div className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{race.Venue.Venue}</h5>
                                    <small>{this.getTime(race.AdvertisedStartTime)}</small>
                                </div>
                                <small>{race.EventName}</small>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    }
}

export default RaceList