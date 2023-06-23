import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Otarossoni.png",
      name: "Otávio Monteiro Rossoni",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "É assim que se faz!" },
      { type: "paragraph", content: "Tá ficando bom!" },
      { type: "link", content: "linkedin.com/in/otávio-monteiro-rossoni" },
    ],
    publishedAt: new Date("2023-03-27 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Otarossoni.png",
      name: "Otávio Monteiro Rossoni",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "É assim que se faz!" },
      { type: "paragraph", content: "Começando a entender alguma coisa!" },
      { type: "link", content: "linkedin.com/in/otávio-monteiro-rossoni" },
    ],
    publishedAt: new Date("2023-03-20 21:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
