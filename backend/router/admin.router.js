const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const {
  adminTest,
  adminAccount,
  postAdd,
  photoUpload,
  updatePost,
  postList,
  postDelete,
} = require("../controller/admin.controller.js");

router.get("/", adminTest);

router.get("/post", postList);

router.post("/account", adminAccount);

router.post("/post/add", postAdd);

router.post("/photo/upload", upload.single("file"), photoUpload);

router.put("/post/update/:id", updatePost);

router.delete("/post/delete/:id", postDelete);

module.exports = router;
