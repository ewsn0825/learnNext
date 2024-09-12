//이걸 쓴다고 CSR이 일어나지는 않는다.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
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
        <li>
          {/* 자바스크립트 비활성화 되어있으면 작동안됨 */}
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
