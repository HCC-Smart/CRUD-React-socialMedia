import Login from './assets/Login';
import Header from './assets/Header';
import CreatePost from './assets/CreatePost';
import { useState } from 'react';


import './App.css'
import posts from './assets/posts';


const App =() => {
  const [user,setUser] = useState("");
  const [posts,setPosts] = useState([]);

  if (!user) return <Login setUser={setUser} />;
  return(
    <div className='App'>
      <Header user={user} setUser={setUser}/> 
      <CreatePost setPosts={setPosts}/>
      {posts.length > 0 && 
        posts.map((post) =>(
          <>
          <p>{post.title}</p>
          {post.image &&<img height={100} width={200} 
          src={URL.createObjectURL(post.image)} alt=""/>}
        </>
        ))}

    </div>
  )
    
};
export default  App;

  
    
 
    
    

