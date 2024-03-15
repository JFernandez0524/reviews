import { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  const [index, setIndex] = useState(0);

  console.log(reviews[index]);
  const { name, job, image, text } = reviews[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return 0;
    }
    if (index > reviews.length - 1) {
      return reviews.length - 1;
    }
    return index;
  };

  const previousPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const getRandomPerson = () => {
    const randomPerson = Math.floor(
      Math.random() * (reviews.length - 1 - 0) + 0
    );
    console.log(randomPerson);
    setIndex(randomPerson);
  };

  return (
    <main>
      <section className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h2 className='author'>{name}</h2>
        <h4 className='job'>{job}</h4>
        <p className='info'>{text}</p>
      </section>
      <div className='btn-container'>
        <button type='button' className='btn prev-btn' onClick={previousPerson}>
          <FaChevronLeft />
        </button>
      </div>
      <div className='btn-container'>
        <button type='button' className='btn next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <div className='btn-container'>
        <button
          type='button'
          className='btn btn-block'
          onClick={getRandomPerson}
        >
          Random Person
        </button>
      </div>
    </main>
  );
};
export default App;
