import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './FullRequest.module.scss';
import SendRequest from './SendRequest/SendRequest';
function FullRequest() {
  const [deal, setDeal] = useState({ name: '', email: '', phone: '' });

  const [sendRequest, setSendRequset] = useState(false);
  const [valid, setValid] = useState(false);
  const setName = (event) => {
    setValid(false);
    setDeal({ ...deal, name: event.target.value });
  };
  const setEmail = (event) => {
    setValid(false);
    setDeal({ ...deal, email: event.target.value });
  };
  const setPhone = (event) => {
    setValid(false);
    setDeal({ ...deal, phone: event.target.value });
  };

  const btnClickHandler = () => {
    if (deal.name && deal.email && deal.phone) setSendRequset(true);
    else setValid(true);
  };

  return sendRequest ? (
    <SendRequest />
  ) : (
    <div className={styles.FullRequest}>
      <div className={styles.form}>
        <h1>Оставьте заявку</h1>
        <h3>на тендерное сопровождение</h3>
        <label>
          <input
            type="text"
            id="Name"
            placeholder="Имя"
            onChange={setName}
            className={valid ? styles.InputInvalid : styles.InputValid}
          />
          {valid ? <span>Как к вам обращаться</span> : null}
        </label>
        <label>
          <input
            type="text"
            id="Mail"
            placeholder="Электронная почта"
            onChange={setEmail}
            className={valid ? styles.InputInvalid : styles.InputValid}
          />
          {valid ? <span>Проверьте написание адреса</span> : null}
        </label>
        <label>
          <input
            type="text"
            id="Phone"
            placeholder="Телефон"
            onChange={setPhone}
            className={valid ? styles.InputInvalid : styles.InputValid}
          />
          {valid ? <span>Проверьте написание телефона</span> : null}
        </label>
        <Button onClick={btnClickHandler} type="blue">
          Получить консультацию
        </Button>
        <p>
          Нажимая «Получить консультацию», вы соглашаетесь с условиями <br />{' '}
          <a href="#">Пользовательского соглашения</a>
        </p>
      </div>
    </div>
  );
}

export default FullRequest;
