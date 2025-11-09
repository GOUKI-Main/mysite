export type ZennArticle = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  published_at: string;
  body_updated_at: string;
  created_at: string;
  emoji: string;
  type: string;
  topics: string[];
  published: boolean;
  path: string;
  body_letters_count: number;
  article_type: string;
  liked_count: number;
};

export type ZennArticlesResponse = {
  articles: ZennArticle[];
  next_page: number | null;
};
