import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

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

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="app">
      <Header/>
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}/>
      <Footer/>

      <PopupWithForm title='Редактировать профиль' name='edit-form' textBtn='Сохранить' isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopup}>
        <input className="popup__input popup__input_value_name"
               name="name"
               placeholder="Имя"
               type="text"
               minLength="2"
               maxLength="40"
               required/>
        <span className="popup__error name-error"></span>

        <input className="popup__input popup__input_value_job"
               name="job"
               placeholder="О себе"
               type="text"
               minLength="2"
               maxLength="200"
               required/>
        <span className="popup__error job-error"></span>
      </PopupWithForm>

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

    </div>
  );
}

export default App;
