import SharedBox from '../src/sharedbox.js';
import * as Utils from '../src/Utils/platform.js';
let expect = require('chai').expect;
let assert = require('chai').assert;
let sinon = require('sinon');


export default describe('JsonCLient', () => {
  let jsonClient;
  let stubFetch;
  let setStub = (call, ok, text, status, statustext, json) => {
    stubFetch.onCall(call).resolves({
      ok: ok,
      text: () => {
        return text;
      },
      statusText: () => {
        return statustext;
      },
      status: status,
      json: () => {
        return json;
      }
    });
  };

  beforeEach(() => {
    jsonClient = new SharedBox.JsonClient('api', 1, 'blah');
    stubFetch = sinon.stub(Utils, 'fetch').withArgs(sinon.match.string, sinon.match.object);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('_getSharedBoxEndpoint', () => {
    it('should reject the promise', () => {
      let email = 'b.b@bb.ca';
      setStub(0, false, 'blah', 500, 'bleh', 'went well');
      return jsonClient.initializeSharedBox(email).then(() => {
        assert(false);
      }, err => {
        expect(err).to.be.an('error');
      });
    });

    it('should throw error if empty text', () => {
      let email = 'b.b@bb.ca';
      setStub(0, true, '', 500, 'bleh', 'went well');
      return jsonClient.initializeSharedBox(email).then(() => {
        assert(false);
      }, err => {
        expect(err).to.be.equal('Unexpected server response format');
      });
    });
  });

  describe('_makeRequest', () => {
    it('should return empty if response has a 204 status', () => {
      let email = 'b.b@bb.ca';
      setStub(0, true, 'text', 200, 'bleh', 'went well');
      setStub(1, true, 'text', 204, 'bleh', 'went well');
      return jsonClient.initializeSharedBox(email).then(result => {
        expect(result).to.be.an('object').that.is.empty;
      }, () => {
        assert(false);
      });
    });

    it('should throw error if response ok is false', () => {
      let email = 'b.b@bb.ca';
      setStub(0, true, 'text', 204, 'bleh', 'went well');
      setStub(1, false, new Promise((resolve) => {
        resolve({});
      }), 200, 'bleh', 'went well');
      return jsonClient.initializeSharedBox(email).then(() => {
        assert(false);
      }, result => {
        expect(result).to.be.an('error');
      });
    });
  });

  describe('initializeSharedBox', () => {
    it('should return a response if everything is fine', () => {
      let email = 'b.b@bb.ca';
      setStub(0, true, 'text', 204, 'bleh', 'went well');
      setStub(1, true, new Promise((resolve) => {
        resolve('went Well');
      }), 200, 'bleh', 'went well');
      return jsonClient.initializeSharedBox(email).then(result => {
        expect(result).to.equal('went well');
      }, () => {
        assert(false);
      });
    });
  });

  describe('submitSharedBox', () => {
    //the method maybe should handle error with a catch.
    it('should throw an error if the request threw one', () => {
      setStub(0, false, 'text', 204, 'bleh', 'went well');
      return jsonClient.submitSharedBox('the answer is 42').then(() => {
        assert(false);
      }, result => {
        expect(result).to.be.an('error');
      });
    });

    //here, we won't go through the details of every exception trew situation
    //because it would be from the same _makeRequest method.
    it('should return a response if everything is fine', () => {
      setStub(0, true, 'text', 204, 'bleh', 'went well');
      setStub(1, true, new Promise((resolve) => {
        resolve({});
      }), 200, 'bleh', 'went well');
      return jsonClient.submitSharedBox('went well').then(result => {
        expect(result).to.equal('went well');
      }, () => {
        assert(false);
      });
    });
  });

  describe('addRecipient', () => {
    it('add a recipient through a request', () => {
      let stub = sinon.stub(jsonClient, '_makeRequest')
        .withArgs(sinon.match.string, sinon.match.object);
      stub.resolves('made the request');
      return jsonClient.addRecipient('guid', 'recipientJson').then(result => {
        expect(result).to.equals('made the request');
        expect(stub.calledWith('api/sharedboxes/guid/recipients', {
          headers: {
            'Authorization-Token': jsonClient.apiToken,
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: 'recipientJson'
        })).to.be.true;
      }, result => {
        expect(result).not.to.be.an('error');
      });
    });
  });

  describe('closeSharedbox', () => {
    it('should make a request with expected parameters', () => {
      let stub = sinon.stub(jsonClient, '_makeRequest')
        .withArgs(sinon.match.string, sinon.match.object);
      stub.resolves('called');
      let suffix = 'api/sharedboxes/101/close';
      jsonClient.closeSharedbox('101').then(result => {
        expect(result).to.equals('called');
      }, () => {
        assert(false);
      });

      expect(stub.calledWith(suffix, {
        headers: {
          'Authorization-Token': jsonClient.apiToken,
          'Content-Type': 'application/json'
        },
        method: 'patch'
      })).to.be.true;
    });
  });
});
