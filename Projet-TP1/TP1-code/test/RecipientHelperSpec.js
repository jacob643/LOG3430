import SharedBox from '../src/sharedbox.js';
let expect = require('chai').expect;

export default describe('Recipient', () => {
  let recipient;
  let sample;

  beforeEach(() => {
    recipient = new SharedBox.Helpers.Recipient();
    sample = {
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

  describe('constructor', () => {

    it('attributes should be values passed by parameters', () => {
      recipient = new SharedBox.Helpers.Recipient(sample);
      expect(recipient.id).to.equal(sample.id);
      expect(recipient.firstName).to.equal(sample.firstName);
      expect(recipient.lastName).to.equal(sample.lastName);
      expect(recipient.email).to.equal(sample.email);
      expect(recipient.options.locked).to.equal(sample.options.locked);
      expect(recipient.options.bouncedEmail).to.equal(sample.options.bouncedEmail);
      expect(recipient.options.verified).to.equal(sample.options.verified);
      expect(recipient.options.contactMethods.length).to.equal(sample.options.contactMethods.length);
      expect(recipient.options.contactMethods[0].id).to.equal(sample.options.contactMethods[0].id);
      expect(recipient.options.contactMethods[0].destination).to.equal(sample.options.contactMethods[0].destination);
      expect(recipient.options.contactMethods[0].destinationType).to.equal(sample.options.contactMethods[0].destinationType);
      expect(recipient.options.contactMethods[0].verified).to.equal(sample.options.contactMethods[0].verified);
      expect(recipient.options.contactMethods[0].createdAt).to.equal(sample.options.contactMethods[0].createdAt);
      expect(recipient.options.contactMethods[0].updateAt).to.equal(sample.options.contactMethods[0].updateAt);
      expect(recipient.options.contactMethods[1].id).to.equal(sample.options.contactMethods[1].id);
      expect(recipient.options.contactMethods[1].destination).to.equal(sample.options.contactMethods[1].destination);
      expect(recipient.options.contactMethods[1].destinationType).to.equal(sample.options.contactMethods[1].destinationType);
      expect(recipient.options.contactMethods[1].verified).to.equal(sample.options.contactMethods[1].verified);
      expect(recipient.options.contactMethods[1].createdAt).to.equal(sample.options.contactMethods[1].createdAt);
      expect(recipient.options.contactMethods[1].updateAt).to.equal(sample.options.contactMethods[1].updateAt);


    });
  });
  describe('toJson', () => {
    it('should return a JSON string of the object with proper parameters', () => {

      recipient = new SharedBox.Helpers.Recipient(sample);
      let json = recipient.toJson();
      expect(json).to.be.a('string');
      let obj = JSON.parse(json);
      expect(obj.recipient.email).to.equals(sample.email);
      expect(obj.recipient.firstName).to.equals(sample.firstName);
      expect(obj.recipient.lastName).to.equals(sample.lastName);
    });
  });
});
