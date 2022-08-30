import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  return (
    <div className="App">
      <Header/>
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}/>
      <Footer/>

      <PopupWithForm title='Редактировать профиль' name='edit-form' textBtn='Сохранить' isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopup}>
        <input className="popup__input popup__input_value_name" name="name" placeholder="Имя"
               type="text" minLength="2"
               maxLength="40" required/>
        <span className="popup__error name-error"></span>

        <input className="popup__input popup__input_value_job" name="job" placeholder="О себе" type="text"
               minLength="2"
               maxLength="200" required/>
        <span className="popup__error job-error"></span>
      </PopupWithForm>

      <PopupWithForm title='Новое место' name='add-form' textBtn='Сохранить' isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopup}>
        <input className="popup__input popup__input_value_title" name="title" placeholder="Название" type="text"
               minLength="2" maxLength="30" required/>
        <span className="popup__error title-error"></span>

        <input className="popup__input popup__input_value_url" name="url" placeholder="Ссылка" type="url"
               required/>
        <span className="popup__error url-error"></span>
      </PopupWithForm>

      <PopupWithForm title='Обновить аватар' name='avatar-form' textBtn='Сохранить' isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopup}>
        <input className="popup__input popup__input_value_url" name="url" placeholder="Ссылка" type="url"
               required/>
        <span className="popup__error url-error"></span>
      </PopupWithForm>

      <div className="popup popup_photo">
        <figure className="popup__figure">
          <button aria-label="Close" className="popup__close-button popup__close-button_type_photo"></button>
          <img className="popup__image" src="#" alt=""/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>

      <div className="popup popup_delete">
        <div className="popup__container">
          <button aria-label="Close" className="popup__close-button popup__close-button_type_delete"
                  type="button"></button>
          <h2 className="popup__heading">Вы уверены?</h2>
          <form className="popup__form popup__form_delete" name="popup-delete-form" noValidate>
            <button className="popup__submit-button" type="submit">Да</button>
          </form>
        </div>
      </div>

      <template className="template-element">
        <article className="element">
          <button className="element__delete-button"></button>
          <img className="element__image" src="#" alt=""/>
          <div className="element__info">
            <h2 className="element__title"></h2>
            <div className="element__likes">
              <button className="element__like-button" type="button"></button>
              <p className="element__like-count"></p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
