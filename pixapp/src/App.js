import './App.css';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {Card,Button,InputGroup,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inp,setInp]=useState("")
  const [data,setData] = useState([])
  useEffect(() => {
      axios.get('https://pixabay.com/api/?key=23170616-fc4d94ae13d2e2d991a91c681&q=&image_type=photo').then(
      res =>setData(res.data.hits)
    )
  }, [])
  const setHandleChange = ()=> {
    var url = `https://pixabay.com/api/?key=23170616-fc4d94ae13d2e2d991a91c681&q=${inp}&image_type=photo`;
    axios.get(url).then(
      res =>setData(res.data.hits)
    )
  }
  return (
    <div className="">
      <div className="bgimage">
      <body>
      <div class="grid-container">
            <header class="row">
                <div>
                    <a href="#" class="brand">Amazona</a>
                </div>
                <div>
                    <a href="#">Cart</a>
                    <a href="#">Sign In</a>
                </div>
            </header>
            <main>
                <div>
                <InputGroup className="mb-3">
                <FormControl value={inp}
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e)=>setInp(e.target.value)}
                />
                <Button variant="outline-primary" id="button-addon2" onClick={()=>setHandleChange()}>
                  Search
                </Button>
              </InputGroup>
                {/*   <input type="text" className="" size="80"  value={inp} placeholder="Search" onChange={(e)=>setInp(e.target.value)}  />
                  <button type="button" value="Search" onClick={()=>setHandleChange()}>Search</button> */}
                </div>
            <div className="row">
          {/*   <ImageGallery items={data} /> */}
          {data.map(res=>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={res.largeImageURL} />
              <Card.Body>
                <Card.Title>{res.tags}</Card.Title>
               
              </Card.Body>
            </Card>
          )}
          
              
            </div>
            </main>
            <footer class="row center">
                All Rights Reserved
            </footer>
       </div>
    </body>
         
      </div>     
    </div>
  );
}

export default App;
