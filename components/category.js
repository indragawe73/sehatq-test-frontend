import Link from 'next/link'

import { useEffect, useState } from 'react'

import '../css/home.css'

// export default function Category() {
const Category = ( props ) => {
  
  const { item } = props;

  // [item, setItem] = useState(null)
  // setItem(props)

  console.log('props', props)
  // const item = this.props;

  return (

      <main>
        
        {item ?

          item.map((itm, idx) =>
            {
              return(
                <div className="wrap_list_category" key={itm.id}>
                  
                  <Link as={`/detailPage/${itm.name}-${itm.id}`} href={`/post?id=${itm.id}`}>
                    <p key={itm.id}>{itm.imageUrl}</p>
                    <p key={itm.id}>{itm.name}</p>
                  </Link>
                  
                </div>

              )
            }
          )

          :<p>null</p>
        }

      </main>
  )
}

export default Category;


                // <img src={item.imageUrl} />