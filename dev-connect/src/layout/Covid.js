import React,{useState,useEffect} from 'react'
import { TableContainer, TableHead,TableCell, TableBody, TableRow} from '@material-ui/core'
import Pagination from './Pagination'

const Covid = () => {
 
  const [data,setData] = useState([])
  const [perpage,setPerpage] = useState([])
  useEffect(() =>{
    fetch("https://data.covid19india.org/data.json")
    .then(data =>data.json())
    .then((jsondata) => {
        setData(jsondata.statewise);
        setPerpage(jsondata.statewise.slice(0,10));
    })
    
  },[])
  const pageHandler = (pageNumber)=>{
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10))
}
  return (
    <div>
      <section className="container">
      <h1>INDIA COVID-19 DASHBOARD</h1>
      <center>
      <TableContainer>
                <TableHead>
                    <TableCell>SNO</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Confirmed</TableCell>
                    <TableCell>Recovered</TableCell>
                </TableHead>
                <TableBody>
                    {
                        perpage.map(res=>
                            <TableRow>
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{res.active}</TableCell>
                                <TableCell>{res.confirmed}</TableCell>
                                <TableCell>{res.recovered}</TableCell>
                            </TableRow>
                        )
                    }
                   
                </TableBody>
            </TableContainer>
            <Pagination data={data} pageHandler={pageHandler} />
      </center>
            
      </section>
    </div>
  )
}

export default Covid
