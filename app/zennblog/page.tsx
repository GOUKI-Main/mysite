import React from 'react'
import { ZennArticlesResponse } from '@/app/types/zenn'
import ZennArticleCard from './components/zennarticle'

async function getZennArticles() {
  const allArticles = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=gouki_main&order=latest&page=${page}`,
      {
        next: { revalidate: false } // Static generation
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch articles')
    }

    const data = await res.json() as ZennArticlesResponse
    allArticles.push(...data.articles)

    // next_pageがnullなら終了
    hasNextPage = data.next_page !== null
    page++
  }

  return { articles: allArticles, next_page: null } as ZennArticlesResponse
}

const Zennblog = async () => {
  const data = await getZennArticles()
  const articles = data.articles

  return (
    <div className='h-full w-full p-6 md:p-10 overflow-y-auto'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='my-20 '>
          <h1 className='text-4xl font-bold mb-2'>Zenn Blogs</h1>
          <p className='text-emerald-900 dark:text-emerald-400/70'>GOUKIの記事一覧</p>
        </div>

        {/* Articles Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map((article) => (
            <ZennArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className='text-center py-20 text-emerald-400/50'>
            記事が見つかりませんでした
          </div>
        )}
      </div>
    </div>
  )
}

export default Zennblog