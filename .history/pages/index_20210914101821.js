import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home(props) {
console.log(props)
  return (
    <div className="">
      <Head>
        <title>Hobbit Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results />
    </div>
  )
}


export async function getServerSideProps(context) {
  const gener = context.query.gener;
  const request = await fetch(`https://api.themoviedb.org/3${requests[gener]?.url || requests.fetchTrending.url}`).then((res) =>res.json())
  return {
    props: {
      result: request.results
    }
  }
}