import SharedBox from '../src/sharedbox.js';
let expect = require('chai').expect;
//let assert = require('chai').assert;

export default describe('SharedBoxHelper', () => {
  let sharedbox;

  describe('constructor', () => {
    it('should test every property of the object', () => {
      let sample = {
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
      sharedbox = new SharedBox.Helpers.Sharedbox(sample);
      expect(sharedbox.userId).to.equal(sample.userId);
      expect(sharedbox.status).to.equal(sample.status);
      expect(sharedbox.previewUrl).to.equal(sample.previewUrl);
      expect(sharedbox.createdAt).to.equal(sample.createdAt);
      expect(sharedbox.updatedAt).to.equal(sample.updatedAt);
      expect(sharedbox.expiration).to.equal(sample.expiration);
      expect(sharedbox.closedAt).to.equal(sample.closedAt);
      expect(sharedbox.userEmail).to.equal(sample.userEmail);
      expect(sharedbox.uploadUrl).to.equal(sample.uploadUrl);
      expect(sharedbox.recipients).to.be.deep.equal(sample.recipients);
      expect(sharedbox.attachments).to.be.deep.equal(sample.attachments);
      expect(sharedbox.message).to.equal(sample.message);
      expect(sharedbox.subject).to.equal(sample.subject);
      expect(sharedbox.notificationLanguage).to.equal(sample.notificationLanguage);
      expect(sharedbox.securityOptions.allowRememberMe).to.equal(sample.securityOptions.allowRememberMe);
      expect(sharedbox.securityOptions.allowSms).to.equal(sample.securityOptions.allowSms);
      expect(sharedbox.securityOptions.allowVoice).to.equal(sample.securityOptions.allowVoice);
      expect(sharedbox.securityOptions.allowEmail).to.equal(sample.securityOptions.allowEmail);
      expect(sharedbox.securityOptions.expirationValue).to.equal(sample.securityOptions.expirationValue);
      expect(sharedbox.securityOptions.expirationUnit).to.equal(sample.securityOptions.expirationUnit);
      expect(sharedbox.securityOptions.retentionPeriodType).to.equal(sample.securityOptions.retentionPeriodType);
      expect(sharedbox.securityOptions.retentionPeriodValue).to.equal(sample.securityOptions.retentionPeriodValue);
      expect(sharedbox.securityOptions.retentionPeriodUnit).to.equal(sample.securityOptions.retentionPeriodUnit);
      expect(sharedbox.securityOptions.allowManualClose).to.equal(sample.securityOptions.allowManualClose);
    });
  });
});