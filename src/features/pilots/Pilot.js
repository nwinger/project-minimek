import { Model } from "redux-orm";

class Pilot extends Model {
	static modelName = "Pilot";

	static parse(pilotData) {
		// We could do useful stuff in here with relations,
		// but since we have no relations yet, all we need
		// to do is pass the pilot data on to create()
		// Note that in a static class method, `this` is the
		// class itself, not an instance
		return this.create(pilotData);
	}
}

export default Pilot;
