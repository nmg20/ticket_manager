import React from "react";
import ArticleItem from "./ArticleItem";
import type { Article } from "../types";

interface ArticleItemListProps {
  articles: Article[];
  onArticleClick?: (id: number) => void;
}

const ArticleItemList: React.FC<ArticleItemListProps> = ({ articles, onArticleClick }) => {
  return (
    <div className="flex flex-col gap-4">
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClick={onArticleClick}
        />
      ))}
    </div>
  );
};

export default ArticleItemList;
