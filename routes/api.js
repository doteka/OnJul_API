var express = require("express");
var app = express();
var router = express.Router();
const userRouter = require("./user");
let idList = ["doteka", "admin", "kang"];
let nickNameList = ["흥업뿅망치", "판부면치킨왕", "원주대학생"];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    title: "localhost/api/",
  });
  //   res.render("index", { title: "Express" });
});

router.get("/user/idOverlap", function (req, res) {
  let { userID } = req.query;
  Allow = false;
  if (idList.indexOf(userID) == -1) {
    Allow = true;
  }
  res.status(200).json({
    ok: true,
    Allow: Allow,
  });
});

router.get("/user/nickNameOverlap", function (req, res) {
  let { nickName } = req.query;
  Allow = false;
  if (nickNameList.indexOf(nickName) == -1) {
    Allow = true;
  }
  res.status(200).json({
    ok: true,
    Allow: Allow,
  });
});

router.post("/user/signup", function (req, res) {
  console.log(req.body);
  res.status(200).json({
    ok: true,
    signup: true,
  });
});

module.exports = router;
