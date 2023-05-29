import React from 'react'
import { useParams } from 'react-router-dom';
const ProductList=[
  {
      id:1,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival7-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:2,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival8-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:3,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival1-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:4,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival2-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:5,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival3-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:6,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival4-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:7,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival5-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
      id:8,
      Name:'Miles Morales Ultimate',
      Names:"Launch Edition",
      img:'https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/arrival6-2.png',
      Details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }
]

export default function Detail() {
    let {id}=useParams();
    const found=ProductList.find(element=>element.id==id);

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <img src={found.img} alt="" />
                </div>
                <div className="col-lg-7">
                    <h1>{found.Name}</h1>
                    <p>{found.Names}</p>
                    <p>{found.Details}</p>
                </div>
            </div>
        </div>
    </>
  )
}
