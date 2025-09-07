import React, { useState } from "react";
import ArticleItemList from "../components/ArticleItemList";
import ArticleModal from "../components/ArticleModal";
import type { Article, Profile } from "../types";

const profiles: Profile[] = [
  { id: 1, name: "Perfil A" },
  { id: 2, name: "Perfil B" },
  { id: 3, name: "Perfil C" },
];

const articles: Article[] = [
  { id: 1, name: "Articulo 1", price: 1.5 },
  { id: 2, name: "Articulo 2", price: 2.0 },
  { id: 3, name: "Articulo 3", price: 3.25 },
];

const ScreenScan: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfiles, setSelectedProfiles] = useState<number[]>([]);

  const handleArticleClick = (id: number) => {
    const article = articles.find((a) => a.id === id) || null;
    setSelectedArticle(article);
    setSelectedProfiles([]); // reset por cada artículo
    setIsModalOpen(true);
  };

  const handleSelectProfile = (profileId: number) => {
    setSelectedProfiles((prev) =>
      prev.includes(profileId)
        ? prev.filter((id) => id !== profileId)
        : [...prev, profileId]
    );
  };

  const handleConfirm = () => {
    console.log(
      `Perfiles seleccionados para ${selectedArticle?.name}:`,
      selectedProfiles
    );
    setIsModalOpen(false);
  };

  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center py-10 bg-gray-900 min-h-screen">
      <div className="bg-[#D9D9D9] rounded-xl w-[500px] p-6 shadow-lg relative">
        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Supermarket Placeholder
        </h1>
        {/* Fecha */}
        <p className="text-center mb-6">Date: 2025-09-05</p>

        {/* Lista de artículos */}
        <ArticleItemList articles={articles} onArticleClick={handleArticleClick} />

        {/* Total */}
        <div className="mt-6 p-4 bg-[#758ACE] rounded-2xl text-white font-bold text-lg text-right">
          Total: {articles.reduce((sum, a) => sum + a.price, 0).toFixed(2)} $
        </div>
      </div>

      {/* Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        profiles={profiles}
        selectedProfiles={selectedProfiles}
        onSelectProfile={handleSelectProfile}
      />
    </div>
  );
};

export default ScreenScan;
