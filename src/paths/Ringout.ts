/* Generated code */
import GetRingOutStatusResponse from '../definitions/GetRingOutStatusResponse';
import MakeRingOutRequest from '../definitions/MakeRingOutRequest';
import PathSegment from '../PathSegment';

export default class RingOut extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('ring-out', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Makes a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
	 */
	post(body: MakeRingOutRequest): Promise<GetRingOutStatusResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Returns the status of a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
	 */
	get(): Promise<GetRingOutStatusResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 *  <p style='font-style:italic;'></p><p>Cancels the 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
	 */
	delete(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

}
