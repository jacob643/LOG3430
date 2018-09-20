import SharedBox from '../src/sharedbox.js';
import * as Utils from '../src/Utils/platform.js';
let assert = require('chai').assert;
let expect = require('chai').expect;
let sinon = require('sinon');

export default describe('Client', () => {
  let client;
  let stubFetch;
  let sharedbox;
  let recipient;
  beforeEach(() => {
    client = new SharedBox.Client('api', 1, 'blah');
    stubFetch = sinon.stub(Utils, 'fetch').withArgs(sinon.match.string, sinon.match.object);
    sharedbox = {
      userEmail: 'user@acme.com',
      guid: '1c820789a50747df8746aa5d71922a3f',
      uploadUrl: 'upload_url',
      recipients: [ /* list of Recipient objects*/ ],
      attachments: [ /*list of Attachment objects*/ ],
      message: 'lorem ipsum...',
      subject: 'Donec rutrum congue leo eget malesuada.',
      notificationLanguage: 'en',
      securityOptions: {
        allowRememberMe: true,
        allowSms: true,
        allowVoice: true,
        allowEmail: true,
        expirationValue: 5,
        expirationUnit: 'days',
        retentionPeriodType: 'do_not_discard',
        retentionPeriodValue: null,
        retentionPeriodUnit: 'hours',
        allowManualClose: true
      },
      userId: 1,
      status: 'in_progress',
      previewUrl: 'http://sharedbox.com/sharedboxes/dhjewg67ewtfg476/preview',
      createdAt: '2018-05-24T14:45:35.062Z',
      updatedAt: '2018-05-24T14:45:35.589Z',
      expiration: '2018-05-31T14:45:35.038Z',
      closedAt: null
    };
    recipient = {
      id: '59adbccb-87cc-4224-bfd7-314dae796e48',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      options: {
        locked: false,
        bouncedEmail: false,
        verified: false,
        contactMethods: [
          {
            id: 1,
            destination: '+55555555555',
            destinationType: 'office_phone',
            verified: false,
            createdAt: '2018-09-01T16:26:07-04:00',
            updatedAt: '2018-09-01T16:26:07-04:00'
          },
          {
            id: 2,
            destination: '+1111111111',
            destinationType: 'cell_phone',
            verified: true,
            createdAt: '2018-09-01T16:26:07-04:00',
            updatedAt: '2018-09-01T16:26:07-04:00'
          }
        ]
      }
    };
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
            guid: 'dc6f21e0f02c41123b795e4',
            uploadUrl: 'upload_url'
          };
        }
      });

      return client.initializeSharedBox({
        userEmail: 'bb@b.ba'
      }).then(res => {
        expect(res.guid).to.equals('dc6f21e0f02c41123b795e4');
        expect(res.uploadUrl).to.equals('upload_url');
      }, () => {
        assert(false);
      });


    });
  });

  describe('submitSharedBox', () => {

    it('should throw error if GUID is null or undefined', () => {
      sharedbox.guid = null;
      try {
        client.submitSharedBox(sharedbox).then(() => {
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
      return client.submitSharedBox(sharedbox).then(() => {
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
            guid: 'dc6f21e0f02c41123b795e4',
            uploadUrl: 'upload_url'
          };
        }
      });
      return client.submitSharedBox(sharedbox).then(result => {
        expect(result).to.be.an('Object').to.have.all.keys('expiration', 'guid',
          'message', 'notificationLanguage', 'securityOptions', 'subject',
          'uploadUrl', 'userEmail');
      }, () => {
        assert(false);
      });

    });

  });

  describe('uploadAttachment', () => {

    let attachment;
    let stubupload;
    beforeEach(() => {
      attachment = {
        stream: 'stream',
        contentType: 'contenttype',
        filename: 'filename',
        guid: 'none'
      };
      stubupload = sinon.stub(client.jsonClient, 'uploadFile')
        .withArgs(sinon.match.string, sinon.match.object);
    });

    it('should return an attachment with the same guid as the docment guid', () => {
      let response = {
        temporaryDocument: {
          documentGuid: '65f53ec1282c454fa98439dbda134093'
        }
      };
      stubupload.onCall(0).resolves(response);
      return client.uploadAttachment(sharedbox, attachment).then(result => {
        expect(result.guid).to.equals(response.temporaryDocument.documentGuid);
      }, result => {
        expect(result).not.to.be.an('error');
      });

    });

  });

  describe('addRecipient', () => {

    it('should throw error if the guid is null or undef', () => {
      sharedbox.guid = null;
      let spy = sinon.spy(client, 'addRecipient');
      try{client.addRecipient(sharedbox, recipient);}
      catch(error){
        expect(error.message).to.equals('SharedBox GUID cannot be null or undefined');
      }
      expect(spy.threw()).to.be.true;

    });
  });

});
