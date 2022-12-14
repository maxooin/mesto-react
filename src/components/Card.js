import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`element__delete-button ${isOwn ? 'element__delete-button' : 'element__delete-button_hidden'}`)
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`element__like-button ${isLiked ? 'element__like-button_active' : ''}`);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return (
    <article className="element">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button className={cardLikeButtonClassName}
                  type="button"
                  onClick={handleLikeClick}></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
