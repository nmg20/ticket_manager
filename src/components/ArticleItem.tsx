import React from "react";

export interface Article {
  id: number;
  name: string;
  price: number;
}

interface ArticleItemProps {
  article: Article;
  onClick?: (id: number) => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article, onClick }) => {
  return (
    <div
      className="flex justify-between items-center p-4 bg-[#AABCDD] rounded-xl shadow-md cursor-pointer hover:bg-[#91AEDD] transition"
      onClick={() => onClick?.(article.id)}
    >
      <span className="font-bold text-lg">{article.name}</span>
      <span className="font-semibold text-lg">{article.price.toFixed(2)} $</span>
    </div>
  );
};

export default ArticleItem;
