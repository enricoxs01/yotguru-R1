const Account = require('../models/account');
// internal function to create accounts
function makeAccountId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
// Middleware to create an "incomplete" account upon logging in if one is not present
module.exports = async function(req, res, next) {
    const acct = await Account.findOne({email: req.user.email})
    if (acct === null) {
        let newAcct = new Account
        newAcct.completeStatus = false;
        newAcct.user = req.user.name;
        newAcct.actNumber = makeAccountId(12)
        newAcct.email = req.user.email
        console.log(newAcct)
        try { 
            const acct = await Account.create(newAcct)
          } catch (err) {
              console.log("FAILED TO CREATE ACCOUNT");
              res.render('/vessels', { title: 'Something went wrong creating account',  errorMsg: '' })
              console.log(err)
              return 
          }
       
    } else {
    return next(); }
  }