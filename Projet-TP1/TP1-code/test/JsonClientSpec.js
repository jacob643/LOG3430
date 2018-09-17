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


  });



});