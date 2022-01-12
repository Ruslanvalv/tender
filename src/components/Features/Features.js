import React from 'react';
import Button from '../UI/Button/Button';
import styles from './Features.module.scss';
function Features() {
  return (
    <div className={styles.Features}>
      <h1>Подготовим заявку на тендер любой сложности</h1>
      <div className={styles.AdvantagesColumns}>
        <div className={styles.AdvantagesColumns_left}>
          <ul>
            <li>
              <img src="checkMark.svg" alt="checkMark" />
              <span>
                Проведем предварительный анализ требований <br /> и документации тендера
              </span>
            </li>
            <li>
              <img src="checkMark.svg" alt="checkMark" />
              Поможем получить электронную подпись и пройти аккредитацию для участия в торгах
            </li>
            <li>
              <img src="checkMark.svg" alt="checkMark" />
              Подготовим комплект документов для участия, включая заполнение характеристик по вашему
              товару
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img src="checkMark.svg" alt="checkMark" />
              Подадим заявку на площадке, возьмем ответственность за допуск на себя
            </li>
            <li>
              <img src="checkMark.svg" alt="checkMark" />
              Поможем при участии в аукционе, согласовании и подписании контракта
            </li>
            <li>
              <img src="checkMark.svg" alt="checkMark" />
              Проведем вас через все этапы закупки и научим участвовать в торгах
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.StartPrice}>от 2 000 ₽ без процентов с победы</div>

      <Button type="blue">Получить консультацию</Button>
    </div>
  );
}

export default Features;
