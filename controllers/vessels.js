const Vessels = require('../models/vessel');

module.exports = {
  index,
  show,
  new: newVessel,
  create,
  edit,
  update,
  delete: deleteVessel
};

async function index(req, res) {
  const vessels = await Vessels.find({});
  res.render('vessels/index', { title: 'Your vessels', vessels });
}

function newVessel(req, res) {
  res.render('vessels/new', { title: 'Add A New Vessel', errorMsg: '' });
}

async function create(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
 
  try {
    // Update this line because now we need the _id of the new movie
    const vessel = await Vessels.create(req.body);
    const vessels = await Vessels.find({});

    res.render('vessels/index', { title: 'Your vessels', vessels });

  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('vessels/new', { title: " Something went wrong", errorMsg: err.message });
  }
}

async function show(req, res) {
  const vessel = await Vessels.findById(req.params.id);
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

async function deleteVessel(req, res) {
  const vessel = await Vessels.findById(req.params.id);
  console.log("I am DELETING")
  res.render('vessels/delete', {
    title: 'Confirm Vessel Deletion',
    vessel
  });
}


