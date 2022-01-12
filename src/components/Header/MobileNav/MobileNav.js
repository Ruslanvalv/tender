import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './MobileNav.module.scss';
function MobileNav() {
  return (
    <div className={styles.MobileNav}>
      <hr />
      <nav className={styles.NavList}>
        <ul>
          <li className={styles.NavItem}>
            <a href="#" className={styles.NavLink}>
              <div className={styles.NavIcon}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="1.441"
                    y="1.439"
                    width="33.12"
                    height="33.12"
                    rx="6"
                    fill="#F4C82C"></rect>
                  <mask id="svg-3a" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
                      fill="#fff"></path>
                  </mask>
                  <g mask="url(#svg-3a)">
                    <rect x="5.039" y="9.359" width="25.92" height="18" rx="1" fill="#fff"></rect>
                    <path
                      d="M5.04 10.36a1 1 0 0 1 1-1h23.92a1 1 0 0 1 1 1v1.16H5.04v-1.16z"
                      fill="#2FB798"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.64 22.32h18.72v-.72H8.64v.72zM8.64 20.88h18.72v-.72H8.64v.72zM8.64 23.76h18.72v-.72H8.64v.72zM8.64 25.2h18.72v-.72H8.64v.72z"
                      fill="#CFD3D4"></path>
                    <path
                      d="M12.093 15.57l-.391-.392v-.958a.27.27 0 0 0-.27-.27h-.27a.27.27 0 0 0-.27.27v.149l-.54-.54c-.074-.07-.141-.15-.27-.15-.129 0-.196.08-.27.15L8.07 15.57c-.084.088-.148.152-.148.27 0 .153.117.27.27.27h.27v1.62c0 .15.121.27.27.27h.81v-1.35a.27.27 0 0 1 .27-.27h.54a.27.27 0 0 1 .27.27V18h.81a.27.27 0 0 0 .27-.27v-1.62h.27c.153 0 .27-.117.27-.27 0-.118-.064-.182-.149-.27z"
                      fill="#2FB798"></path>
                  </g>
                </svg>
              </div>
              Главная
            </a>
          </li>
          <li className={styles.NavItem}>
            <a href="#" className={styles.NavLink}>
              <div className={styles.NavIcon}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="1.441"
                    y="1.439"
                    width="33.12"
                    height="33.12"
                    rx="6"
                    fill="#2FB798"></rect>
                  <mask id="svg-2a" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
                      fill="#fff"></path>
                  </mask>
                  <g mask="url(#svg-2a)" fillRule="evenodd" clipRule="evenodd">
                    <path
                      d="M8.25 12h13.5v-1.5H8.25V12zM8.25 15h13.5v-1.5H8.25V15zM8.25 18h13.5v-1.5H8.25V18zM8.25 21h13.5v-1.5H8.25V21z"
                      fill="#81ECD2"></path>
                    <path
                      d="M20.687 25.353a5.768 5.768 0 0 1-4.15-1.758c-2.289-2.34-2.289-6.146 0-8.486a5.767 5.767 0 0 1 4.15-1.757c1.567 0 3.042.624 4.15 1.757 2.289 2.34 2.289 6.146 0 8.486a5.77 5.77 0 0 1-4.15 1.758zm8.022 1.244l-2.426-2.479c-.024-.025-.056-.036-.082-.056 2.361-2.885 2.22-7.2-.43-9.91A7.065 7.065 0 0 0 20.687 12c-1.92 0-3.727.764-5.084 2.153-2.804 2.866-2.804 7.53 0 10.395a7.064 7.064 0 0 0 5.084 2.154 7.038 7.038 0 0 0 4.608-1.713c.02.027.03.06.055.084l2.425 2.48a.651.651 0 0 0 .934 0 .687.687 0 0 0 0-.956z"
                      fill="#FDFDFD"></path>
                  </g>
                </svg>
              </div>
              Поиск
            </a>
          </li>
          <li className={styles.NavItem}>
            <a href="#" className={styles.NavLink}>
              <div className={styles.NavIcon}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="1.441"
                    y="1.439"
                    width="33.12"
                    height="33.12"
                    rx="6"
                    fill="#49C6E1"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.091 12.383l-1.26-3.024H9.902c-.696 0-1.261.673-1.261 1.505v14.25c0 .831.566 1.505 1.255 1.505l16.929.02c.693 0 1.256-.674 1.256-1.508v-11.22c0-.833-.566-1.508-1.264-1.508l-8.726-.02z"
                    fill="#fff"></path>
                  <mask id="svg-1a" maskUnits="userSpaceOnUse" x="8" y="9" width="20" height="18">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.255 12.398l-1.282-3.023H9.924c-.709 0-1.283.672-1.283 1.505v14.25c0 .83.576 1.505 1.277 1.505h16.033c.706 0 1.278-.675 1.278-1.509v-11.22c0-.833-.575-1.508-1.286-1.508h-7.688z"
                      fill="#fff"></path>
                  </mask>
                  <g mask="url(#svg-1a)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.517-1.939l-1.282-3.02H8.186c-.709 0-1.283.672-1.283 1.504l-.008 14.34c0 .83.576 1.503 1.277 1.503h16.033c.706 0 1.278-.674 1.278-1.507l.008-11.313c0-.832-.575-1.507-1.286-1.507h-7.688z"
                      fill="#6F61D3"></path>
                  </g>
                  <path
                    d="M22.824 18.72l2.568 2.212-2.568 2.21M25.39 21.004H15.122"
                    stroke="#49C6E1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </div>
              Управление
            </a>
          </li>
          <li className={styles.NavItem}>
            <a href="#" className={styles.NavLink}>
              <div className={styles.NavIcon}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="1.441"
                    y="1.439"
                    width="33.12"
                    height="33.12"
                    rx="6"
                    fill="#6F61D3"></rect>
                  <path
                    d="M25.446 8.836H11.082a1 1 0 0 0-1 1v17.636a1 1 0 0 0 1 1h14.364a1 1 0 0 0 1-1V9.836a1 1 0 0 0-1-1z"
                    fill="#fff"></path>
                  <path
                    d="M15.842 12.96h-1.44v5.76h1.44v-5.76zM13.682 15.12h-1.44v3.6h1.44v-3.6z"
                    fill="#4AC3AF"></path>
                  <path
                    d="M20.162 22.36a.77.77 0 0 0-.775-.76.77.77 0 0 0-.775.76c0 .139.042.27.111.383l-1.043 1.023a.8.8 0 0 0-.354-.086.812.812 0 0 0-.433.128l-1.048-1.023a.739.739 0 0 0 .135-.425.77.77 0 0 0-.776-.76.77.77 0 0 0-.775.76c0 .124.035.24.089.342l-1.11 1.087a.772.772 0 0 0-1.166.65c0 .418.35.76.775.76a.77.77 0 0 0 .775-.76c0-.139-.042-.27-.11-.383l1.089-1.068a.774.774 0 0 0 .783.045l1.082 1.06a.76.76 0 0 0-.088.347c0 .417.349.76.775.76a.77.77 0 0 0 .775-.76.764.764 0 0 0-.13-.425l1.024-1.005a.771.771 0 0 0 1.17-.65zm-7.145 2.46a.39.39 0 0 1-.391-.384.39.39 0 0 1 .391-.384.39.39 0 0 1 .392.384.387.387 0 0 1-.392.384zm2.188-2.08a.39.39 0 0 1-.392-.384.39.39 0 0 1 .391-.384.39.39 0 0 1 .392.384.387.387 0 0 1-.392.383zm2.121 2.08a.39.39 0 0 1-.39-.384.39.39 0 0 1 .39-.384.39.39 0 0 1 .392.384.39.39 0 0 1-.392.384zm1.785-2.193a.383.383 0 0 1-.115-.271.39.39 0 0 1 .391-.384.39.39 0 0 1 .392.384.39.39 0 0 1-.392.383.383.383 0 0 1-.276-.112z"
                    fill="#6F61D3"></path>
                  <path
                    d="M24.483 12.96h-1.44v5.76h1.44v-5.76zM22.323 15.12h-1.44v3.6h1.44v-3.6zM20.163 12.96h-1.44v5.76h1.44v-5.76zM18.003 15.12h-1.44v3.6h1.44v-3.6z"
                    fill="#4AC3AF"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.997 29.828a4.114 4.114 0 1 0 0-8.228 4.114 4.114 0 0 0 0 8.228z"
                    fill="#4AC3AF"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.471 24.176l1.885 1.4-.688-4.589s-.433.034-.946.221a3.742 3.742 0 0 0-1.025.528c-.755.529-1.093 1.053-1.093 1.053l1.867 1.387z"
                    fill="#6F61D3"></path>
                </svg>
              </div>
              Аналитика
            </a>
          </li>
          <li className={styles.NavItem}>
            <a href="#" className={styles.NavLink}>
              <div className={styles.NavIcon}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="34" height="34" rx="6" fill="#708BF5"></rect>
                  <path
                    d="M24 5H10a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
                    fill="#fff"></path>
                  <rect x="10" y="25" width="14" height="2" rx="1" fill="#6F61D3"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.147 8.575a1 1 0 0 0-1.414 0l-.707.707v1.415l-2.828 2.828h-1.415l-.707.707a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l.707-.707v-1.414l.707-.707 3.536 3.535a1 1 0 0 0 1.414-1.414l-3.536-3.536.708-.707h1.414l.707-.707a1 1 0 0 0 0-1.414l-4.243-4.243z"
                    fill="#7D6CF4"></path>
                </svg>
              </div>
              Тендерное сопровождение
            </a>
          </li>
          <li className={styles.NavItem}>
            <a href="#" className={styles.NavLink}>
              <div className={styles.NavIcon}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="1.441"
                    y="1.439"
                    width="33.12"
                    height="33.12"
                    rx="6"
                    fill="#F6678D"></rect>
                  <rect
                    x="8.641"
                    y="8.641"
                    width="16.56"
                    height="20.88"
                    rx="1"
                    fill="#FFADC3"></rect>
                  <rect
                    x="9.359"
                    y="7.92"
                    width="16.56"
                    height="20.88"
                    rx="1"
                    fill="#F6678D"></rect>
                  <rect x="10.078" y="7.199" width="16.56" height="20.88" rx="1" fill="#fff"></rect>
                  <path
                    d="M15.399 24.257l-3.656-3.66a.76.76 0 0 1 0-1.075l6.948-6.954c.203-.198.475-.308.759-.307l3.67-.02a.636.636 0 0 1 .64.627l-.02 3.673a1.082 1.082 0 0 1-.318.76l-6.949 6.956a.756.756 0 0 1-1.074 0z"
                    fill="#F6678D"></path>
                  <path
                    d="M21.599 15.12a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44z"
                    fill="#FDFDFD"></path>
                </svg>
              </div>
              Тарифы
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.MobileButtom}>
        <div className={styles.UserListMobile}>
          <Button type="Register">Регистрация</Button>
          <a className={styles.EnterLink} href="">
            Войти в свой Тендерплан <div></div>
          </a>
        </div>
        <div className={styles.mobileContact}>
          <a href="tel:+78003334505">8 800 333-45-05</a>{' '}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
