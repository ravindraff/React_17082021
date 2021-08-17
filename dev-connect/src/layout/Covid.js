import React,{useState,useEffect} from 'react'
import { TableContainer, TableHead,TableCell, TableBody, TableRow} from '@material-ui/core'

const Covid = () => {
 
  const [data,setData] = useState([])
  useEffect(() =>{
    fetch("https://data.covid19india.org/data.json")
    .then(data =>data.json())
    .then(jsondata =>setData(jsondata.statewise))

  },[])
  return (
    <div>
      <section className="container">
            <TableContainer>
                <TableHead>
                    <TableCell>SNO</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Confirmed</TableCell>
                    <TableCell>Recovered</TableCell>
                </TableHead>
                <TableBody>
                    {
                        data.map(res=>
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
      </section>
    </div>
  )
}

export default Covid
