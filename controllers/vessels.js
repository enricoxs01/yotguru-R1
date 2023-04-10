const Vessels = require('../models/vessel');

module.exports = {
  index,
  //show,
  new: newVessel,
  create
};

async function index(req, res) {
  const vessels = await Vessels.find({});
  res.render('vessels/index', { title: 'Your vessels', vessels });
}

function newVessel(req, res) {
  res.render('vessels/new', { title: 'Add A New Vessel', errorMsg: '' });
}

async function create(req, res) {
  console.log("I AM CREATING A VESSEL")
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
 
  try {
    // Update this line because now we need the _id of the new movie
    const vessel = await Vessels.create(req.body);
    const vessels = await Vessels.find({});

    //res.redirect(`/vessels`, {title:});
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('vessels/new', { title: " Something went wrong", errorMsg: err.message });
  }
}


/*async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const movie = await Movie.findById(req.params.id).populate('cast');
  // Mongoose query builder approach to retrieve performers not the movie:
    // Performer.find({}).where('_id').nin(movie.cast)
  // The native MongoDB approach uses a query object to find 
  // performer docs whose _ids are not in the movie.cast array like this:
  const performers = await Performer.find({ _id: { $nin: movie.cast } }).sort('name');
  res.render('movies/show', { title: 'Movie Detail', movie, performers });
}*/



/*async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new movie
    const movie = await Movie.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/movies/${movie._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('movies/new', { errorMsg: err.message });
  }
}*/