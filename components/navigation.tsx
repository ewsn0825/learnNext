//이걸 쓴다고 CSR이 일어나지는 않는다.
//backend에서 render되고 frontend에서 hydrate된다.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
