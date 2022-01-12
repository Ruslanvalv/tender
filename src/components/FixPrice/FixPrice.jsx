import React from 'react';
import styles from './FixPrice.module.scss';

const FixPrice = React.forwardRef((props, ref) => {
  const cards = [
    {
      title: 'Текущий ремонт нежилых помещений',
      orderPrice: '1 766 056',
      evaluationPrice: '4 000',
    },
    {
      title: 'Услуги по обслуживанию автомобилей',
      orderPrice: '2 700 580',
      evaluationPrice: '5 000',
    },
    {
      title: 'Поставка канцтоваров',
      orderPrice: '569 620',
      evaluationPrice: '3 000',
    },
  ];

  return (
    <div ref={ref} className={styles.FixPrice}>
      <div className={styles.ColumnLeft}>
        <h1 className={styles.Header}>Фиксированная цена</h1>
        <div className={styles.MainText}>
          Вы заранее знаете стоимость услуги и не доплачиваете проценты после победы.
        </div>
      </div>
      <div
        className={props.status ? styles.ColumnRight + ' ' + styles.Animation : styles.ColumnRight}>
        {cards.map((elem, index) => {
          return (
            <div key={index} className={styles.Card}>
              <h2>{elem.title}</h2>
              <div className={styles.Prices}>
                <div className={styles.LeftPrice}>
                  <p>Цена контракта</p>
                  <span>{elem.orderPrice} ₽</span>
                </div>
                <div className={styles.RightPrice}>
                  <p>Стоимость подготовки</p>
                  <span>{elem.evaluationPrice} ₽</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default FixPrice;
