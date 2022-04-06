import React, { useState } from "react";
import "./SubForm.css";

export default function HateLove(props) {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  });

  const preventFunc = (e) => {
    e.preventDefault();
    props.modifyIndex(6, formData);
  };
  const handleReturn = () => {
    props.modifyIndex(4);
  };
  const handleTxtArea = (e, prefs) => {
    if (prefs === "love") {
      setFormData({
        prefs: {
          ...formData.prefs,
          love: e.target.value,
        },
      });
    } else if (prefs === "hate") {
      setFormData({
        prefs: {
          ...formData.prefs,
          hate: e.target.value,
        },
      });
    }
  };
  return (
    <form className="prefences-form" onSubmit={preventFunc}>
      <p>Parle-nous des alliments que tu préfères et que tu détèstes !</p>

      <label htmlFor="prefered">
        Tes alliments préfère , séparés par une virgule :
      </label>

      <textarea
        onChange={(e) => handleTxtArea(e, "love")}
        id="prefered"
        placeholder="Un ou plusieurs alliments, si tu en as"
        cols="50"
        rows="5"
      ></textarea>

      <label htmlFor="hated">
        Les alliments que tu ne supporte pas , séparés par une virgule :
      </label>
      <textarea
        onChange={(e) => handleTxtArea(e, "hate")}
        id="hated"
        placeholder="Un ou plusieurs alliments, si tu en as"
        cols="50"
        rows="5"
      ></textarea>

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Pécédent
        </button>

        <button>Valider</button>
      </div>
    </form>
  );
}
