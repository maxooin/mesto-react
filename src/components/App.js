import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(item) {
    api.setUserInfoApi(item.name, item.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopup();
      })
      .catch((res) => {
        console.log(res)
      })
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  useEffect(() => {
    api.getUserInfoApi()
      .then((userProperty) => {
        setCurrentUser(userProperty)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}/>
        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} onUpdateUser={handleUpdateUser}/>

        <PopupWithForm title='Новое место' name='add-form' textBtn='Сохранить' isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopup}>
          <input className="popup__input popup__input_value_title"
                 name="title"
                 placeholder="Название"
                 type="text"
                 minLength="2"
                 maxLength="30"
                 required/>
          <span className="popup__error title-error"></span>

          <input className="popup__input popup__input_value_url"
                 name="url"
                 placeholder="Ссылка"
                 type="url"
                 required/>
          <span className="popup__error url-error"></span>
        </PopupWithForm>

        <PopupWithForm title='Обновить аватар' name='avatar-form' textBtn='Сохранить' isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopup}>
          <input className="popup__input popup__input_value_url"
                 name="url"
                 placeholder="Ссылка"
                 type="url"
                 required/>
          <span className="popup__error url-error"></span>
        </PopupWithForm>

        <PopupWithForm title='Вы уверены?' name='delete-form' textBtn='Да'/>

        <ImagePopup card={selectedCard} onClose={closeAllPopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
