function Main(props) {

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img alt="Аватар" className="profile__photo" src="<%=require('./image/avatar.jpg')%>"/>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button aria-label="Edit" className="profile__edit-button" type="button"
                      onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
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
