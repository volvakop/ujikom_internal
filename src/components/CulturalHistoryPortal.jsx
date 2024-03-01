import React from "react";

const CulturalHistoryPortal = () => {
  const articles = [
    {
      id: 1,
      title: "Sejarah Hari Pahlawan: Pertempuran Surabaya 10 November 1945",
      content: "Pertempuran Surabaya adalah salah satu momen paling bersejarah dalam perjuangan kemerdekaan Indonesia. Baca tentang peristiwa penting ini dan pengaruhnya pada perkembangan kota Surabaya.",
      imageUrl: "bung tomo.jpg"
    },
    {
      id: 2,
      title: "Mengenal Budaya Kota Surabaya",
      content: "Surabaya bukan hanya tentang sejarahnya yang kaya, tetapi juga tentang keberagaman budayanya. Telusuri beragam seni, tradisi, dan festival budaya yang memperkaya identitas kota ini.",
      imageUrl: "nari.jpg"
    },
    // {
    //   id: 3,
    //   title: "Stadion Glora Bung Tomo",
    //   content: " Stadion bersejarah bagi warga surabaya, dan saksi hidupnya klub persebaya surabya.",
    //   imageUrl: "stadion.jpg"
    // }
  ];

  return (
    <div className="">
      <h1 className="heading">Portal Berita Budaya dan Sejarah Kota Surabaya</h1>
      <div className="articles">
        {articles.map(article => (
          <div className="article" key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.imageUrl} alt={article.title} className="article-image" width={"300px"} />
            <p>{article.content}</p>
            <a href={`/article/${article.id}`}>Baca selengkapnya</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalHistoryPortal;
