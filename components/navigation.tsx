//이걸 쓴다고 CSR이 일어나지는 않는다.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  // console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "시벌" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "시벌" : ""}
        </li>
      </ul>
    </nav>
  );
}
