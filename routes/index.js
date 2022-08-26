var express = require("express");
var router = express.Router();

let idList = ["doteka", "admin", "kang"];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
// router.get("/idOverlap", function (req, res) {
//   let { userID } = req.query;
//   Allow = false;
//   console.log("LOG1");
//   console.log(idList.indexOf(userID));
//   if (idList.indexOf(userID) == -1) {
//     Allow = true;
//   }
//   res.status(200).json({
//     ok: true,
//     Allowed: Allow,
//   });
//   if (Allow) {
//     console.log("[" + userID + "] 생성 가능");
//   } else {
//     console.log("[" + userID + "] 생성 불가능");
//   }
//   console.log("LOG2");
// });

// router.get("/login", function (req, res) {
//   setTimeout(function () {
//     res.status(200).json({
//       ok: true,
//       Allow: true,
//     });
//   }, 1500);
// });

// router.get("/api/user/login", function (req, res) {
//   console.log(req);
//   res.json({ ok: true, Allowed: true });
// });

// router.post("/api/post/post_Writing", function (req, res) {
//   res.json({ ok: true, postID: 1234 });
// });

module.exports = router;
