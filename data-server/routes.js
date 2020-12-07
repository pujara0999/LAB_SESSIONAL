const route = require("express").Router();

const Feedback = require("./model");

route.get("/",async (req, res) => {
  try {
    const found = await Feedback.find();
    res.json(found);
  } catch (err) {
    console.log(err)
  }

});

route.get("/reviews", async(req, res) =>{
  res.send("Hello")
})

route.post("/", async (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  Feedback.findOne({name:name}, async function(err, found){
    if(!err) {
      if(found){
        temp = (score + found.score)/2
        console.log(temp)
        const result = await Feedback.findOneAndUpdate({name:name}, {score : temp})
      }
      else {
        const item = new Feedback({
          name: name,
          score: score
        })
        try {
          const result = await item.save();
        } catch (err) {
          console.log(err);
        }
      }
    }
  })
});



route.delete("/:id",async (req, res) => {
  const delID = req.params.id
  try {
    const deletedItem = await Feedback.deleteOne({_id: delID});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)
  }
});

module.exports = route;
