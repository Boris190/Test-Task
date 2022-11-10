import Head from 'next/head'
import Api from '../services'
import MainContent from '../components/main'
import Users from '../components/users'

const Home = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content='Page Content Titile' />
      </Head>
      <section className='mainSection'>
        <MainContent data={data.video} />
        <Users data={data.users} />
      </section>
    </>
  )
}


export default Home;

export async function getServerSideProps() {
  const res = await fetch(`https://tz.smart-ui.pro/`)
  const data = await res.json()

  return { props: { data } }
}
