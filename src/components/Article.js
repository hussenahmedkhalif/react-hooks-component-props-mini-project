import React from "react";

function Article({ title, date = "January 1, 1970", preview,  }) {
  // const renderReadingTime = (minutes) => {
  //   const emojis = [];
  //   if (minutes < 30) {
  //     const cups = Math.ceil(minutes / 5);
  //     for (let i = 0; i < cups; i++) {
  //       emojis.push("☕️");
  //     }
  //   } else {
  //     const bentos = Math.ceil(minutes / 10);
  //     for (let i = 0; i < bentos; i++) {
  //       emojis.push("🍱");
  //     }
  //   }
  //   return `${emojis.join("")} ${minutes} min read`;
  // };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {/* <p>{renderReadingTime(minutes)}</p> */}
    </article>
  );
}

export default Article;
