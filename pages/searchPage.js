import Link from 'next/link'
import MetaData from '../components/MetaData.js'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchHomePage } from '../store/actions/homeAction'

import '../css/home.css'

export default function SearchPage() {
  
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState(null)


  let listCategory = null;
  let listProduct = null;
  const { homePage } = useSelector( state => state.homePage );
  
  
  if(homePage) {
    listCategory = homePage[0].data.category
    listProduct = homePage[0].data.productPromo
  }

  useEffect (() => {
    dispatch(fetchHomePage())
  }, [])
  
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
                <input
                  className="search_field2"
                  name="serach"
                  placeholder="please input search..."
                  onChange={(e) => setInputVal(e.target.value)} 
                />

                <Link as={`/home-page`} href={`/homePage`}>
                    <div className="img_back">x</div>
                </Link>

                <div className="img_search2"></div>
            </div>
            {inputVal ?
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
                    <h2>Loading...</h2>
                }
            </div>
            :null }
        </main>
    </div>    
  )
}