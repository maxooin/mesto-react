import {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfoApi()
      .then((userProperty) => {
        setUserName(userProperty.name);
        setUserDescription(userProperty.about);
        setUserAvatar(userProperty.avatar);
      })
      .catch(err => {
        console.log(err)
      })
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
          <img alt="Аватар" className="profile__photo" src={userAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button aria-label="Edit" className="profile__edit-button" type="button"
                    onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button aria-label="Add" className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) =>
          <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
        )}
      </section>
    </main>
  )
}

export default Main;
