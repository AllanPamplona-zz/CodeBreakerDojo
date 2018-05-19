var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  result = secretNumber(req.query.number)
  res.json({
    type: result.type,
    message: result.message
  })
});


function validate(num){
  for (i = 0;i<num.length;i++) {
    for (var j = i+1;j<num.length;j++) {
      if(num[i]==num[j]){
          return false;
      }
    }
    if(i===num.length-1){
      return true
    }
  }
}
function secretNumber(num) {
  var secretNumber = "9831";
  var secretNumberLength = secretNumber.length;
  var result="";
  var x="";
  var score="";
  if(isNaN(num)){return {type:0, message:"Fake number"};}
  if(num.length!=4){return {type:0, message:"Invalid size"};}
  if(!validate(num)){return {type:0, message:"Number with digits repeated"};}
  for (i = 0;i<secretNumberLength;i++) {
    for (var j = 0;j<num.length;j++) {
      if(num[j]==secretNumber[i]){
        if(i==j){
            x += "X";
        }
        else{
            score += "-";
        }
      }
    }
  }
  result = x + score;
  return {type:1, message:result};
}
module.exports = router;
