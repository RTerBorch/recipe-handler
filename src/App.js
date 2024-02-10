import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initialProducts = [
  {
    id: 1,
    namn: "Apple",
    viktGram: 0,
    kalorier: 1.034,
    naringsvarden: [
      { namn: "Protein", varde: 0.3, enhet: "g" },
      { namn: "Fett", varde: 0.2, enhet: "g" },
      { namn: "Kolhydrater", varde: 25.1, enhet: "g" },
    ],
  },
  {
    id: 2,
    namn: "Banana",
    viktGram: 0,
    kalorier: 1.168,
    naringsvarden: [
      { namn: "Protein", varde: 1.3, enhet: "g" },
      { namn: "Fett", varde: 0.4, enhet: "g" },
      { namn: "Kolhydrater", varde: 27.0, enhet: "g" },
    ],
  },
  {
    id: 3,
    namn: "Strawberry",
    viktGram: 0,
    kalorier: 0.376,
    naringsvarden: [
      { namn: "Protein", varde: 0.8, enhet: "g" },
      { namn: "Fett", varde: 0.4, enhet: "g" },
      { namn: "Kolhydrater", varde: 7.7, enhet: "g" },
    ],
  },
  {
    id: 4,
    namn: "Chicken",
    viktGram: 0,
    kalorier: 1.9,
    naringsvarden: [
      { namn: "Protein", varde: 25.0, enhet: "g" },
      { namn: "Fett", varde: 10.0, enhet: "g" },
      { namn: "Kolhydrater", varde: 0.0, enhet: "g" },
    ],
  },
  {
    id: 5,
    namn: "Rice",
    viktGram: 0,
    kalorier: 1.025,
    naringsvarden: [
      { namn: "Protein", varde: 2.5, enhet: "g" },
      { namn: "Fett", varde: 0.5, enhet: "g" },
      { namn: "Kolhydrater", varde: 22.0, enhet: "g" },
    ],
  },
  {
    id: 6,
    namn: "Cream",
    viktGram: 0,
    kalorier: 2.0,
    naringsvarden: [
      { namn: "Protein", varde: 2.0, enhet: "g" },
      { namn: "Fett", varde: 20.0, enhet: "g" },
      { namn: "Kolhydrater", varde: 3.0, enhet: "g" },
    ],
  },
  {
    id: 7,
    namn: "Beans",
    viktGram: 0,
    kalorier: 0.845,
    naringsvarden: [
      { namn: "Protein", varde: 5.0, enhet: "g" },
      { namn: "Fett", varde: 0.5, enhet: "g" },
      { namn: "Kolhydrater", varde: 15.0, enhet: "g" },
    ],
  },
];

export default function App() {
  return (
    <div>
      <FoodPlanner />
    </div>
  );
}

function FoodPlanner() {
  const [livsmedelList, setLivsmedelList] = useState(initialProducts);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <FoodItems livsmedelList={livsmedelList} />
        </div>
        <div className="col-md-3">
          <FoodItems livsmedelList={livsmedelList} />
        </div>
      </div>
    </div>
  );
}

function FoodItems({ livsmedelList }) {
  return (
    <div className="accordion" id="accordionFood">
      <h1>List of Livsmedel</h1>
      {livsmedelList.map((livsmedel) => (
        <LivsmedelContent livsmedel={livsmedel} key={livsmedel.id} />
      ))}
    </div>
  );
}

function LivsmedelContent({ livsmedel }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item" key={livsmedel.id}>
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        onClick={toggleAccordion}
        data-bs-target={`#collapse${livsmedel.id}`}
        aria-expanded="false"
        aria-controls={`collapse${livsmedel.id}`}
      >
        {livsmedel.namn}
      </button>

      <div
        id={`collapse${livsmedel.id}`}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={`heading${livsmedel.id}`}
        data-bs-parent="#accordionFood"
      >
        <div className="accordion-body">
          <p>{`Calories: ${livsmedel.kalorier} (per gram)`}</p>
          {livsmedel.naringsvarden.map((naringsvarde, index) => (
            <p key={index}>
              {naringsvarde.namn} : {naringsvarde.varde} {naringsvarde.enhet}
            </p>
          ))}
          <button className="btn btn-primary">Add to recipe</button>
        </div>
      </div>
    </div>
  );
}

function planRecipe() {}
