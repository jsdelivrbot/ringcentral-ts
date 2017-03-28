import restClient, { SERVER_PRODUCTION, SERVER_SANDBOX, API_VERSION, ClientOptions } from './RestClient';
import { TokenStore } from './Token';
import Account from './paths/Account';
import ClientInfo from './paths/ClientInfo';
import Dictionary from './paths/Dictionary';
import NumberParser from './paths/NumberParser';
import NumberPool from './paths/Subscription';
import Subscription from './paths/Subscription';
import Subscription2 from './Subscription';

export default class RingCentral {
	rest: restClient;

	constructor(opts: ClientOptions) {
		this.rest = new restClient(opts);
	}

	/** Ttl: time to live in seconds. */
	auth(opts: {
		/** Phone number linked to account or extension in account in E.164 format with or without leading '+' sign */
		username: string;
		password: string;
		/** Extension short number. If company number is specified as a username, and extension is not specified, the server will attempt to authenticate client as main company administrator */
		extension?: string;
		/** Access token lifetime in seconds; the possible values are from 600 sec (10 min) to 3600 sec (1 hour). The default value is 3600 sec. If the value specified exceeds the default one, the default value is set. If the value specified is less than 600 seconds, the minimum value (600 sec) is set */
		accessTokenTtl?: number;
		/** Refresh token lifetime in seconds. The default value depends on the client application, but as usual it equals to 7 days. If the value specified exceeds the default one, the default value is applied. If client specifies refresh_token_ttl<=0, refresh token is not returned even if the corresponding grant type is supported */
		refreshTokenTtl?: number;
		/** List of API permissions to be used with access token (see [Application Permissions](https://developer.ringcentral.com/api-docs/latest/APIPermissions.html)). Can be omitted when requesting all permissions defined during the application registration phase */
		scope?: string[]
	}): Promise<void> {
		return this.rest.auth(opts);
	}

	oauthUrl(redirect_uri: string, opts?: { state?: string, force: boolean }) {
		return this.rest.oauthUrl(redirect_uri, opts);
	}

	oauth(callbackUrl: string, opts?: { accessTokenTtl: string; refreshTokenTtl: string }) {
		return this.rest.oauth(callbackUrl, opts);
	}

	restoreToken(ownerInfo?: { username: string, extension?: string }, tokenStore?: TokenStore): Promise<void> {
		return this.rest.restoreToken(ownerInfo, tokenStore);
	}

	logout(): Promise<void> {
		return this.rest.logout();
	}

	createSubscription() {
		return new Subscription2(this.rest);
	}


	account(id?: string): Account {
		return new Account(null, id, this.rest);
	}

	clientInfo(id?: string): ClientInfo {
		return new ClientInfo(null, id, this.rest);
	}

	dictionary(id?: string): Dictionary {
		return new Dictionary(null, id, this.rest);
	}

	numberParser(id?: string): NumberParser {
		return new NumberParser(null, id, this.rest);
	}

	numberPool(id?: string): NumberPool {
		return new NumberPool(null, id, this.rest);
	}

	subscription(id?: string): Subscription {
		return new Subscription(null, id, this.rest);
	}
}

export {
	RingCentral,    // For commonjs

	SERVER_PRODUCTION,
	SERVER_SANDBOX,
	API_VERSION
};