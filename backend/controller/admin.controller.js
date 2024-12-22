const admin = require("../model/admin.model");

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

module.exports = { adminTest, adminAccount };
