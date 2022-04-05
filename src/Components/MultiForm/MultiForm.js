import React, { useState } from "react";
import Indicator from "./Indicator/indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import "./MultiForm.css";
export default function MultiForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState({
    dietform: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });
  return (
    <div className="container-multiform">
      <Indicator />
      <CardBegin />
      {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> : ""}
    </div>
  );
}
