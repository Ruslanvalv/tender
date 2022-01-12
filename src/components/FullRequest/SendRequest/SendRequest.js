import React from 'react';
import styles from './SendRequest.module.scss';
function SendRequest() {
  return (
    <div className={styles.SendRequest}>
      <div className={styles.Form}>
        <img src="request.png" alt="request" />
        <h1>Заявка отправлена</h1>
        <p>
          В ближайшее время с вами свяжется юрист Тендерплана для консультации по тендеру и условиям
          участия.
        </p>
        <div className={styles.Button}>
          {' '}
          <a href="#">Ответим на любые ваши вопросы</a>
        </div>
      </div>
      <div className={styles.Rules}>
        Нажимая «Подготовить заявку», вы соглашаетесь с условиями{' '}
        <span>Пользовательского соглашения</span>{' '}
      </div>
    </div>
  );
}

export default SendRequest;
