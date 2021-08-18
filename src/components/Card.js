import React from "react";
const Card = ({ item }) => {
  // {
  //     "char_id": 114,
  //     "name": "Charles McGill",
  //     "birthday": "Unknown",
  //     "occupation": [
  //         "Lawyer"
  //     ],
  //     "img": "https://vignette.wikia.nocookie.net/breakingbad/images/3/3e/BCS_S3_ChuckMcGill.jpg/revision/latest?cb=20170327185308",
  //     "status": "Deceased",
  //     "nickname": "Chuck",
  //     "appearance": null,
  //     "portrayed": "Michael McKean",
  //     "category": "Better Call Saul",
  //     "better_call_saul_appearance": [
  //         1,
  //         2,
  //         3,
  //         4
  //     ]
  // }
  return (
    <div className="card">
      <img src={item.img} alt="img" />
      <div className="card-info">
        <h1>{item.name}</h1>
        <h3>{item.nickname}</h3>
        <p>{item.birthday}</p>
        <p>{item.status}</p>
      </div>
    </div>
  );
};
export default Card;
