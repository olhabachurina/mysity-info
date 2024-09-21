
import React from 'react';
import './App.css';
import CityInfo from './CityInfo'; // Импортируем компонент с информацией о городе
import CityPhotos from './CityPhotos'; // Импортируем компонент с фотографиями

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/fon.jpg')`, // Используем process.env.PUBLIC_URL
        backgroundSize: 'cover',                 // Фон покрывает всю область
        backgroundRepeat: 'no-repeat',           // Изображение не повторяется
        backgroundPosition: 'center center',     // Центрируем фон
        backgroundAttachment: 'fixed',           // Фон закреплен на месте
        minHeight: '100vh',                      // Минимальная высота экрана
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="content-wrapper">
        <CityInfo />
        <CityPhotos />
        {/* Добавление видео */}
        <div className="video-container">
          <video controls autoPlay loop>
            <source src={`${process.env.PUBLIC_URL}/assets/video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;