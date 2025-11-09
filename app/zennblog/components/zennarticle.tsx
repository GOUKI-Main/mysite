import React from 'react'
import { ZennArticle } from '@/app/types/zenn'

type ZennArticleCardProps = {
  article: ZennArticle
}

const ZennArticleCard = ({ article }: ZennArticleCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <a
      href={`https://zenn.dev${article.path}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="h-full bg-emerald-950/30 border border-emerald-900 rounded-lg p-6 transition-all duration-300 hover:bg-emerald-950/50 hover:border-emerald-700/70 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-1 flex flex-col">
        {/* Emoji */}
        <div className="text-5xl mb-4">{article.emoji}</div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-emerald-300 transition-colors">
          {article.title}
        </h3>

        {/* Topics */}
        {article.topics && article.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Meta Info */}
        <div className="mt-auto pt-4 border-t border-emerald-900/30 flex justify-between items-center text-sm text-emerald-800 dark:text-emerald-400/70">
          <span>{formatDate(article.published_at)}</span>
          <div className="flex items-center gap-3">
            <span>{article.body_letters_count.toLocaleString()}字</span>
            <span>♥ {article.liked_count}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ZennArticleCard