// // import Navigation from "../../components/navigation";
// // "use client";
// // import { useEffect, useState } from "react";

// import Movie from "../../components/movie";
// import { API_URL } from "../constants";
// import styles from "../styles/home.module.css";

// export const metadata = {
//   title: "Home",
//   // description: "The best movies on the best framework",
// };

// async function getMovies() {
//   // await new Promise((resolve) => setTimeout(resolve, 10000));
//   //next.js는 패칭된 데이터를 캐싱해준다 (프레임워크이기 때문)
//   //server component에서 fetch 된걸 기억한다
//   const response = await fetch(API_URL);
//   const json = await response.json();
//   return json;
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return (
//     <div className={styles.container}>
//       {movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           id={movie.id}
//           poster_path={movie.poster_path}
//           title={movie.title}
//         />
//       ))}
//     </div>
//   );
// }

import Movie from "../../components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

export const runtime = "edge";
