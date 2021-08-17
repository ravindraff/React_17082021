import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Pagination from '../layout/Pagination'

const Posts = () => {
   // const [data,setData] = useState([]);
    /* useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/photos").then(
        response => response.json()
      ).then(value => {
        setData(value);
      })
       
    }, []) */
    const [data,setData] = useState([])
    const [perpage,setPerpage] = useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
            setData(res.data);
            setPerpage(res.data.slice(0,10));
        })
    },[])
    const pageHandler = (pageNumber)=>{
        setPerpage(data.slice((pageNumber*10)-10,pageNumber*10))
    }
    return (
        <div>
            <section class="container">
      <h1 class="large text-primary">
        Posts {/* {JSON.stringify(data)} */}
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome to the community</p>

      <div class="post-form">
        <div class="post-form-header bg-primary">
          <h3>Say Something...</h3>
        </div>
        <form class="form my-1">
          <textarea cols="30" rows="5" placeholder="Create a post"></textarea>
          <input type="submit" value="Submit" class="btn btn-dark my-1" />
        </form>
        <div class="posts">
            {/* {data.map(post=>( */}
            {perpage.map(post=>(
                <div class="post bg-white my-1 p-1">
            <div>
              <a href="profile.html">
              
                <h4>{post.id}</h4>
              </a>
            </div>

            <div>
              <p class="my-1">
                {post.title}
              </p>
             
              <a href="post.html" class="btn btn-primary">
                Discussion
              </a>
            </div>
          </div>
            ))}
          
          <center>
                <Pagination  data={data} pageHandler={pageHandler} />
            </center>
          
        </div>
      </div>
    </section>
        </div>
    )
}

export default Posts
