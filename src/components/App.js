import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

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

  function handleUpdateAvatar(item) {
    api.changeAvatar(item)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopup();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardDelete(card) {
    api.deleteElement(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleAddPlaceSubmit(item) {
    api.addNewElement(item)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopup();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => {
        console.log(err)
      })

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
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}/>
        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen}
                          onClose={closeAllPopup}
                          onUpdateUser={handleUpdateUser}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopup}
                       onAddPlace={handleAddPlaceSubmit}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                         onClose={closeAllPopup}
                         onUpdateAvatar={handleUpdateAvatar}/>

        <PopupWithForm title='???? ???????????????'
                       name='delete-form'
                       textBtn='????'/>

        <ImagePopup card={selectedCard}
                    onClose={closeAllPopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
