import React from 'react';

interface ArticleItemProps {
  name: string;
  price: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ name, price }) => (
  <div className="rounded-[20px] border border-[#000] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-full h-[47px] relative">
    <div className="shrink-0 rounded-[20px] bg-[#AABCDD] w-full h-full absolute left-0 top-0"></div>
    <p className="absolute left-5 top-3 text-xl font-normal text-black">{name}</p>
    <p className="absolute right-5 top-3 text-xl font-normal text-black">{price}</p>
  </div>
);

export default ArticleItem;
