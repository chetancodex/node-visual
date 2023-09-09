const jsondata = require('../model/visualizedata.model');



exports.getAllVisualizeData = (req, res) => {
    jsondata.find().then((docs) => {
      if(docs) {
        console.log('here')
        console.log(docs)
        res.status(200).json({ data : docs})
      } else {
        res.status(400).json({message : "Client Server Error"})
      }
    }).catch((err)=> {
        res.status(500).json({error  :err})
    })
}
