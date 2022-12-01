const firebase = require("../config/firebase");
const { getDatabase, ref, child, get } = require("firebase/database");
exports.name = (req, res) => {
  var noreg = req.params.noreg;
  noreg = noreg.toUpperCase();

  get(child(ref(getDatabase()), `accounts/${noreg}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      res.json({
        name: snapshot.val(),
      });
    } else {
      res.json({
        name: "Not Found",
      });
    }
  });
};
exports.residence = (req, res) => {
  var noreg = req.params.noreg;
  noreg.toUpperCase();

  get(child(ref(getDatabase()), `residence/${noreg}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      res.json({
        residence: snapshot.val(),
      });
    } else {
      res.json({
        residence: "Not Found",
      });
    }
  });

};