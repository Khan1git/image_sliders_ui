import React, { useState } from 'react';
import image1 from '../images/backgroun1.jpeg';
import image2 from '../images/silder2.jpeg';
import image3 from '../images/slider3.jpeg';
import image4 from '../images/slider4.jpeg';
import image5 from '../images/slider5.jpeg';
import image6 from '../images/slider6.jpeg';

import left from '../images/left.png'
import right from '../images/right.png'
import close from '../images/close.png'
import { CircleX, CircleArrowLeft, CircleArrowRight, BookImage  } from 'lucide-react'

import './css/home.css';

const images = {
  image1: { src: image1, name: 'Beach' },
  image2: { src: image2, name: 'Island' },
  image3: { src: image3, name: 'Ejypt' },
  image4: { src: image4, name: 'desert' },
  image5: { src: image5, name: 'Miami' },
  image6: { src: image6, name: 'Austrailia' },
};

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Object.keys(images).length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === Object.keys(images).length ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div id="modal" style={{ display: modalVisible ? 'flex' : 'none' }}>
        <button id="close" onClick={closeModal}><CircleX /></button>
        <div className="pic">
          <span className='prev' onClick={prevImage}><CircleArrowLeft  size={32} /></span>
          <img id="pic" src={images[Object.keys(images)[currentImageIndex]].src} alt="" />
          <span className='next' onClick={nextImage}><CircleArrowRight size={32} /></span>
        </div>
        <span className="name">. {images[Object.keys(images)[currentImageIndex]].name} .</span>
      </div>
      <div id="home">
        <div className="img1">
          <span> <BookImage size={15} color="black" strokeWidth={0.5} />view 11 photos</span>
          <img src={image1} alt="" onClick={() => openModal(0)} />
        </div>
        <div className="img2">
          <img src={image2} className="image1" alt="" onClick={() => openModal(1)} />
          <img src={image3} className="image2" alt="" onClick={() => openModal(2)} />
        </div>
      </div>
    </>
  );
};

export default Home;