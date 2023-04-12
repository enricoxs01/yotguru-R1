const Account = require('../models/account');
const User = require('../models/user')

module.exports = {
  show,
  update
};


async function update(req,res) {
  let acct = await Account.findOne({email: req.user.email})
  let usr = await User.findOne({email: req.user.email})

  if (acct !== null) {
    acct.completeStatus =true
    acct.firstName = req.body.firstName
    acct.middleName =req.body.middleName
    acct.lastName = req.body.lastName
    acct.recoveryEmail = req.body.recoveryEmail
    acct.phone = req.body.phone
    acct.yguser = usr._id
  }

  try { 
    await acct.save()
    res.render('account/show', {title: 'Account profile', acct})
  } catch (err) {
      console.log("FAILED TO UPDATE ACCOUNT")
      res.redirect('/vessels',{ errorMessage: err.message});
  }
}

async function show(req,res) {
  //let acct = await Account.findOne({email: req.user.email})
    console.log("I am showing  req === > req.user")
    console.log (req.user)
  //  console.log("I am showing  ACcount === > acct")
 //   console.log(acct)


 /* if (acct.completedStatus) {
    res.render('account/show', {title: 'Account profile', acct})
} else { 
    acct.firstName =""
    acct.middleName=""
    acct.lastName =""
    acct.recoveryEmail =""
    acct.phone=null;
    res.render('account/show', {title: 'Please complete the account profile', acct})
}*/
}