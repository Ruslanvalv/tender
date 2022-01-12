import React from 'react';
import styles from './OtherGifts.module.scss';
function OtherGifts() {
  return (
    <div className={styles.OtherGifts}>
      <h1>Вы также получите</h1>
      <h3>профессиональный инструмент для поиска и анализа тендеров</h3>
      <ul>
        <li>
          <img src="checkMarkGreen.svg" alt="checkMark" />
          <span>Доступ в систему Тендерплан на 14 дней бесплатно</span>
        </li>
        <li>
          <img src="checkMarkGreen.svg" alt="checkMark" />
          Помощь в поиске интересных тендеров
        </li>
        <li>
          <img src="checkMarkGreen.svg" alt="checkMark" />
          Помощь в участии и победах в торгах
        </li>
      </ul>
    </div>
  );
}

export default OtherGifts;
