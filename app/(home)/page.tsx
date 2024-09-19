// import Navigation from "../../components/navigation";
// "use client";
// import { useEffect, useState } from "react";

import { link } from "fs";
import Link from "next/link";

export const metadata = {
  title: "Home",
  // description: "The best movies on the best framework",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  //next.js는 패칭된 데이터를 캐싱해준다 (프레임워크이기 때문)
  //server component에서 fetch 된걸 기억한다
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
