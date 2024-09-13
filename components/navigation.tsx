//이걸 쓴다고 CSR이 일어나지는 않는다.
//backend에서 render되고 frontend에서 hydrate된다.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  // const [count, setCount] = useState(0);
  // // console.log(path);
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
