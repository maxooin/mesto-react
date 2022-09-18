import React, {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    api.deleteElement(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
  }

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img alt="Аватар" className="profile__photo" src={currentUser.avatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button aria-label="Edit" className="profile__edit-button" type="button"
                    onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button aria-label="Add" className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) =>
          <Card key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}/>
        )}
      </section>
    </main>
  )
}

export default Main;
