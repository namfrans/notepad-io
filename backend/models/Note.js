const noteSchema = {
    title:{
      type:String,
      required:true
    },
    content:{
      type:String,
      required:true
    },
    author:{
      type:String,
      required:true
    }
  }

module.exports = noteSchema;