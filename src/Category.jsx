import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList=[
    {
        ID:1,
        Name:"Suresh",
        img:"https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/latest-news3-4.png"
    },
    {
        ID:2,
        Name:"Suresh",
        img:"https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/latest-news2-4.png"
    },
    {
        ID:3,
        Name:"Suresh",
        img:"https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/latest-news1-4.png"
    },
    {
        ID:4,
        Name:"Suresh",
        img:"https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/latest-news3-4.png"
    },
    {
        ID:5,
        Name:"Suresh",
        img:"https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/latest-news2-4.png"
    },
    {
        ID:5,
        Name:"Suresh",
        img:"https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/latest-news1-4.png"
    },
]

export default function Category() {
  return (
    <>
     <div className="container-fluid">
        <div className="row">
            {CategoryList.map((i)=>(
                <div className="col-lg-4">
                    <img src={i.img} alt="" />
                    <Link to={`/cat/${i.ID}`}><h3>{i.Name}</h3></Link> 
                </div>
            ))}
            
        </div>
     </div>
    </>
  )
}
