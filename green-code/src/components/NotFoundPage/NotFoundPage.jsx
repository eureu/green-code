import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"; // Импортируйте CSS файл для стилей

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <p className="not-found__description">
        Извините, но запрашиваемая вами страница не существует.
      </p>
      <Link to="/" className="not-found__link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
