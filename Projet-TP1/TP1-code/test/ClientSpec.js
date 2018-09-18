import SharedBox from '../src/sharedbox.js';
import * as Utils from '../src/Utils/platform.js';
let assert = require('chai').assert;
let expect = require('chai').expect;
let sinon = require('sinon');

export default describe('JsonCLient', () => {
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
            guid: null,
            uploadUrl: 'the uploadUrl'
          };
        }
      });

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
  });


});