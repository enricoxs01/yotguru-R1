const Vessels = require('../models/vessel');
const Account = require('../models/account')
//const accountCtrl = require('./account')

module.exports = {
  index,
  show,
  new: newVessel,
  create,
  edit,
  update,
  delete: deleteVessel,
  confirm: confirmDeleteVessel
};

async function index(req, res) {
  const acct = await Account.findOne({email: req.user.email})
  const vessels = await Vessels.find({account: acct._id});
  res.render('vessels/index', { title: 'Your vessels', vessels });
}



async function newVessel(req, res) {
  // Before creating a first vessel make sure that the Account profile has been filled
  let acct = await Account.findOne({email: req.user.email})

  if (acct.completeStatus) {
      res.render('vessels/new', { title: 'Add A New Vessel', errorMsg: '' });
  } else { 
      res.redirect('/account')
  }
}

async function create(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  
  try {
    //First add this vessel and then link it to the appropriate account 
    let acct = await Account.findOne({email: req.user.email})
    const vessel = await Vessels.create(req.body);
    
    vessel.account =  acct._id
    vessel.save();

    res.redirect('/vessels')

  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('vessels/new', { title: " Something went wrong", errorMsg: err.message });
  }
}

async function show(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  console.log("Vessel param id")
  console.log(req.params.id)
  res.render('vessels/show', { title: 'Vessel Information', vessel});
}

async function update(req, res) {
  const vessel = await Vessels.findById(req.params.id);

  vessel.name = req.body.vessel;
  try {
   await vessel.save(vessel);
    res.redirect(`/vessels/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.render('vessels/new', { title: " Something went wrong", errorMsg: err.message });
  }
}

async function edit(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  res.render('vessels/edit', {
    title: 'Edit Vessel',
    vessel
  });
}

async function confirmDeleteVessel(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  res.render('vessels/delete', {
    title: 'Confirm Vessel Deletion',
    vessel
  });
}

async function deleteVessel (req,res){

  console.log(req.params.id)
  Vessels.deleteOne({_id: req.params.id})
  .then(console.log("delete success!"))
  //.catch(console.log("delete err!"));

  const vessels = await Vessels.find({});
  res.render('vessels/index', { title: 'Your vessels', vessels });
}

