const Card = ({ image, name, flipped, onClick }) => (
  <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
    <div className="card-front">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
    <div className="card-back" alt="Card Back" />
  </div>
);

export default Card;
