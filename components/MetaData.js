import Head from 'next/head'

const  MetaData = ( props ) => {
        // <meta property="og:image" content={ props.image }/>
  return (
    <div>
      <Head>

        <title>{ props.titlePage }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:type" content="website"/>
        <meta name="description" content={ props.description }/>
        <meta property="og:title" content={ props.title }/>
        <meta name="description" content={ props.description }/>
        <meta name="keywords" content={ props.keyword }/>
        <meta property="og:url" content={ props.url }/>
        <meta property="og:description" content={ props.description }/>
      </Head>
    </div>
  )
}

export default MetaData;