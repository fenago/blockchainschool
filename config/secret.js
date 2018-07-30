module.exports = {

  database: 'mongodb://root:Descartes21@ds263948.mlab.com:63948/blockchainschool',
  port: 8080,
  secretKey: 'Descartes21',
  facebook: {
    clientID: '543228052779105',
    clientSecret: '1f7973499332e1b92ef00b2853dc85a1',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    passReqToCallback: true,
  }

}
