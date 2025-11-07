const express = require("express")
const Blog = require("../models/Blog")
const router = express.Router();

router.get("/",async (request,response) =>{

  const blogs = await Blog.find();
  response.json(blogs)

})

router.post("/",async (request,response) =>{

 const newBlog = new Blog(request.body)
 await newBlog.save()
 response.json({message: "Blog created succesfully"})

})

router.put("/:id", async (request,response) =>{
  await Blog.findByIdAndUpdate(request.params.id, request.body )
  response.json({message: "Blog updated succesfully"})
})

router.delete("/:id", async(request,response) =>{

  await Blog.findByIdAndDelete(request.params.id)
  response.json({message: "Blog deleted succesfully"})

})



module.exports = router;
