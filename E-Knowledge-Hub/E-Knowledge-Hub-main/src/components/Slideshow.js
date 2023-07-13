import React from 'react'
import './Slideshow.css'
import test3 from './test3.jpeg'
import test from './test.jpeg'
import test2 from './test2.jpeg'
import col from './coll.jpeg'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

const imgs = [col, test3, test2, test]; 
  const delay = 3000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgs.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
          ><img src={imgs[index]} alt="" className='slide'/></div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow