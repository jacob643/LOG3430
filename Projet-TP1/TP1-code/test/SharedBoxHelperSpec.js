import SharedBox from '../src/sharedbox.js';
let expect = require('chai').expect;
//let assert = require('chai').assert;

export default describe('SharedBoxHelper', () => {
  let sharedbox;
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

  describe('constructor', () => {
    it('should test every property of the object', () => {
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
  describe('toJson', () => {
    it('should return a JSON string of the object with proper parameters', () => {

      sharedbox = new SharedBox.Helpers.Sharedbox(sample);
      let json = sharedbox.toJson();
      expect(json).to.be.a('string');
      let obj = JSON.parse(json);
      expect(obj.sharedbox.guid).to.equals(sample.guid);
      expect(obj.sharedbox.userEmail).to.equals(sample.userEmail);
      expect(obj.sharedbox.uploadUrl).to.equals(sample.uploadUrl);
      expect(obj.sharedbox.subject).to.equals(sample.subject);
      expect(obj.sharedbox.message).to.equals(sample.message);
      expect(obj.sharedbox.userId).to.equal(sample.userId);
      expect(obj.sharedbox.status).to.equal(sample.status);
      expect(obj.sharedbox.previewUrl).to.equal(sample.previewUrl);
      expect(obj.sharedbox.createdAt).to.equal(sample.createdAt);
      expect(obj.sharedbox.updatedAt).to.equal(sample.updatedAt);
      expect(obj.sharedbox.expiration).to.equal(sample.expiration);
      expect(obj.sharedbox.closedAt).to.equal(sample.closedAt);
      expect(obj.sharedbox.userEmail).to.equal(sample.userEmail);
      expect(obj.sharedbox.uploadUrl).to.equal(sample.uploadUrl);
      expect(obj.sharedbox.recipients).to.be.deep.equal(sample.recipients);
      expect(obj.sharedbox.attachments).to.be.deep.equal(sample.attachments);
      expect(obj.sharedbox.message).to.equal(sample.message);
      expect(obj.sharedbox.subject).to.equal(sample.subject);
      expect(obj.sharedbox.notificationLanguage).to.equal(sample.notificationLanguage);
      expect(obj.sharedbox.securityOptions.allowRememberMe).to.equal(sample.securityOptions.allowRememberMe);
      expect(obj.sharedbox.securityOptions.allowSms).to.equal(sample.securityOptions.allowSms);
      expect(obj.sharedbox.securityOptions.allowVoice).to.equal(sample.securityOptions.allowVoice);
      expect(obj.sharedbox.securityOptions.allowEmail).to.equal(sample.securityOptions.allowEmail);
      expect(obj.sharedbox.securityOptions.expirationValue).to.equal(sample.securityOptions.expirationValue);
      expect(obj.sharedbox.securityOptions.expirationUnit).to.equal(sample.securityOptions.expirationUnit);
      expect(obj.sharedbox.securityOptions.retentionPeriodType).to.equal(sample.securityOptions.retentionPeriodType);
      expect(obj.sharedbox.securityOptions.retentionPeriodValue).to.equal(sample.securityOptions.retentionPeriodValue);
      expect(obj.sharedbox.securityOptions.retentionPeriodUnit).to.equal(sample.securityOptions.retentionPeriodUnit);
      expect(obj.sharedbox.securityOptions.allowManualClose).to.equal(sample.securityOptions.allowManualClose);


    });
  });
});
