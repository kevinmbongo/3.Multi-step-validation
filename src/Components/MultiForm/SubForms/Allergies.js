import React, { useRef } from "react";
import "./SubForm.css";

export default function Allergies(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
      allergies: [],
    };

    allcheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.allergies.push(checkbox.value);
      }
    });
    props.modifyIndex(5, styleData);
  };
  const allcheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allcheckboxes.current.includes(el)) {
      allcheckboxes.current.push(el);
    }
  };
  console.log(allcheckboxes);

  const handleReturn = () => {
    props.modifyIndex(3);
  };

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>As-tu des alleries ?</p>
      <span>Choix multiple.</span>
      <label htmlFor="milk">lait</label>
      <input ref={addCheck} type="checkbox" id="milk" value="milk" />

      <label htmlFor="pollen">Pollen</label>
      <input ref={addCheck} type="checkbox" id="pollen" value="pollen" />

      <label htmlFor="nuts">Noix</label>
      <input ref={addCheck} type="checkbox" id="nuts" value="nuts" />

      <label htmlFor="eggs">ouefs</label>
      <input ref={addCheck} type="checkbox" id="eggs" value="eggs" />

      <label htmlFor="shellfish">fruits de mer</label>
      <input ref={addCheck} type="checkbox" id="shellfish" value="shellfish" />

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Pécédent
        </button>

        <button>Valider</button>
      </div>
    </form>
  );
}
