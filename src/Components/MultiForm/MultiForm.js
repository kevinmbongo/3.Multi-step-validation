import React, { useState } from "react";
import Indicator from "./Indicator/indicator";
import CardBegin from "./Infos/CardBegin";
import "./MultiForm.css";
import DietForm from "./SubForms/DietForm";
export default function MultiForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState({
    dietform: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });

  const modifyIndex = (index) => {
    setFormIndex(index);
  };

  return (
    <div className="container-multiform">
      <Indicator />

      {formIndex === 1 ? (
        <CardBegin modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <DietForm modifyIndex={modifyIndex} />
      ) : (
        ""
      )}
    </div>
  );
}
