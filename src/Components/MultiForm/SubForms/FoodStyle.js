import React, { useRef } from "react";
import "./SubForm.css";

export default function FoodStyle(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
      foodStyle: [],
    };

    allcheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
    });
    props.modifyIndex(4, styleData);
  };
  const allcheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allcheckboxes.current.includes(el)) {
      allcheckboxes.current.push(el);
    }
  };
  console.log(allcheckboxes);

  const handleReturn = () => {
    props.modifyIndex(2);
  };

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines preférées ?</p>
      <span>Choix multiple.</span>
      <label htmlFor="italian">Italienne</label>
      <input ref={addCheck} type="checkbox" id="italian" value="italian" />

      <label htmlFor="japonese">Japonais</label>
      <input ref={addCheck} type="checkbox" id="japonese" value="japonese" />
      <label htmlFor="indian">Indien</label>
      <input ref={addCheck} type="checkbox" id="indian" value="indian" />

      <label htmlFor="thai">Thailandaise</label>
      <input ref={addCheck} type="checkbox" id="thai" value="thai" />

      <label htmlFor="french">Francaise</label>
      <input ref={addCheck} type="checkbox" id="french" value="french" />

      <label htmlFor="chinese">Chinoise</label>
      <input ref={addCheck} type="checkbox" id="chinese" value="chinese" />

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Pécédent
        </button>

        <button>Valider</button>
      </div>
    </form>
  );
}
