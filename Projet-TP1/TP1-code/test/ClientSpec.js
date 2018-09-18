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
      assert(true);
      expect(true).to.be.true;

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



  });
});