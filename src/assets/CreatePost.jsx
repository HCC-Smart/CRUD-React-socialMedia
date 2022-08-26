import { useState } from "react";

const createPost= ({setPosts}) =>{
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    
     const handlePostSubmet=(event)=>{
      event.preventDefault();
      const newpost = {title, image};

      setPosts=((prev) => [...prev,newpost]);
     }

    return(
    <>
      <form onSubmit={handlePostSubmet}>
         <div>
            <input type="text" placeholder="post name"
            onChange={(event)=> setTitle(event.target.value)}
            />
         </div>
         <div>
            <input type="file"
            onChange={(event) => setImage(event.target.files[0])}
            />
         </div>
         <div>
            <button type="submit">Save post</button>
         </div>
         <>
           <p>{title}</p>
           {image &&<img height={100} width={200} src={URL.createObjectURL(image)} alt=""/>}
         </>
      </form>

    </>
    );
}
export default  createPost;