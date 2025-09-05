import React from "react";
import type { Article, Profile } from "../types"; 

export interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // botón aceptar
  profiles: Profile[];
  selectedProfiles: number[];
  onSelectProfile: (profileId: number) => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onConfirm,
  profiles,
  selectedProfiles,
  onSelectProfile,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-6 rounded-xl w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{article.name}</h2>
        <p className="mb-4">Price: {article.price.toFixed(2)} $</p>

        <div className="flex flex-col gap-2">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              className={`p-2 rounded ${
                selectedProfiles.includes(profile.id)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => onSelectProfile(profile.id)}
            >
              {profile.name}
            </button>
          ))}
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white p-2 rounded"
          >
            Aceptar
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
