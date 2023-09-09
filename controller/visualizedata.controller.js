const visualizeData = require('../model/visualizedata.model');



exports.getAllVisualizeData = (req, res) => {
    visualizeData.find().then((docs) => {
      if(docs) {
        res.status(200).json({ data : docs})
      } else {
        res.status(400).json({message : "Client Server Error"})
      }
    }).catch((err)=> {
        res.status(500).json({error  :err})
    })
}
