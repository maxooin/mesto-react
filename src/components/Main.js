function Main() {

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img alt="Аватар" className="profile__photo" src="<%=require('./image/avatar.jpg')%>"/>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button aria-label="Edit" className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button aria-label="Add" className="profile__add-button" type="button"></button>
        </section>

        <section className="elements">
        </section>
      </main>
    </>
  )
}

export default Main;
