import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";

class PilotsList extends Component {
	render() {
		const { pilots } = this.props;

		const pilotRows = pilots.map(pilot => {
			return <PilotsListRow pilot={pilot} key={pilot.name} />;
		});

		return (
			<Table celled>
				<PilotsListHeader />
				<Table.Body>{pilotRows}</Table.Body>
			</Table>
		);
	}
}

export default PilotsList;
