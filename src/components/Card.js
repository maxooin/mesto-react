function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button className="element__delete-button"></button>
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
