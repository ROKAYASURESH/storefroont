import React from 'react'
import { Link, useParams } from 'react-router-dom'
const ProductList=[
    {
        id:1,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival7-2.png'
    },
    {
        id:2,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival8-2.png'
    },
    {
        id:3,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival1-2.png'
    },
    {
        id:4,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival2-2.png'
    },
    {
        id:5,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival3-2.png'
    },
    {
        id:6,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival4-2.png'
    },
    {
        id:7,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival5-2.png'
    },
    {
        id:8,
        Name:'Miles Morales Ultimate',
        Names:"Launch Edition",
        img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival6-2.png'
    }
]

export default function Product() {
  
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center"><h2>New Arrivals</h2>
                <p>Do not miss the current offers until the end of March.</p></div>

                {ProductList.map((r)=>(
                    <div className="col-lg-3"><img src={r.img} alt="" />
                  <Link to={`/detail/${r.id}`}> <h2>{r.Name}</h2></Link>
                    <p>{r.Names}</p> </div>
                ))}
            </div>
        </div>
    </>
  )
}
