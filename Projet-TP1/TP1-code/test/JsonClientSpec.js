import SharedBox from '../src/sharedbox.js';
import * as Utils from '../src/Utils/platform.js';
//let expect = require('chai').expect;
//let assert = require('chai').assert;
let sinon = require('sinon');


export default describe('JsonCLient', () => {
  let jsonClient;
  let stubFetch;

  //creer method qui initialize le stub avec la fake promise

  beforeEach(() => {
    jsonClient = new SharedBox.JsonClient('api', 1, 'blah');
    stubFetch = sinon.stub(Utils,'fetch').withArgs(sinon.match.string, sinon.match.object);
  });

  describe('initializeSharedBox', () => {
    it('should create a base JsonClient', () => {
      let email = 'b.b@bb.ca';
      return jsonClient.initializeSharedBox(email).then( resultat =>
        // expect here !!!
      );
    });
  });
});
