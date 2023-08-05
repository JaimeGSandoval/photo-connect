const Post = require('../models/Post');
const Profile = require('../models/Profile');
const User = require('../models/User');
const cloudinary = require('../middleware/cloudinary');

module.exports = {
  getProfileById: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render('profile.ejs', { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getProfileByUsername: async (req, res) => {
    try {
      const profile = await User.find({ userName: req.params.userName });
      const posts = await Post.find({ userName: req.params.userName });
      res.render('profile.ejs', { posts: posts, user: profile[0] });
    } catch (err) {
      console.log(err);
    }
  },
  getProfileForm: (req, res) => {
    res.render('profileForm.ejs');
  },
  createProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Profile.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
        specializations: req.body.specialization,
        about: req.body.about,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
      });
      console.log('Profile has been added!');
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },
};
