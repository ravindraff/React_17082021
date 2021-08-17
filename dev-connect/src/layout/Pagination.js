import React from 'react'

const Pagination = (props) => {
    const pageNumbers = []
    for (let i = 1; i < Math.ceil(props.data.length/10); i++) {
        pageNumbers.push(i);
    }
    console.log(props.data.length);
  return (
    <div>
        <div class="pageno">
            <center>
            { pageNumbers.map(page =><a className="btn btn-primary" onClick={()=>props.pageHandler(page)} >{page}</a>)}
            </center>
        </div>
      
    </div>
  )
}

export default Pagination
