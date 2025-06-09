'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const abrirDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownAberto(true);
  };

  const fecharDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownAberto(false), 200); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <img src="/orbeey.png" alt="Logo Orbeey" className={styles.logo} />
        </Link>

        <ul className={styles.menu}>
          {['Home', 'Sobre', 'Contato'].map((label) => {
            const path = `/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`;
            const isActive = pathname === path;

            return (
              <li key={label}>
                <Link
                  href={path}
                  className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                >
                  <span className={styles.hoverUnderline}>{label}</span>
                </Link>
              </li>
            );
          })}

          {/* Dropdown de Serviços */}
          <li
            className={styles.dropdown}
            onMouseOver={abrirDropdown}
            onMouseOut={fecharDropdown}
          >
            <button
              className={`${styles.dropdownButton} ${
                pathname.startsWith('/servico') ? styles.active : ''
              }`}
            >
              <span className={styles.hoverUnderline}>Serviços</span>
              <svg className="w-4 h-4 mt-[2px]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.658l3.71-3.47a.75.75 0 111.02 1.1l-4.25 3.98a.75.75 0 01-1.02 0l-4.25-3.98a.75.75 0 01-.02-1.06z" />
              </svg>
            </button>

            <ul
              className={`${styles.dropdownMenu} ${
                dropdownAberto ? styles.dropdownAberto : ''
              }`}
            >
              {[['Orbeey Technology', '/servico1'],
                ['Orbeey Design', '/servico2'],
                ['Orbeey Law', '/servico3'],
                ['Orbeey Contability', '/servico4'],
                ['Orbeey Bank', '/servico5'],
              ].map(([text, link]) => {
                const isActive = pathname === link;
                return (
                  <li key={text}>
                    <Link
                      href={link}
                      className={`${styles.dropdownLink} ${isActive ? styles.active : ''}`}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        {/* Botões de login e registro */}
        <div className={styles.buttons}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/register" className={styles.registerBtn}>Registre-se</Link>
        </div>
      </div>
    </nav>
  );
}
