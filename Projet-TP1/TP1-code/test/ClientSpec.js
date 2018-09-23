import SharedBox from '../src/sharedbox.js';
import Helpers from '../src/modules/Helpers/Helpers.js';
import {
  SharedBoxException
} from '../src/modules/SharedBoxException.js';


let assert = require('chai').assert;
let expect = require('chai').expect;
let sinon = require('sinon');

export default describe('Client', () => {
  let client;
  let stub1;
  let stub2;
  let sharedbox;
  let recipient;

  beforeEach(() => {
    let api = 'api';
    let userId = 1;
    let endpoint = 'end';
    client = new SharedBox.Client(api, userId, endpoint);
    stub1 = sinon.stub(client.jsonClient, 'initializeSharedBox');
    stub2 = sinon.stub(client.jsonClient, 'submitSharedBox');
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
        contactMethods: [{
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
        }]
      }
    };
    sharedbox = new Helpers.Sharedbox(sharedbox);
    recipient = new Helpers.Recipient(recipient);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('initializesharedbox', () => {
    it('should throw error if initializesharedbox threw one', () => {
      stub1.rejects(new Error('it went bad'));
      return client.initializeSharedBox({
        userEmail: 'bb@b.ba'
      }).then(() => {
        assert(false);
      }, err => {
        expect(err).to.be.an('error');
      });
    });

    it('should return the sharedbox with 2 more properties if ok', () => {
      stub1.resolves({
        guid: 'dc6f21e0f02c41123b795e4',
        uploadUrl: 'upload_url'
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
      expect(() => {
        client.submitSharedBox(sharedbox);
      }).to.throw(SharedBoxException);
    });

    it('should throw error if jsonclient did', () => {
      stub2.rejects(new Error);
      return client.submitSharedBox(sharedbox).then(() => {
        assert(false);
      }, result => {
        expect(result).to.be.an('error');
      });
    });

    it('should return a helper if all good', () => {
      stub2.resolves({
        guid: 'dc6f21e0f02c41123b795e4',
        uploadUrl: 'upload_url'
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
      try {
        client.addRecipient(sharedbox, recipient);
      } catch (error) {
        expect(error.message).to.equals('SharedBox GUID cannot be null or undefined');
      }
      expect(spy.threw()).to.be.true;
    });

    it('should throw error if the email is null or undef', () => {
      recipient.email = null;
      let spy = sinon.spy(client, 'addRecipient');
      try {
        client.addRecipient(sharedbox, recipient);
      } catch (error) {
        expect(error.message).to.equals('Recipient email cannot be null or undefined');
      }
      expect(spy.threw()).to.be.true;
    });

    it('should return the new recipient if all good', () => {
      let stub3 = sinon.stub(client.jsonClient, 'addRecipient');
      stub3.resolves('response');
      return client.addRecipient(sharedbox, recipient).then(result => {
        recipient = new Helpers.Recipient(Object.assign(recipient.toObject(), 'response'));
        expect(result.email).to.equals(recipient.email);
        expect(result.firstName).to.equals(recipient.firstName);
        expect(result.lastName).to.equals(recipient.lastName);
      }, () => {
        assert(false);
      });
    });
  });

  describe('closeSharedbox', () => {
    it('should throw error if the guid is null or undef', () => {
      sharedbox.guid = null;
      let spy = sinon.spy(client, 'closeSharedbox');
      try {
        client.closeSharedbox(sharedbox);
      } catch (error) {
        expect(error.message).to.equals('SharedBox GUID cannot be null or undefined');
      }
      expect(spy.threw()).to.be.true;
    });

    it('should call the jsonclient method if all good: positive response', () => {
      let stub = sinon.stub(client.jsonClient, 'closeSharedbox')
        .withArgs(sinon.match.string);
      stub.resolves({
        'result': true,
        'message': 'Sharedbox successfully closed.'
      });

      return client.closeSharedbox(sharedbox).then(result => {
        expect(result.result).to.be.true;
        expect(result.message).to.equals('Sharedbox successfully closed.');
      }, () => {
        assert(false);
      });
    });

    it('should call the jsonclient method if all good: negative response', () => {
      let stub = sinon.stub(client.jsonClient, 'closeSharedbox')
        .withArgs(sinon.match.string);
      stub.resolves(Promise.reject({
        'result': false,
        'message': 'Unable to close the Sharedbox.'
      }));
      return client.closeSharedbox(sharedbox).then(() => {
        assert(false);
      }, result => {
        expect(result.result).not.to.be.true;
        expect(result.message).to.equals('Unable to close the Sharedbox.');
      });
    });
  });
});
