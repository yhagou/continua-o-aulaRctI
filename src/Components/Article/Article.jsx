import React from "react";
import "./styles.css";

export function Article({ title, provider, description, img }) {
  return (
    <article id="article">
      <img src={img} alt="" />

      <div className="article-infos">
        <h2>{title}</h2>
        <h3> {provider}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}
