import sdk from 'matrix-js-sdk';
import ProviderScheme from './ProviderScheme';

export default class MatrixProivder extends ProviderScheme {
  constructor() {
    super();
    this.client = null;
  }

  getLoginPageInfo() {}

  getSignupPageInfo() {}

  async login(data) {
    // TODO verify data
    this.client = sdk.createClient(data.baseUrl);
    const res = await this.client.login('m.login.password', {
      user: data.user,
      password: data.password,
    });
    this.accessToken = res.access_token;
  }
}
