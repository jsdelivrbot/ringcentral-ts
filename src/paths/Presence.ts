/* Generated code */
import PresenceInfo from '../definitions/PresenceInfo';
import PathSegment from '../PathSegment';

export default class Presence extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('presence', id, prv, service);
	}

	/**
	 *  Get Extension Presence
	 */
	get(): Promise<PresenceInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
