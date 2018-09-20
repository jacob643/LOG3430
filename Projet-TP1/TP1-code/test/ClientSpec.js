import SharedBox from '../src/sharedbox.js';
import * as Utils from '../src/Utils/platform.js';
let assert = require('chai').assert;
let expect = require('chai').expect;
let sinon = require('sinon');

export default describe('CLient', () => {
  let client;
  let stubFetch;
  beforeEach(() => {
    client = new SharedBox.Client('api', 1, 'blah');
    stubFetch = sinon.stub(Utils, 'fetch').withArgs(sinon.match.string, sinon.match.object);
  });

  afterEach(() => {
    sinon.restore();
  });



  describe('initializesharedbox', () => {

    it('should throw error if initializesharedbox threw one', () => {


      stubFetch.resolves({
        ok: false,
        text: ''
      });
      return client.initializeSharedBox({
        userEmail: 'bb@b.ba'
      }).then(() => {
        assert(false);
      }, err => {
        expect(err).to.be.an('error');
      });

    });

    it('should return the sharedbox with 2 more properties if ok', () => {
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
          return {
            guid: 'the guid',
            uploadUrl: 'the uploadUrl'
          };
        }
      });

      return client.initializeSharedBox({
        userEmail: 'bb@b.ba'
      }).then(res => {
        expect(res.guid).to.equals('the guid');
        expect(res.uploadUrl).to.equals('the uploadUrl');
      }, () => {
        assert(false);
      });


    });
  });

  describe('submitSharedBox', () => {

    it('should throw error if GUID is null or undefined', () => {
      try {
        client.submitSharedBox({
          guid: null
        }).then(() => {
          assert(false);
        }, () => {
          assert(false);
        });
      } catch (e) {
        expect(e.message).to.equals('SharedBox GUID cannot be null or undefined');
        return;
      }
      assert(false);


    });

    it('should throw error if jsonclient did', () => {

      stubFetch.resolves({
        ok: false,
        text: ''
      });
      return client.submitSharedBox({
        guid: 'not null',
        JsonClient: 'jsonclient',
        Client: 'theclient',
        Helpers: 'helper'
      }).then(() => {
        assert(false);
      }, result => {
        expect(result).to.be.an('error');
      });

    });

    it('should return a helper if all good', () => {

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
          return {
            guid: 'the guid',
            uploadUrl: 'the uploadUrl',
            JsonClient: 'jsonclient',
            Client: 'theclient',
            Helpers: 'helper'
          };
        }
      });
      return client.submitSharedBox({
        guid: 'not null',
      }).then(result => {
        expect(result).to.be.an('Object').to.have.all.keys('expiration', 'guid',
          'message', 'notificationLanguage', 'securityOptions', 'subject',
          'uploadUrl', 'userEmail');
      }, () => {
        assert(false);
      });

    });

  });

});