const admin = require("../model/admin.model");
const Post = require("../model/post.model");

const adminTest = async (req, res) => {
  res.status(200).json(`SarMalTwarMal Api`);
};

const adminAccount = async (req, res) => {
  const { name, password } = req.body;
  new admin({
    name,
    password,
  })
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json(e));
};

const postList = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    success: true,
    message: "post list",
    resource: posts,
  });
};

const postAdd = async (req, res) => {
  const {
    title,
    bio,
    type,
    detail,
    map_url,
    fav,
    cover_photo,
    first_photo,
    second_photo,
    phone,
    email,
    open_hour,
    close_hour,
  } = req.body;

  new Post({
    title,
    bio,
    type,
    detail,
    map_url,
    fav,
    cover_photo,
    first_photo,
    second_photo,
    phone,
    email,
    open_hour,
    close_hour,
  })
    .save()
    .then((result) =>
      res.status(201).json({
        success: true,
        message: "post create",
        resource: result,
      })
    )
    .catch((e) =>
      res.status(500).json({
        success: false,
        error: new Error(e).message,
      })
    );
};

const photoUpload = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "photo uploaded",
    url: process.env.PHOTO_URL + req.file.originalname,
  });
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    bio,
    type,
    detail,
    map_url,
    fav,
    cover_photo,
    first_photo,
    second_photo,
    phone,
    email,
    open_hour,
    close_hour,
  } = req.body;
  await Post.findByIdAndUpdate(id, {
    title,
    bio,
    type,
    detail,
    map_url,
    fav,
    cover_photo,
    first_photo,
    second_photo,
    phone,
    email,
    open_hour,
    close_hour,
  });
  const updated = await Post.findById(id);
  res.status(200).json({
    success: true,
    message: "post updated",
    resource: updated,
  });
};

const postDelete = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "post deleted",
  });
};

module.exports = {
  adminTest,
  adminAccount,
  postAdd,
  photoUpload,
  updatePost,
  postList,
  postDelete,
};
