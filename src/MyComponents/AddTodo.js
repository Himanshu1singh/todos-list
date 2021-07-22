import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
  const [title,setTitle]= useState("");
  const [desc, setDesc] = useState("");

 const Submit =(e)=>{
   e.preventDefault();
   if(!title || !desc){
     alert("title or description can not be blank")
   }
   else{
    addTodo(title,desc);
    setTitle("");
    setDesc("");
   }
  }
    return (
        <div className="container my-3">
          <h3>Add a Todo</h3>
            <form onSubmit = {Submit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Todo Title</label>
    <input type="text" value ={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />
  </div>
  <div className="form-group my-3">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="" />
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
        </div>
    )
}
