import Link from 'next/link'
import MetaData from '../components/MetaData.js'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import '../css/home.css'

export default function HistoryPage() {
  
  let listProduct = null;
  const { detailAdd } = useSelector( state => state.detailAdd );
  
  if(detailAdd) {
    listProduct = detailAdd
  }
  
  return (
    <div className="container">
        <MetaData 
            titlePage="Home Page"
            description="this is a home page of ecommerce"
            title="ecommerce name"
            keyword="test test test test test test test test test test test test test test test test test test test test test test test"
            url="https://test.com"
            />
        <main>
            <div className="wrap_search2">
                

                <Link as={`/home-page`} href={`/homePage`}>
                    <img className="img_back3" src="https://image.flaticon.com/icons/png/512/0/340.png" />
                </Link>
                <h3 className="title_histore">Purchased History</h3>

            </div>
            <div className="wrap_product2">
                {listProduct ?
                    listProduct.map((item, index) => {
                        return (
                        <div key={index}>
                            <Link as={`/detailPage/${item.name}-${item.id}`} href={{ pathname: '/post', query: { keyword: JSON.stringify(item) } }}>
                            <div className="wrap_list_product2">
                                <img className="img_product2" src={item.imageUrl} />
                                <div className="right_side">
                                  <p className="title_product2">{item.title}</p>
                                  <p className="price_product2">{item.price}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        )
                    })
                    :
                    <h2>No Item Available...</h2>
                }
            </div>
        </main>
    </div>    
  )
}