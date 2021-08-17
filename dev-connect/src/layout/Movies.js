import React,{useState,useEffect} from 'react'
import {Card,Button} from 'react-bootstrap'
const Movies = () => {
    const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos`).then(
        response => response.json()
      ).then(value => {
        setData(value);
      })
  },[])
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/photos`).then(
      response => response.json()
    ).then(value => {
      setData(value.Search);
    })
  }
  const download = url => {
    fetch(url).then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
        <div>
             <section class="container">
          <h1>Search Your Favorite Movie</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br /><br />
                <input type="submit" value="Search" />
            </form>
            <div className="row" >
            {data.length>=1?data.map(movie=>
            <div className="col-md-3" key={movie.id}>
                <div className="card" style={{"width": "18rem"}}>
                <img src={movie.thumbnailUrl} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h4 className="card-title">{movie.title}</h4>
                    <a className="btn btn-primary" onClick={()=>download(movie.thumbnailUrl)}>Download Poster</a>
                </div>
                </div>
            </div>
            ):null}
            </div>
        
             </section>
         
        </div>
    )
}

export default Movies
