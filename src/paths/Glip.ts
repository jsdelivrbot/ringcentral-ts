/* Generated code */
import PathSegment from '../PathSegment';
import Companies from './Companies';
import Files from './Files';
import Groups from './Groups';
import Persons from './Persons';
import Posts from './Posts';
import Profile from './Profile';

export default class Glip extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('glip', id, prv, service);
	}

/**
	 * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
	 */	companies(id?: string) {
		return new Companies(this, id);
	}

/**
	 * Internal identifier of a group to be edited
	 */	groups(id?: string) {
		return new Groups(this, id);
	}

/**
	 * Internal identifier of a user to be returned, the maximum number of IDs is 30
	 */	persons(id?: string) {
		return new Persons(this, id);
	}

	posts(id?: string) {
		return new Posts(this, id);
	}

/**
	 * Internal identifier of file.
	 */	files(id?: string) {
		return new Files(this, id);
	}

	profile(id?: string) {
		return new Profile(this, id);
	}
}