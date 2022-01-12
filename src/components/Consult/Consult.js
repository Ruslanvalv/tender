import React from 'react';
import styles from './Consult.module.scss';

const Consult = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.Consult}>
      <div className={styles.ColumnLeft}>
        <h1 className={styles.Header}>Проконсультируем на всех этапах закупки</h1>
        <div className={styles.MainText}>
          Научим на практике готовить простые заявки самостоятельно, покажем как подавать заявку на
          площадке и участвовать в торгах.
        </div>
      </div>
      <div
        className={props.status ? styles.ColumnRight + ' ' + styles.Animation : styles.ColumnRight}>
        <div className={styles.ZigZag}>
          <svg
            width="18"
            height="68"
            viewBox="0 0 18 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 66L2 50L16 34L2 18L16 2"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="18"
            height="68"
            viewBox="0 0 18 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 66L2 50L16 34L2 18L16 2"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.LawyerMessage}>
          <div className={styles.LawyerMessage_header}>
            <div className={styles.LawyerMessage_header_avatar}>
              <img src="lawyerphoto.png" alt="lawyerphoto" />
            </div>
            <div className={styles.HeaderInfo}>
              <p className={styles.LawyerMessage_header_name}>Юрист Тендерплана </p>
              <p className={styles.LawyerMessage_header_time}>Сегодня в 09:21</p>
              <div className={styles.LawyerMessage_info}>
                Подключимся к вам через 10 минут, настроим ПО для работы на площадках и пройдем
                аккредитацию.
              </div>
            </div>
          </div>
        </div>{' '}
        <div className={styles.CommentMessage1}>
          <div className={styles.CommentMessage1_header}>
            <p className={styles.CommentMessage1_header_time}>Сегодня в 14:37</p>
          </div>
          <div className={styles.CommentMessage1_info}>
            Заявка готова, отдельно сформировали для вас стандартный пакет документов для будущих
            участий.
          </div>
        </div>
        <div className={styles.CommentMessage2}>
          <div className={styles.CommentMessage2_header}>
            <p className={styles.CommentMessage2_header_time}>Сегодня в 17:05</p>
          </div>
          <div className={styles.CommentMessage2_info}>
            Контракт соответсвует нормам законодательства,все условия сохранены, можно смело
            подписывать.
          </div>
        </div>
      </div>
    </div>
  );
});

export default Consult;
