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
      expect(obj).to.be.an('object');
      let sharedbox2 = new SharedBox.Helpers.Sharedbox(obj);
      expect(sharedbox2.userId).to.equal(sharedbox.userId);
      expect(sharedbox2.status).to.equal(sharedbox.status);
      expect(sharedbox2.previewUrl).to.equal(sharedbox.previewUrl);
      expect(sharedbox2.createdAt).to.equal(sharedbox.createdAt);
      expect(sharedbox2.updatedAt).to.equal(sharedbox.updatedAt);
      expect(sharedbox2.expiration).to.equal(sharedbox.expiration);
      expect(sharedbox2.closedAt).to.equal(sharedbox.closedAt);
      expect(sharedbox2.userEmail).to.equal(sharedbox.userEmail);
      expect(sharedbox2.uploadUrl).to.equal(sharedbox.uploadUrl);
      expect(sharedbox2.recipients).to.be.deep.equal(sharedbox.recipients);
      expect(sharedbox2.attachments).to.be.deep.equal(sharedbox.attachments);
      expect(sharedbox2.message).to.equal(sharedbox.message);
      expect(sharedbox2.subject).to.equal(sharedbox.subject);
      expect(sharedbox2.notificationLanguage).to.equal(sharedbox.notificationLanguage);
      expect(sharedbox2.securityOptions.allowRememberMe).to.equal(sharedbox.securityOptions.allowRememberMe);
      expect(sharedbox2.securityOptions.allowSms).to.equal(sharedbox.securityOptions.allowSms);
      expect(sharedbox2.securityOptions.allowVoice).to.equal(sharedbox.securityOptions.allowVoice);
      expect(sharedbox2.securityOptions.allowEmail).to.equal(sharedbox.securityOptions.allowEmail);
      expect(sharedbox2.securityOptions.expirationValue).to.equal(sharedbox.securityOptions.expirationValue);
      expect(sharedbox2.securityOptions.expirationUnit).to.equal(sharedbox.securityOptions.expirationUnit);
      expect(sharedbox2.securityOptions.retentionPeriodType).to.equal(sharedbox.securityOptions.retentionPeriodType);
      expect(sharedbox2.securityOptions.retentionPeriodValue).to.equal(sharedbox.securityOptions.retentionPeriodValue);
      expect(sharedbox2.securityOptions.retentionPeriodUnit).to.equal(sharedbox.securityOptions.retentionPeriodUnit);
      expect(sharedbox2.securityOptions.allowManualClose).to.equal(sharedbox.securityOptions.allowManualClose);


    });
  });
});
