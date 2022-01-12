import React from 'react';
import styles from './MobileFooter.module.scss';
function MobileFooter() {
  return (
    <footer className={styles.MobileFooter}>
      <div className={styles.Menu}>
        <ul>
          <li>
            <a href="#">Поиск</a>
          </li>
          <li>
            <a href="#">Управление</a>
          </li>
          <li>
            <a href="#">Аналитика</a>
          </li>
          <li>
            <a href="#">Сопровождение</a>
          </li>
          <li>
            <a href="#">Тарифы</a>
          </li>
          <li>
            <a href="#">Список площадок</a>
          </li>
          <li>
            <a href="#">Партнёрам</a>
          </li>
          <li>
            <a href="#">Сравнение конкурентов</a>
          </li>
          <li>
            <a href="#">Скачать Тендерплан</a>
          </li>
          <li>
            <a href="#">Медиакит</a>
          </li>
          <li>
            <a href="#">Вакансии</a>
          </li>
        </ul>
      </div>
      <div className={styles.Networks}>
        <ul>
          <li className={styles.Seti}>
            <a href="# ">
              <img src="zen.svg" alt="zen" />
            </a>
          </li>
          <li className={styles.Seti}>
            <a href="# ">
              <img src="vk.svg" alt="vk" />
            </a>
          </li>
          <li className={styles.Seti}>
            <a href="# ">
              <img src="insta.svg" alt="insta" />
            </a>
          </li>
          <li className={styles.Seti}>
            <a href="# ">
              <img src="fb.svg" alt="fb" />
            </a>
          </li>
          <li className={styles.Seti}>
            <a href="# ">
              <img src="youtube.svg" alt="youtube" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.Contacts}>
        <ul>
          <li className={styles.MainNumber}>
            <a href="tel:+78003334505">8 800 333-45-05</a>{' '}
          </li>
          <li>
            <span>(звонок бесплатный)</span>{' '}
          </li>
          <div className={styles.Line}></div>

          <li>
            <div>8 499 686-09-99</div>{' '}
          </li>
          <li>
            <a href="mailto:info@tenderplan.ru">info@tenderplan.ru</a>{' '}
          </li>
        </ul>
      </div>
      <div className={styles.Registry}>
        <svg
          width="35"
          height="38"
          viewBox="0 0 35 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.1239 25.8675C19.0615 27.9619 17.1143 29.6671 17.0915 29.6422C17.0683 29.6671 15.1211 27.9619 14.0587 25.8675C12.9963 23.7754 12.3148 20.4889 12.2772 18.919C12.2392 17.3491 12.5423 16.6765 12.5423 16.6765C12.5423 16.6765 13.8706 16.6019 14.933 16.2265C15.8345 15.9106 16.8155 15.1084 17.0915 14.875C17.3653 15.1084 18.3486 15.9106 19.2517 16.2265C20.3124 16.6019 21.6403 16.6765 21.6403 16.6765C21.6403 16.6765 21.9438 17.3491 21.9036 18.919C21.866 20.4889 21.1845 23.7754 20.1239 25.8675ZM20.2228 32.9836C20.361 33.2525 20.4406 33.7792 20.0181 33.8196C19.7819 33.1913 19.4976 32.8243 19.1459 32.3176C18.8197 31.9267 18.4601 31.5238 18.2029 31.0823C18.7799 31.7696 19.9389 32.4552 20.2228 32.9836ZM18.204 36.1815C18.2832 35.566 18.1262 34.1914 17.8799 33.2574C17.7102 32.6295 17.1478 30.9807 17.3984 30.3915C17.4968 31.168 17.8025 32.3815 18.2438 33.3768C18.557 34.0911 19.0176 35.7528 18.204 36.1815ZM16.3001 33.2574C16.0661 34.1914 15.8985 35.566 15.9777 36.1815C15.1624 35.7528 15.6247 34.0911 15.9383 33.3768C16.3775 32.3815 16.6828 31.168 16.7812 30.3915C17.0344 30.9807 16.4715 32.6295 16.3001 33.2574ZM15.0454 32.3176C14.6815 32.8243 14.3972 33.1913 14.1627 33.8196C13.7402 33.7792 13.8198 33.2525 13.958 32.9836C14.2423 32.4552 15.3988 31.7696 15.9779 31.0823C15.7211 31.5238 15.3612 31.9205 15.0454 32.3176ZM10.7 25.5034C10.721 25.6409 10.7398 25.7217 10.798 25.8127C10.0431 25.9316 9.72116 26.2306 9.44736 26.7165C9.06246 27.3723 9.46398 28.2189 9.35507 28.569C9.27809 28.7877 9.02484 28.9976 8.62289 28.8068C8.81752 29.6827 9.89699 29.5833 10.1808 29.0952C10.2775 29.5026 10.1808 29.9716 9.98446 30.1495C10.3195 30.1686 10.6038 30.0306 10.7792 29.7613C10.819 29.842 10.819 29.9525 10.8378 30.0497C11.0241 29.9525 11.1435 29.842 11.2205 29.7422C11.2498 29.8398 11.2874 30.0687 11.2415 30.256C11.0976 30.3554 10.934 30.4468 10.6812 30.5781C10.2775 30.7778 9.54533 31.0662 9.12282 31.1252C8.77772 31.1851 8.17982 30.9855 8.0228 30.4974C7.88458 30.0306 7.50406 29.8824 7.19877 30.1686C7.12135 30.1091 6.90616 30.0687 6.81606 30.2116C6.81606 30.2116 6.71983 29.9907 6.60043 29.8824C6.68003 29.6423 6.61923 29.3539 6.40404 29.2568C6.38523 28.7877 6.10093 28.7877 6.00252 28.6285C5.94435 28.5286 5.94435 28.4075 6.08213 28.3889C6.02352 28.2997 5.90411 28.2806 5.8853 28.2806C5.92336 28.0809 5.86431 27.8329 5.601 27.7521L3.27544 22.8868C3.42371 22.728 3.34673 22.4986 3.17702 22.4178C3.17702 22.4178 3.17702 22.3987 3.17702 22.3801C3.19146 22.3419 3.19365 22.3118 3.19802 22.2825C3.26056 22.2714 3.33623 22.2567 3.40315 22.2399C3.86328 22.1294 4.58015 21.4443 5.19949 21.0157C4.98167 21.2446 4.08022 21.9111 3.6787 22.2993C3.3043 22.6769 3.46132 23.0545 3.52212 23.3944L3.61003 23.5826C3.95076 23.6043 4.46118 23.8124 4.84389 23.4934C4.96286 23.3749 6.64023 21.2637 6.86417 21.0561C6.77844 21.2446 5.71822 22.5984 5.23929 23.3749C4.8837 23.9606 5.40462 24.3488 5.46498 24.6861C5.8455 24.5672 6.36643 24.7966 6.64023 24.3298C6.90616 23.8816 7.71969 22.2803 8.0228 21.8303C7.90558 22.1804 7.04175 24.001 6.98357 24.1598C6.77844 24.7775 7.29718 24.8964 7.50406 25.3055C7.81767 25.077 8.38495 25.2549 8.60233 24.667C8.73792 24.2699 9.08302 22.8868 9.26103 22.5176C9.24004 22.9276 9.12282 23.4743 9.04365 24.0795C8.96405 24.6861 9.52434 24.667 9.81738 25.0171C10.1017 24.7775 10.6226 24.8369 10.7 24.2889C10.7792 23.8017 10.798 22.6175 10.798 22.6175C10.8776 22.6876 10.9174 22.7067 11.0053 22.787C11.1995 22.5585 11.6037 22.5585 11.7397 22.2803C11.8 22.2993 11.8189 22.3397 11.8775 22.3801C12.3188 23.1242 12.3564 24.5672 11.7397 25.077C11.9173 25.077 12.143 25.0552 12.279 24.9962C12.0052 25.5624 11.3963 25.7625 10.7 25.5034ZM3.64085 20.29C3.53851 20.3321 3.41954 20.3854 3.32506 20.4253C3.32506 20.4173 3.32506 20.4062 3.32506 20.3983C3.42129 20.3623 3.54069 20.3259 3.64085 20.29ZM13.7007 8.05164C14.8007 7.81203 15.9173 7.18596 16.4195 6.66016C16.8354 6.68545 17.373 6.68944 17.781 6.66637C18.2766 7.1966 19.3788 7.81203 20.4788 8.05164C19.8407 8.05164 18.724 7.99218 18.5863 7.83289C18.6261 8.24022 19.479 8.70079 20.0375 8.82814C19.5752 8.88715 19.1465 8.82814 18.7805 8.66041C18.9795 8.94883 19.203 9.16758 19.5752 9.29714C19.1842 9.78522 18.3811 10.1011 17.5842 10.0226C17.781 10.2622 18.1449 10.4109 18.4607 10.3705C17.7452 11.529 17.2142 12.7168 17.0887 14.0941L17.0843 14.0923L17.0825 14.0968C16.9631 12.7168 16.4361 11.529 15.7227 10.3705C16.0451 10.4109 16.4007 10.2622 16.5848 10.0226C15.7813 10.1011 15.0054 9.78522 14.6039 9.29714C14.9783 9.16758 15.2018 8.94883 15.3986 8.66041C15.0452 8.82814 14.6039 8.88715 14.1438 8.82814C14.7023 8.70079 15.5661 8.24022 15.6033 7.83289C15.4572 7.99218 14.3406 8.05164 13.7007 8.05164ZM21.0376 34.3867C21.2842 34.8153 20.9413 35.1228 20.4602 35.1228C20.4602 34.9556 20.4602 34.8957 20.4204 34.6947C20.6444 34.6729 20.9059 34.5882 21.0376 34.3867ZM13.7208 35.1228C13.2401 35.1228 12.8967 34.8153 13.1417 34.3867C13.269 34.5802 13.5222 34.6716 13.7396 34.6947C13.7208 34.8957 13.7208 34.9556 13.7208 35.1228ZM2.59864 20.5846C2.57327 20.5846 2.5479 20.5846 2.52078 20.5846C2.51684 20.5788 2.51247 20.5722 2.50635 20.566C2.54178 20.5575 2.57983 20.5575 2.61307 20.5469C2.61088 20.5597 2.60476 20.5722 2.59864 20.5846ZM2.02001 21.831L1.82581 21.7148C1.90323 21.6229 1.98064 21.6229 2.05806 21.6744C2.05806 21.7339 2.05806 21.7929 2.02001 21.831ZM1.63836 20.9944C1.61955 20.9944 1.61955 21.0135 1.60075 21.0325C1.48178 21.0135 1.48178 20.8732 1.50277 20.7543C1.55919 20.7543 1.60075 20.7352 1.63836 20.6953L1.65717 20.7162L1.60075 20.7543C1.61955 20.8351 1.61955 20.9141 1.63836 20.9944ZM34.1028 15.7811C33.6825 15.5246 32.9862 15.4332 32.2794 15.5029C33.3877 15.1146 34.1426 14.2796 34.1824 13.5323C33.6051 13.3646 33.005 13.4538 32.4862 13.5727C33.0238 13.165 33.9064 12.4186 33.7997 11.3235C33.281 11.1944 32.3275 11.5636 31.9255 11.7437C33.2014 11.0156 33.6615 9.29534 32.9862 8.31961C32.5846 8.55877 30.7586 10.4472 30.4638 10.6682C31.4072 9.5731 31.8485 8.78596 32.1035 8.04984C32.4066 7.24583 32.4254 5.84325 31.4466 5.37425C30.9847 6.44981 29.3659 9.20393 28.4645 10.3496C28.3661 10.2604 28.2869 10.1397 28.1592 10.1206C27.9436 10.819 27.3054 11.7437 26.7263 12.1892C26.697 12.1302 26.6389 11.9709 26.54 11.801C25.9233 12.7368 24.3233 14.0204 23.8046 14.8071C23.4009 15.3928 23.4009 15.9217 23.9612 16.4684C24.1873 16.6978 24.6181 17.1056 24.2459 17.6717C23.7394 18.423 22.7212 18.5099 22.167 18.0684C22.167 17.9349 22.1627 17.8075 22.1565 17.6886C22.8091 17.4321 22.9618 16.5301 22.4806 15.9701C22.3744 16.1755 22.2003 16.3264 21.9916 16.401C21.9352 16.1676 21.8845 16.0531 21.8806 16.042L21.8552 15.987L21.7988 15.9848C21.7926 15.983 21.5796 15.9723 21.2595 15.9342C21.6212 15.8135 21.853 15.4736 21.8031 15.0152C21.2446 15.5029 20.6843 15.037 20.5566 14.9074C20.2054 14.489 20.107 14.0204 20.2447 13.303C20.362 12.6769 20.9997 11.6821 21.4204 11.3639C21.4812 11.4229 21.5774 11.5423 21.7821 11.5232C21.9011 11.4851 22.0979 11.383 22.2445 11.3235C22.667 11.1944 23.079 11.2938 23.3445 11.4638C23.8234 11.761 23.7836 12.0894 23.767 12.3294C24.4987 11.9115 24.2459 11.2153 23.2859 10.9566C23.9424 10.9566 24.4821 11.5636 24.6181 11.6417C24.982 11.9115 25.5008 11.852 25.8039 11.7034C26.3856 11.4229 26.5024 10.7272 26.3458 10.5874C26.2872 10.8381 26.1009 11.0564 25.7641 11.0968C25.2663 11.1563 24.7835 10.9353 24.4029 10.7654C24.0806 10.6274 23.5579 10.528 23.2063 10.5488C23.8632 10.1801 24.8836 10.22 25.2453 10.7871C25.4632 10.6083 25.5992 10.4472 25.6595 10.0803C25.8459 9.08724 25.0805 8.57785 24.2647 8.57785C24.2857 8.33869 24.1182 8.21933 23.903 8.30009C23.903 8.19848 23.8759 8.11994 23.8212 8.07957C23.84 8.07735 23.8654 8.06936 23.882 8.06936C24.7061 8.01168 25.482 7.75299 25.9023 7.30484C26.6389 6.50749 25.4632 5.49316 25.8835 4.70824C26.2872 4.88616 26.582 5.11556 27.1383 5.1941C27.197 5.31523 27.2473 5.55262 27.2661 5.68174C27.4436 6.56917 26.582 6.71737 26.8059 7.66159C26.9039 8.08977 27.2201 8.23841 27.3264 8.7478C27.3264 8.7478 27.3667 9.1041 27.0609 9.41425C27.7682 9.43333 28.1404 8.82633 27.923 8.25971C27.8263 8.03076 27.5797 7.81023 27.5797 7.54312C27.9436 8.03076 28.2681 8.01168 28.8262 7.83109C29.0812 7.75299 29.1022 8.11151 28.9434 8.39993C29.3261 8.16831 29.4267 7.79115 29.4267 7.62343C29.4267 7.22409 29.121 7.03551 28.8262 7.11582C28.6613 7.1349 28.3263 7.36474 28.3075 7.03551C28.2384 6.46889 29.121 6.48841 28.9434 5.57436C28.8472 5.11556 28.3451 4.86531 27.5609 4.76725C27.4834 4.68694 27.2866 4.49792 27.1803 4.33862C26.7495 3.6136 26.306 3.42457 26.0401 3.57322C25.7265 3.73162 25.5616 3.87228 25.3066 4.00983C25.0993 4.11987 24.8836 4.17977 24.7459 4.33862C24.4029 4.76725 24.727 5.43371 24.9024 5.84325C25.0218 6.08064 25.3066 6.62818 25.1789 7.03551C25.0407 7.52315 24.2459 7.83109 23.767 7.93136C23.7355 7.93136 23.7167 7.94157 23.6856 7.94157V7.75299C23.8234 7.50229 23.9424 7.20501 24.0408 6.93567C24.3649 6.05934 23.882 5.70348 23.1686 5.53354C23.079 5.47408 22.9806 5.45279 22.8638 5.49316H22.8428L22.8236 5.64181L22.7256 5.61208L22.7466 5.43371H22.7041C22.7859 5.37425 22.8236 5.27441 22.8236 5.17502C22.8236 5.06676 22.7859 4.98556 22.7466 4.92699H22.8428L22.8026 4.88616C22.7859 4.84623 22.7466 4.80807 22.6858 4.74639C22.667 4.72731 22.6482 4.68694 22.6482 4.66786C22.667 4.68694 22.6858 4.70824 22.7256 4.72732C22.7649 4.76725 22.8236 4.80807 22.8428 4.84623L22.901 4.88616V4.07151L22.8428 4.11987C22.8236 4.13984 22.7649 4.17977 22.7256 4.22015C22.6858 4.26053 22.667 4.26053 22.6482 4.27961C22.6482 4.26053 22.667 4.23923 22.6858 4.19885C22.7466 4.16069 22.7859 4.09902 22.8026 4.07151L22.8428 4.00983H22.0393L22.0791 4.07151C22.1167 4.09902 22.167 4.16069 22.2068 4.19885C22.2257 4.23923 22.2445 4.26053 22.265 4.27961C22.2445 4.26053 22.2068 4.26053 22.1858 4.22015C22.1167 4.17977 22.0791 4.13984 22.0393 4.11987L22 4.07151V4.88616L22.0393 4.84623C22.0791 4.80807 22.1167 4.76725 22.1858 4.72732C22.2068 4.70824 22.2445 4.68694 22.265 4.66786C22.2445 4.68694 22.2257 4.72731 22.2068 4.74639C22.167 4.80807 22.1167 4.84623 22.0791 4.88616L22.0393 4.92699H22.167C22.0979 4.98556 22.0791 5.06676 22.0791 5.17502C22.0791 5.27441 22.1167 5.37425 22.1858 5.43371H22.167L22.1858 5.61208L22.0791 5.64181L22.0581 5.49316H22.0393C21.9221 5.45279 21.8241 5.47408 21.7445 5.53354C21.0185 5.70348 20.5378 6.05934 20.8619 6.93567C20.9603 7.20501 21.0797 7.50229 21.2258 7.75299V7.88211C20.498 7.64251 19.1928 6.83584 18.8416 6.3482C18.8018 6.29939 18.7725 6.25901 18.7537 6.22928L18.7498 6.2315L18.7642 5.70348C19.0174 5.27441 19.2431 4.7464 19.4211 4.26053C19.8813 2.99595 19.2033 2.4697 18.1261 2.24874C18.0176 2.17109 17.8798 2.13026 17.704 2.19017L17.6659 2.38939L17.4407 2.37031L17.459 2.11119C17.4197 2.13026 17.3816 2.13026 17.3423 2.13026C17.4967 2.05173 17.6056 1.86049 17.6056 1.66348C17.6056 1.52371 17.5365 1.35377 17.4197 1.27523H17.6056C17.4967 1.17495 17.3213 0.965519 17.2832 0.827524C17.4197 0.865683 17.6266 1.05471 17.7228 1.15587V0.12069C17.6266 0.199227 17.4197 0.398454 17.2832 0.417534C17.3213 0.301281 17.4967 0.0998354 17.6056 0H16.5851C16.6643 0.0998354 16.8607 0.301281 16.8795 0.417534C16.7605 0.398454 16.5663 0.199227 16.4574 0.12069V1.15587C16.5663 1.05471 16.7605 0.865683 16.8795 0.827524C16.8607 0.965519 16.6643 1.17495 16.5851 1.27523H16.7605C16.6438 1.35377 16.5851 1.52371 16.5851 1.66348C16.5851 1.86049 16.6831 2.05173 16.8401 2.13026C16.8003 2.13026 16.7605 2.13026 16.7019 2.11119L16.7229 2.37031L16.4968 2.38939L16.4762 2.19017C16.3004 2.13026 16.1648 2.17109 16.0454 2.24874C14.9786 2.4697 14.2989 2.99595 14.7613 4.26053C14.9183 4.7464 15.144 5.27441 15.4178 5.70348V6.25058C15.399 6.26966 15.3784 6.31004 15.3404 6.3482C14.9974 6.83584 13.6822 7.64251 12.9562 7.88211V7.75299C13.1027 7.50229 13.2221 7.20501 13.3201 6.93567C13.6446 6.05934 13.1635 5.70348 12.4374 5.53354C12.3561 5.47408 12.2621 5.45279 12.1426 5.49316H12.1238L12.1028 5.64181L12.0049 5.61208L12.0237 5.43371H12.0049C12.063 5.37425 12.1028 5.27441 12.1028 5.17502C12.1028 5.06676 12.084 4.98556 12.0237 4.92699H12.1426L12.1028 4.88616C12.063 4.84623 12.0237 4.80807 11.9856 4.74639C11.9668 4.72731 11.9379 4.68694 11.917 4.66786C11.9379 4.68694 11.9856 4.70824 12.0049 4.72732C12.063 4.76725 12.1028 4.80807 12.1426 4.84623L12.1824 4.88616V4.07151L12.1426 4.11987C12.1028 4.13984 12.063 4.17977 12.0049 4.22015C11.9856 4.26053 11.9379 4.26053 11.917 4.27961C11.9379 4.26053 11.9668 4.23923 11.9856 4.19885C12.0237 4.16069 12.063 4.09902 12.1028 4.07151L12.1426 4.00983H11.3392L11.3772 4.07151C11.396 4.09902 11.4463 4.16069 11.4861 4.19885C11.5237 4.23923 11.5426 4.26053 11.5426 4.27961C11.5237 4.26053 11.5049 4.26053 11.4669 4.22015C11.417 4.17977 11.3567 4.13984 11.3392 4.11987L11.2788 4.07151V4.88616L11.3392 4.84623C11.3567 4.80807 11.417 4.76725 11.4669 4.72732C11.5049 4.70824 11.5237 4.68694 11.5426 4.66786C11.5426 4.68694 11.5237 4.72731 11.4861 4.74639C11.4463 4.80807 11.396 4.84623 11.3772 4.88616L11.3392 4.92699H11.4463C11.396 4.98556 11.3567 5.06676 11.3567 5.17502C11.3567 5.27441 11.396 5.37425 11.4861 5.43371H11.4463L11.4669 5.61208L11.3567 5.64181L11.3392 5.49316H11.3186C11.1992 5.45279 11.1034 5.47408 11.0238 5.53354C10.2982 5.70348 9.81708 6.05934 10.1412 6.93567C10.2396 7.20501 10.3586 7.50229 10.5051 7.75299V7.94157C10.4736 7.94157 10.4465 7.93136 10.4255 7.93136C9.94479 7.83109 9.14132 7.52315 9.00354 7.03551C8.87583 6.62818 9.16231 6.08064 9.27778 5.84325C9.46367 5.43371 9.77946 4.76725 9.44705 4.33862C9.29834 4.17977 9.08271 4.11987 8.87583 4.00983C8.62258 3.87228 8.46381 3.73162 8.1419 3.57322C7.88428 3.42457 7.44514 3.6136 7.00208 4.33862C6.90585 4.49792 6.69897 4.68694 6.61893 4.76725C5.8452 4.86531 5.34527 5.11556 5.23898 5.57436C5.05922 6.48841 5.94404 6.46889 5.885 7.03551C5.864 7.36474 5.52328 7.1349 5.36407 7.11582C5.05922 7.03551 4.75567 7.22409 4.75567 7.62343C4.75567 7.79115 4.86458 8.16831 5.23898 8.39993C5.08196 8.11151 5.10077 7.75299 5.36407 7.83109C5.92305 8.01168 6.23622 8.03076 6.60012 7.54312C6.60012 7.81023 6.36612 8.03076 6.2594 8.25971C6.04202 8.82633 6.40373 9.43333 7.12104 9.41425C6.79694 9.1041 6.86386 8.7478 6.86386 8.7478C6.96446 8.23841 7.27806 8.08977 7.38479 7.66159C7.6026 6.71737 6.73833 6.56917 6.92466 5.68174C6.94347 5.55262 6.98327 5.31523 7.04144 5.1941C7.6026 5.11556 7.90527 4.88616 8.29629 4.70824C8.7 5.49316 7.54137 6.50749 8.27748 7.30484C8.7 7.75299 9.48466 8.01168 10.2982 8.06936C10.3148 8.06936 10.3419 8.07957 10.3629 8.08178C10.3065 8.11994 10.2772 8.19848 10.2772 8.30009C10.0638 8.21933 9.89668 8.33869 9.92598 8.57785C9.08271 8.57785 8.33828 9.08724 8.52242 10.0803C8.58103 10.4472 8.71881 10.6083 8.94493 10.7871C9.29834 10.22 10.3192 10.1801 10.984 10.5488C10.6223 10.528 10.1014 10.6274 9.77946 10.7654C9.40506 10.9353 8.92613 11.1563 8.4262 11.0968C8.0811 11.0564 7.90527 10.8381 7.83617 10.5874C7.67958 10.7272 7.7968 11.4229 8.38464 11.7034C8.67944 11.852 9.19993 11.9115 9.56208 11.6417C9.69986 11.5636 10.2396 10.9566 10.8983 10.9566C9.94479 11.2153 9.6793 11.9115 10.4255 12.3294C10.3962 12.0894 10.3586 11.761 10.8375 11.4638C11.1034 11.2938 11.5237 11.1944 11.938 11.3235C12.084 11.383 12.2787 11.4851 12.3981 11.5232C12.6028 11.5423 12.7012 11.4229 12.7594 11.3639C13.1823 11.6821 13.799 12.6769 13.9372 13.303C14.0838 14.0204 13.977 14.489 13.6236 14.9074C13.5064 15.037 12.9374 15.5029 12.3793 15.0152C12.3268 15.4714 12.559 15.8113 12.9208 15.9342C12.5966 15.9701 12.3793 15.983 12.3727 15.9848L12.3163 15.987L12.2935 16.042C12.287 16.0531 12.2389 16.1676 12.1803 16.3987C11.9773 16.3202 11.8059 16.1738 11.7013 15.9701C11.2202 16.5283 11.3689 17.4237 12.0154 17.6842C12.0088 17.8075 12.0049 17.9393 12.0049 18.0746C11.4503 18.5077 10.4425 18.4185 9.94479 17.6717C9.56208 17.1056 10.003 16.6978 10.2208 16.4684C10.7789 15.9217 10.7789 15.3928 10.3752 14.8071C9.85688 14.0204 8.25693 12.7368 7.64197 11.801C7.54137 11.9709 7.4832 12.1302 7.46176 12.1892C6.88486 11.7437 6.23622 10.819 6.02321 10.1206C5.9038 10.1397 5.81633 10.2604 5.71792 10.3496C4.82478 9.20393 3.19771 6.44981 2.73758 5.37425C1.76484 5.84325 1.78365 7.24583 2.08063 8.04984C2.34219 8.78596 2.7857 9.5731 3.71601 10.6682C3.4234 10.4472 1.59951 8.55877 1.19624 8.31961C0.520487 9.29534 0.980614 11.0156 2.25428 11.7437C1.86325 11.5636 0.901448 11.1944 0.382711 11.3235C0.284299 12.4186 1.15644 13.165 1.69617 13.5727C1.17744 13.4538 0.579096 13.3646 0 13.5323C0.0393645 14.2796 0.803036 15.1146 1.88206 15.5029C1.19624 15.4332 0.49993 15.5246 0.0769795 15.7811C0.156583 16.5576 1.02042 17.2258 2.05789 17.3856C1.36114 17.4636 0.74399 17.7738 0.422075 18.2002C0.803036 18.7069 1.36114 19.0952 2.21666 19.0761C2.01984 19.1462 1.79415 19.2842 1.59951 19.4732C1.57896 19.4541 1.53915 19.4351 1.50154 19.4351C1.45955 19.4541 1.44293 19.5136 1.45955 19.5535C1.45955 19.5535 1.45955 19.5535 1.45955 19.5833C1.3782 19.6432 1.33227 19.7106 1.32352 19.7829C1.24392 19.8979 1.16257 20.0327 1.11839 20.1499C1.13938 20.1605 1.15644 20.1796 1.17744 20.1903C1.16913 20.2581 1.18356 20.3345 1.23386 20.409C1.19624 20.4489 1.17744 20.5088 1.15644 20.5679L0.656513 20.3682C0.629395 20.8288 0.729556 21.209 0.95962 21.4442C1.13938 21.6518 1.34277 21.6221 1.28416 21.6927L1.82564 22.0294C1.92186 22.2398 2.11825 22.2398 2.25428 22.1803C2.25428 22.1803 2.25428 22.1994 2.25428 22.2207C2.25428 22.439 2.40255 22.6174 2.59762 22.6875C2.56001 22.8676 2.63699 22.9865 2.88367 23.0668L4.92319 28.0808C4.84359 28.3186 4.92319 28.5285 5.10077 28.607C5.05922 28.6661 5.0216 28.7277 5.0216 28.8467C5.10077 28.7876 5.21799 28.7663 5.2766 28.9358C5.31421 29.0543 5.10077 29.4426 5.42487 29.7017C5.38288 29.9306 5.50229 30.1685 5.73672 30.2705C5.73672 30.3894 5.84519 30.7777 5.864 30.9157C5.71792 31.1251 5.38288 31.4437 5.42487 31.7916C5.46467 32.0423 5.5609 32.1208 5.75728 32.1798C5.67811 32.6275 5.92305 32.8272 6.29701 32.8481C6.29701 33.1751 6.60012 33.2935 6.79694 33.3126C6.98327 33.4533 7.06243 33.5123 7.27806 33.6228C7.08124 33.8606 7.21945 34.1703 7.58117 34.2702C7.62141 34.4081 7.71938 34.5284 7.92408 34.5776C8.04349 34.7769 8.25693 34.7769 8.38464 34.7174C8.46381 34.6775 8.60202 34.4481 8.48262 34.2489C8.56222 34.149 8.52242 33.96 8.46381 33.8415C8.58103 33.6228 8.48262 33.3534 8.31729 33.2745C8.33828 33.1542 8.27748 32.9652 8.23812 32.8481C8.52242 32.6679 8.87583 32.4389 9.00354 32.3604C9.69986 31.8532 10.4841 31.4033 11.3772 31.3439C11.6034 31.323 12.0237 31.3039 12.2621 31.323C12.6238 31.3629 13.1237 31.4739 13.4167 31.244C13.5064 31.185 13.565 31.0852 13.5462 30.9853C13.5064 30.7559 13.2615 30.5567 13.1823 30.3486C13.1613 30.2856 13.1237 30.1942 13.0861 30.1112C13.3411 30.1578 13.5755 30.1197 13.7216 30.0496C13.8786 29.9905 14.2613 29.7017 14.2425 29.2757C13.9372 29.4239 13.2011 29.6231 13.1237 28.8657C13.0441 28.1997 13.6236 27.6331 14.5268 27.8816C15.144 28.0404 16.0454 29.3729 15.2214 29.9524C14.8194 30.2301 14.2027 30.4973 14.2819 31.225C14.5456 30.8966 14.8973 30.7369 15.3574 30.7777C14.6817 31.2849 14.1629 31.3439 13.4561 31.7321C12.8394 32.0995 12.3793 32.7087 11.896 32.7278C11.5237 32.7469 11.3186 32.2987 11.6803 31.9509C11.3186 31.8723 10.8375 32.1607 10.6997 32.5472C10.5239 33.0752 10.6599 33.4533 10.984 33.6627C10.5449 33.9005 10.2208 34.3695 10.3752 35.0356C10.5239 35.5831 11.0636 35.5831 10.8585 36.2793C11.162 36.1985 11.3567 35.9904 11.4463 35.6914C11.4861 35.4837 11.5237 35.2654 11.6239 35.1651C11.5824 35.5831 11.8185 36.1985 12.3793 36.4785C12.7594 36.6675 13.3599 36.7456 13.82 36.2602C14.0063 36.8073 14.6419 37.2741 15.301 37.255C15.6037 37.255 15.8989 37.1232 16.1246 36.9874C16.2816 37.3926 16.6831 37.8025 17.0846 38C17.4967 37.8025 17.9004 37.3926 18.0657 36.9874C18.2831 37.1232 18.5866 37.255 18.8814 37.255C19.5174 37.2741 20.1844 36.8073 20.362 36.2602C20.8221 36.7456 21.4204 36.6675 21.8031 36.4785C22.3639 36.1985 22.5979 35.5831 22.5602 35.1651C22.667 35.2654 22.7041 35.4837 22.7466 35.6914C22.8236 35.9904 23.0182 36.1985 23.3235 36.2793C23.1188 35.5831 23.6686 35.5831 23.8046 35.0356C23.9612 34.3695 23.6375 33.9005 23.2063 33.6627C23.5203 33.4533 23.6686 33.0752 23.4805 32.5472C23.3445 32.1607 22.8638 31.8723 22.4995 31.9509C22.8638 32.2987 22.667 32.7469 22.2838 32.7278C21.8031 32.7087 21.343 32.0995 20.7241 31.7321C20.0191 31.3439 19.4986 31.2849 18.8228 30.7777C19.2829 30.7369 19.6468 30.8966 19.9001 31.225C19.9792 30.4973 19.3625 30.2301 18.9584 29.9524C18.1453 29.3729 19.0384 28.0404 19.6656 27.8816C20.5566 27.6331 21.1462 28.1997 21.0587 28.8657C20.9603 29.6231 20.2447 29.4239 19.9211 29.2757C19.9211 29.7017 20.3016 29.9905 20.4604 30.0496C20.6445 30.1387 20.983 30.1853 21.2883 30.0536C21.2783 30.1281 21.2656 30.2088 21.2656 30.2301C21.2052 30.8775 20.8619 30.9365 20.9791 31.2041C21.1462 31.4033 22.2445 31.3629 22.5393 31.4246C23.0602 31.4947 23.5015 31.6922 24.0014 31.7916C24.5595 31.9105 25.1579 31.9105 25.6595 32.1208C25.9819 32.2606 26.3458 32.5281 26.6594 32.687C27.1383 32.7677 27.0609 32.9652 27.3667 32.9652C27.6405 32.9652 27.7467 32.7278 28.1006 32.6275C28.3451 32.5681 28.6189 32.6679 28.8638 32.5872C29.0418 32.5472 29.121 32.3604 29.2885 32.2606C29.4849 32.1399 29.7591 32.1399 29.9455 31.9699C30.0434 31.883 30.0623 31.713 30.0474 31.5941L30.0518 31.6221C30.4262 31.3545 30.7105 30.9663 30.8675 30.5163C30.9655 30.4973 31.0433 30.4085 31.0433 30.3087C31.0433 30.2896 31.0433 30.2705 31.0433 30.2705C31.1413 30.1898 31.1999 30.0686 31.1999 29.9524C31.1999 29.8015 31.1413 29.6826 31.0433 29.5832C31.0433 29.5832 31.0433 29.5619 31.0433 29.5424C31.0433 29.4643 31.0035 29.4048 30.9654 29.3538C30.8089 28.4881 30.1607 27.7924 29.3261 27.5736C29.3261 27.5528 29.3261 27.5528 29.3261 27.5337H29.3073C29.3073 27.4929 29.2885 27.472 29.2592 27.472C29.1398 27.3531 29.0016 27.1663 28.985 27.0452C29.121 27.0856 29.3471 27.3039 29.4639 27.393V26.2496C29.3471 26.3388 29.121 26.558 28.985 26.5975C29.0016 26.4577 29.2172 26.2092 29.3261 26.1098H28.1798C28.2869 26.2092 28.5021 26.4577 28.5209 26.5975C28.3849 26.558 28.1592 26.3388 28.042 26.2496V27.393C28.1592 27.3039 28.3849 27.0856 28.5209 27.0452C28.5021 27.1854 28.2869 27.4339 28.1798 27.5337L28.2196 27.5528C27.3667 27.752 26.6782 28.4691 26.5212 29.3538C26.463 29.4048 26.4232 29.4643 26.4232 29.5424C26.4232 29.5619 26.4232 29.5832 26.4232 29.5832C26.3248 29.6826 26.2662 29.8015 26.2662 29.9524C26.2662 30.0686 26.3248 30.1898 26.4232 30.2705C26.4232 30.2705 26.4232 30.2896 26.4232 30.3087C26.4232 30.4382 26.5024 30.4973 26.599 30.5163C26.6389 30.6268 26.6865 30.7369 26.7368 30.8367C26.7368 30.8265 26.7368 30.8265 26.7495 30.8158C26.6782 31.1442 26.2872 31.3439 26.1993 31.3439C25.5008 31.4437 24.727 31.1442 24.0202 30.8775C23.7084 30.7559 23.2859 30.6184 23.079 30.3087C22.9513 30.0842 22.897 29.9417 22.9618 29.7421C23.0392 29.8419 23.1686 29.9524 23.3445 30.0496C23.3633 29.9524 23.3633 29.8419 23.4009 29.7611C23.5807 30.0305 23.8632 30.1685 24.2061 30.1494C24.0014 29.9715 23.903 29.5025 24.0014 29.0951C24.2857 29.5832 25.3648 29.6826 25.5616 28.8067C25.1579 28.9975 24.9024 28.7876 24.825 28.5689C24.7061 28.2188 25.0993 27.3722 24.7459 26.7164C24.4611 26.2305 24.1396 25.9315 23.3843 25.8125C23.4429 25.7216 23.4617 25.6408 23.4805 25.5033C22.7859 25.7624 22.1858 25.5623 21.9011 24.9961C22.0393 25.0551 22.2445 25.0769 22.4408 25.0769C21.8241 24.567 21.8617 23.1241 22.3048 22.38C22.3639 22.3396 22.3827 22.2992 22.4408 22.2801C22.5769 22.5584 22.9806 22.5584 23.1853 22.7869C23.2653 22.7066 23.3047 22.6875 23.3843 22.6174C23.3843 22.6174 23.4009 23.8016 23.4805 24.2888C23.5579 24.8368 24.0806 24.7774 24.3443 25.017C24.6579 24.6669 25.2265 24.686 25.1391 24.0794C25.0595 23.4742 24.9422 22.9275 24.9239 22.5175C25.0993 22.8867 25.4422 24.2698 25.5804 24.6669C25.8039 25.2548 26.3646 25.0769 26.6782 25.3054C26.8851 24.8963 27.4043 24.7774 27.197 24.1597C27.1383 24.0009 26.2872 22.1803 26.1595 21.8302C26.463 22.2801 27.2866 23.8815 27.542 24.3297C27.8263 24.7964 28.3451 24.567 28.7173 24.686C28.7886 24.3487 29.2885 23.9605 28.9246 23.3748C28.4645 22.5983 27.3855 21.2445 27.3264 21.0559C27.542 21.2636 29.2172 23.3748 29.3471 23.4933C29.7382 23.8416 30.3068 23.5722 30.6413 23.5722C30.6413 23.1862 30.9449 22.7474 30.5058 22.2992C30.1021 21.911 29.18 21.2445 28.985 21.0156C29.5999 21.4442 30.3277 22.1293 30.7586 22.2398C31.524 22.439 31.7982 22.1293 32.0847 22.0104C31.8485 21.3044 32.1621 20.9774 30.5434 20.2901C31.9443 20.7973 32.5637 20.547 33.0636 20.1499C32.8668 19.6432 32.3668 19.2168 31.9631 19.0761C32.8186 19.0952 33.3877 18.7069 33.7599 18.2002C33.4463 17.7738 32.8186 17.4636 32.1035 17.3856C33.1616 17.2258 34.0048 16.5576 34.1028 15.7811Z"
            fill="#6C63CC"
          />
        </svg>

        <p>Тендерплан внесён в государственный реестр Российского ПО</p>
      </div>
    </footer>
  );
}

export default MobileFooter;
