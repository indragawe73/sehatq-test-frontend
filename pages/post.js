import '../css/detail.css'

import Link from 'next/link'
import MetaData from '../components/MetaData.js'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchDetail } from '../store/actions/postAction'
import { buyItems, likeItem } from '../store/actions/detailAction'

import Router, { useRouter } from 'next/router'

const Post = ( props ) => {

	const dispatch = useDispatch();
	const [love, setLove] = useState(false)
	
	let detail = null;
	let shareUrl = 'http://www.capitalfinancial.co.id/';

	const router = useRouter()
	detail = JSON.parse(router.query.keyword);
	console.log('router.query', detail);

	const { wislishAdd } = useSelector( state => state.wislishAdd );
	const arrTwo = new Array();
	
	if(wislishAdd){
		arrTwo.push(wislishAdd)
	}
	arrTwo.push(detail)
	console.log('wislishAdd', arrTwo.flat())

	function likeButton () {
		if(!love){
    		dispatch(likeItem(arrTwo.flat()))
	    	alert('success add product to Purchased history')
		}
		setLove(true)
	}

	const { detailAdd } = useSelector( state => state.detailAdd );
	const arr = new Array();

	if(detailAdd){
		arr.push(detailAdd)
	}

	arr.push(detail)
	console.log('detailAdd', arr.flat())
	
	function buy () {
    	dispatch(buyItems(arr.flat()))
		alert('success add product to Purchased history')
	}

	return (
		<div className="wrap_detail">
			<MetaData 
				titlePage="Detail Page"
				description="Detail Page"
				title="Detail Page"
				keyword="test test test test test test test test test test test test"
				url="https://test.com"
			/>
			<div>
				<div className="wrap_image">
					<div className="cover">
			            <div onClick={() => Router.back()}>
		             		<img className="img_back3" src="https://image.flaticon.com/icons/png/512/0/340.png" />
		             	</div>
			            
						<img onClick={()=> window.open("https://web.whatsapp.com/send?text=www.google.com", "_blank")} className="img_share" src="https://cdn0.iconfinder.com/data/icons/feather/96/591236-share-512.png" />
			           	<img className="img_category3" src={detail.imageUrl} />
                        
                        {love ?
	             			<img onClick={() => likeButton()} className="img_love3 love_active" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/heart-favourite-favorite-love-128.png" />
	             		   	: <img onClick={() => likeButton()} className="img_love3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFvBR2GZ-xLGenF2q1mX_uxD4xtYLB3Q4L4FVwwo8MXpL-EbAi&usqp=CAU" />
                        } 
					</div>

				</div>
				<div className="wrap_content3">
					<div className="wrap_price">{detail && detail.price}</div>
					<h3 className="detail_title">{detail && detail.title}</h3>
					<p className="">{detail.description}</p>
				</div>

				<div className="wrap_button">
					<p className="info_button">product add to history</p>
					<div onClick={() => buy()} className="add_button">
						Buy
					</div>
				</div>

			</div>
		</div>
	)
};  

Post.getInitialProps = async (context) => {
	const pathId = context.query.id

	return {
		pathId: pathId
	}
};

export default Post;
