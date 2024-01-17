"use client"
import styles from './GlobalHeader.module.css';
import { usePathname } from "next/navigation";
import Link from 'next/link'

const navList: {label: string; href: string;}[] = [
  { label: 'TOP', href: '/'},
  { label: 'TAGS', href: '/tags'},
  { label: 'EX/INPORT', href: '/bulk'},
  { label: 'SETTINGS', href: '/settings'},
  { label: 'README', href: '/readme'},
];


const Nav = () => {
  const pathname = usePathname();

  const itemsTsx = (pathname: string) => {
    return navList.map((item) => {
      
      return <li className={`${styles.globalNavItem} ${(item.href === pathname && styles.globalNavItemCurrent)}`}>
        <Link
          className={styles.globalNavAnchor}
          href={item.href}
        >{ item.label }</Link>
      </li>
    });
  };

  return <nav className={styles["globalNav"]}>
    <ul>
      { itemsTsx(pathname) }
    </ul>
  </nav>
}

export default Nav;