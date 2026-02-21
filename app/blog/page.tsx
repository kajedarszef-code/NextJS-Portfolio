"use client";

import { useEffect, useState } from "react";
import "./blog.css";
import Card from "@/components/shared/card/card";

type News = {
  id: number;
  title: string;
  body: string;
};

export default function Blog() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((response) => response.json())
      .then(setNews);
  }, []);

  return (
    <>
      <h1>BLOG</h1>

      {news.map((n, index) => (
        <Card key={index} title={n.title} body={n.body}></Card>
      ))}
    </>
  );
}
