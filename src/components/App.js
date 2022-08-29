import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>

      <div className="popup popup_edit-form">
        <div className="popup__container">
          <button aria-label="Close" className="popup__close-button popup__close-button_type_edit"
                  type="button"></button>
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form name="popup-edit-form" className="popup__form popup__form_edit" noValidate>

            <input className="popup__input popup__input_value_name" name="name" placeholder="Имя"
                   type="text" minLength="2"
                   maxLength="40" required/>
            <span className="popup__error name-error"></span>

            <input className="popup__input popup__input_value_job" name="job" placeholder="О себе" type="text"
                   minLength="2"
                   maxLength="200" required/>
            <span className="popup__error job-error"></span>

            <button aria-label="Submit" className="popup__submit-button" type="submit">Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_add-form">
        <div className="popup__container">
          <button aria-label="Close" className="popup__close-button popup__close-button_type_add"
                  type="button"></button>
          <h2 className="popup__heading">Новое место</h2>
          <form name="popup-add-form" className="popup__form popup__form_add" noValidate>

            <input className="popup__input popup__input_value_title" name="title" placeholder="Название" type="text"
                   minLength="2" maxLength="30" required/>
            <span className="popup__error title-error"></span>

            <input className="popup__input popup__input_value_url" name="url" placeholder="Ссылка" type="url"
                   required/>
            <span className="popup__error url-error"></span>

            <button aria-label="Submit" className="popup__submit-button" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_photo">
        <figure className="popup__figure">
          <button aria-label="Close" className="popup__close-button popup__close-button_type_photo"></button>
          <img className="popup__image" src="#" alt=""/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <button aria-label="Close" className="popup__close-button popup__close-button_type_avatar"
                  type="button"></button>
          <h2 className="popup__heading">Обновить аватар</h2>
          <form className="popup__form popup__form_avatar" name="popup-avatar-form" noValidate>
            <input className="popup__input popup__input_value_url" name="url" placeholder="Ссылка" type="url"
                   required/>
            <span className="popup__error url-error"></span>
            <button aria-label="Submit" className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
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
