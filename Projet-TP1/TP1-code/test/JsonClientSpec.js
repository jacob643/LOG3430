import SharedBox from '../src/sharedbox.js';
import * as Utils from '../src/Utils/platform.js';
let expect = require('chai').expect;
let assert = require('chai').assert;
let sinon = require('sinon');


export default describe('JsonCLient', () => {
  let jsonClient;
  let stubFetch;

  //creer method qui initialize le stub avec la fake promise

  beforeEach(() => {
    jsonClient = new SharedBox.JsonClient('api', 1, 'blah');
    stubFetch = sinon.stub(Utils, 'fetch').withArgs(sinon.match.string, sinon.match.object);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('initializeSharedBox', () => {
    it('should create a base JsonClient', () => {
      let email = 'b.b@bb.ca';
      stubFetch.resolves({
        ok: false,
        text: 'blah'
      });
      return jsonClient.initializeSharedBox(email).then(() => {
        assert(false);
      }, err => {
        expect(err).to.be.an('error');
      });
    });

    it('should throw error if empty text', () => {
      let email = 'b.b@bb.ca';
      stubFetch.resolves({
        ok: true,
        text: ''
      });
      return jsonClient.initializeSharedBox(email).then(() => {
        assert(false);
      }, err => {
        expect(err).to.be.an('error');
      });
    });

    it('should return empty if response has a 204 status', () => {
      let email = 'b.b@bb.ca';
      stubFetch.onCall(0).resolves({
        ok: true,
        text: () => {
          return 'text';
        }
      });
      stubFetch.onCall(1).resolves({
        status: 204
      });
      return jsonClient.initializeSharedBox(email).then(result => {
        expect(result).to.be.an('object').that.is.empty;
      }, () => {
        assert(false);
      });

    });

    it('should throw error if response ok is false', () => {
      let email = 'b.b@bb.ca';
      stubFetch.onCall(0).resolves({
        ok: true,
        text: () => {
          return 'text';
        }
      });
      stubFetch.onCall(1).resolves({
        ok: false,
        status: 100,
        text: () => {
          return new Promise((resolve) => {
            resolve({});
          });
        },
        statustext: () => {
          return 'it is a hundred';
        }
      });
      return jsonClient.initializeSharedBox(email).then(() => {
        assert(false);
      }, result => {
        expect(result).to.be.an('error');
      });

    });

    it('should return a response if everything is fine', () => {
      let email = 'b.b@bb.ca';
      stubFetch.onCall(0).resolves({
        ok: true,
        text: () => {
          return 'text';
        }
      });
      stubFetch.onCall(1).resolves({
        ok: true,
        status: 100,
        text: () => {
          return new Promise((resolve) => {
            resolve({});
          });
        },
        json: () => {
          return 'the answer is 42';
        }
      });
      return jsonClient.initializeSharedBox(email).then(result => {
        expect(result).to.equal('the answer is 42');
      }, () => {
        assert(false);
      });

    });

  });

  describe('submitSharedBox', () => {



    it('should throw an error if the request threw one', () => {
      stubFetch.resolves({
        ok: false,
        text: ''
      });
      return jsonClient.submitSharedBox('the answer is 42').then(() => {
        assert(false);
      }, result => {
        expect(result).to.be.an('error');
      });
    });

  });


});