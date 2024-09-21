import React, { useEffect, useRef } from 'react';

function CityPhotos() {
  const sliderRef = useRef(null);

  // Функция для автоматической прокрутки
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const step = 2; // Шаг прокрутки (чем больше значение, тем быстрее прокрутка)

    const autoScroll = setInterval(() => {
      // Прокручиваем на шаг вправо
      scrollAmount += step;
      slider.scrollBy({ left: step, behavior: 'smooth' });

      // Если достигнут конец слайдера, возвращаемся в начало
      if (scrollAmount >= maxScroll) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0;
      }
    }, 30); // Время между шагами прокрутки

    // Очищаем интервал, если компонент размонтирован
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="city-photos">
      <h2>Достопримечательности Одессы</h2>
      <div className="photo-slider" ref={sliderRef}>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/4.jpg'} alt="Воронцовский маяк" />
          <p>Воронцовский маяк</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/04.jpg'} alt="Пассаж" />
          <p>Пассаж</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/98144759.jpg'} alt="Приморский бульвар" />
          <p>Приморский бульвар</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/museum.jpg'} alt="Музей западного искусства" />
          <p>Музей западного искусства</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/Lanzheron-beach.jpg'} alt="Пляж Ланжерон" />
          <p>Пляж Ланжерон</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/Monument-to-Duke-de-Richelieu.jpg'} alt="Памятник Дюку де Ришелье" />
          <p>Памятник Дюку де Ришелье</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/opera.jpg'} alt="Оперный театр" />
          <p>Оперный театр</p>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + '/assets/potem.jpg'} alt="Потемкинская лестница" />
          <p>Потемкинская лестница</p>
        </div>
      </div>
    </div>
  );
}

export default CityPhotos;