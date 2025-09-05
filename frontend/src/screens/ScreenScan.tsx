import React from 'react';
import ArticleItem from '../components/ArticleItem/Article';

const ScreenScan: React.FC = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen min-w-screen text-white overflow-auto">
      {/* Artículo de prueba */}
      <ArticleItem name="Article 1" price="$1.50" />
<ArticleItem name="Article 2" price="$2.00" />

    </div>
  );
};

export default ScreenScan;
