import {useEffect, useState} from "react";
import api from "../utils/api";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfoApi()
      .then((userProperty) => {
        setUserName(userProperty.name);
        setUserDescription(userProperty.about);
        setUserAvatar(userProperty.avatar);
      })
  })

  return (
    <>
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
        </section>
      </main>
    </>
  )
}

export default Main;
