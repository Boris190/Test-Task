import Portfolio from '../components/portfolio'
import Api from '../services'
import Head from 'next/head'

const Works = ({ item, content, categories, seo }) => {

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <Portfolio item={item} content={content} categories={categories} />
    </>
  )
}


export default Works;

export async function getStaticProps() {
  const q1 = Api.getItem({ limit: 0, category: null })
  const q2 = Api.getCategories()
  const q3 = Api.getContent()
  const q4 = Api.getSeo()


  const [item, categories, content, seo] = await Promise.all([q1, q2, q3, q4])

  return {
    props: {
      item: item.data,
      categories: categories.data,
      content: content,
      seo: seo.works,
    }
  }
}


