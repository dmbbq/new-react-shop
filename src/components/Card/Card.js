import { useState } from "react";
import s from "./Card.module.scss";
import ContentLoader from "react-content-loader";

function Card({
  id,
  title,
  imageUrl,
  price,
  onClickFav,
  onClickAdd,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onClickAdd({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onClickFav({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#b0b0b0"
          foregroundColor="#a3a3a3"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={s.favorite} onClick={onClickFavorite}>
            <img
              alt="unliked"
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
            />
          </div>
          <img width='100%' height={135} src={imageUrl} alt="unliked" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <p>Цена:</p>
              <b>{price} руб</b>
            </div>
            <img
              className={s.plus}
              onClick={onClickPlus}
              src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="plus"
            />
          </div>{" "}
        </>
      )}
    </div>
  );
}
export default Card;
