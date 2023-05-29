import React from 'react';
import { useParams } from 'react-router-dom';
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

export default function Cat() {
   let{ID}=useParams();
   const fort=CategoryList.find(element=>element.ID==ID);
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={fort.img} alt="" />
                   
                
                </div>
                <div className="col-lg-6">
                    {fort.Name}
                </div>
            </div>
        </div>
    </>
  )
}
