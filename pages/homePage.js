import Link from 'next/link'
import MetaData from '../components/MetaData.js'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchHomePage } from '../store/actions/homeAction'
import { likeItem } from '../store/actions/detailAction'

import '../css/home.css'

export default function HomePage() {
  
  const dispatch = useDispatch();
  const [love, setLove] = useState(false)

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


  const { wislishAdd } = useSelector( state => state.wislishAdd );
  const arrTwo = new Array();
  
  if(wislishAdd){
      arrTwo.push(wislishAdd)
  }

  function likeButton (idx) {
      arrTwo.push(listProduct[idx])
      dispatch(likeItem(arrTwo.flat()))
      alert('success add product to Purchased history')
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
            <div className="wrap_menu">
                <p className="list_menu">Home</p>
                <p className="list_menu">Feed</p>

                <Link href={`/historyPage`}>
                    <p className="list_menu">Cart</p>
                </Link>
                <Link href={`/wislishPage`}>
                    <p className="list_menu">Profile</p>
                </Link>
            </div>
            <div className="wrap_search">
                <Link as={`/search-page`} href={`/searchPage`}>
                    <div>
                        <input
                          className="search_field"
                          name="serach"
                          placeholder="please input search..."
                        />
                        <div className="img_search"></div>
                    </div>
                </Link>
            </div>
            <div className="wrap_category">
                <div className="wrap_scroll">
                    {listCategory ?
                      listCategory.map((item, index) => {
                        return (
                        <div key={index}>

                            <div className="wrap_list_category">
                                <img className="img_category" src={item.imageUrl} />
                                <p className="title_category">{item.name}</p>
                            </div>
                        </div>
                        )
                      })
                      :
                      <h2>Loading...</h2>
                    }
                </div>
            </div>

            <div className="wrap_product">
                {listProduct ?
                    listProduct.map((item, index) => {
                        return (
                        <div key={index}>
                            <div className="wrap_list_product">
                                <div className="ic_love">

                                {love ?
                                    <img onClick={() => likeButton(index)} className="img_product love_active" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/heart-favourite-favorite-love-128.png" />
                                    : <img onClick={() => likeButton(index)} className="img_product" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFvBR2GZ-xLGenF2q1mX_uxD4xtYLB3Q4L4FVwwo8MXpL-EbAi&usqp=CAU" />
                                } 

                                </div>
                                <Link as={`/detailPage/${item.name}-${item.id}`} href={{ pathname: '/post', query: { keyword: JSON.stringify(item) } }}>
                                    <img className="img_product" src={item.imageUrl} />
                                </Link>
                                <p className="title_product">{item.title}</p>
                            </div>
                        </div>
                        )
                    })
                    :
                    <h2>Loading...</h2>
                }
            </div>
        </main>
    </div>    
  )
}
                          