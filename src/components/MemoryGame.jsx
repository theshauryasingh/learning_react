import {useState, useEffect} from 'react';
import shuffle from 'lodash/shuffle';
import './MemoryGame.css';

//https://reactpractice.dev/solution/how-to-build-a-memory-game/

function MemoryGame({images}) {
    const [cards, setCards] = useState(shuffle([...images, ...images]));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

   useEffect(() => {
       // Shuffle cards when component mounts
       setCards(shuffle([...images, ...images]));
     }, [images])

  const handleCardClick = (index) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(index) || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };


    return ( <div className="memory-game-box">
		{cards.map((card, index) => (
			<div key={index} onClick={() => handleCardClick(index)} className={`memory-game-div ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''}`}>
			{ flippedCards.includes(index) || matchedCards.includes(index) ? (
				<img src={card} alt={`memory game ${index}`} className = "memory-game-img" />
			) : null }
			</div>
		))}
	</div>
	);
}

export default MemoryGame
