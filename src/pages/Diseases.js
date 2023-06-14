import React from "react";

const diseases = [
  {
    id: 1,
    name: "Esophagitis",
    description:
      "Esophagitis is inflammation, irritation, or swelling of the esophagus.",
    imageSrc: "https://datasets.simula.no/images/kvasir/esophagitis.jpg",
  },
  {
    id: 2,
    name: "Normal",
    description:
      "The endoscopic images show a normal esophagus without any abnormalities.",
    imageSrc:
      "https://d1pij0k2lbf86p.cloudfront.net/wp-content/uploads/attachments/c7.jpg",
  },
  {
    id: 3,
    name: "Polyps",
    description:
      "Polyps are abnormal tissue growths that typically form in the colon.",
    imageSrc: "https://datasets.simula.no/images/kvasir/polyp.jpg",
  },
  {
    id: 4,
    name: "Ulcerative Colitis",
    description:
      "Ulcerative colitis is an inflammatory bowel disease that causes long-lasting inflammation and ulcers in the digestive tract.",
    imageSrc: "https://datasets.simula.no/images/kvasir/ulcerative-colitis.jpg",
  },
  {
    id: 5,
    name: "Barretts Esophagus",
    description:
      "Barrett's esophagus is a condition where the lining of the esophagus changes, increasing the risk of esophageal cancer.",
    imageSrc: "https://datasets.simula.no/images/kvasir/z-line.jpg",
  },
  {
    id: 6,
    name: "Pylori Stomach",
    description:
      "Pylori stomach is an infection caused by the bacteria Helicobacter pylori, which can lead to stomach ulcers and inflammation.",
    imageSrc: "https://datasets.simula.no/images/kvasir/pylorus.jpg",
  },
  {
    id: 7,
    name: "Dyed Lifted Polyps",
    description:
      "Dyed lifted polyps are polyps that have been identified and lifted during the endoscopy procedure.",
    imageSrc:
      "https://datasets.simula.no/images/kvasir/dyed-and-lifted-polyp.jpg",
  },
  {
    id: 8,
    name: "Dyed Resection Margins",
    description:
      "Residual polyp tissue may lead to continued growth and in worst case malignancy development. ",
    imageSrc: "https://datasets.simula.no/images/kvasir/cecum.jpg",
  },
];

const Diseases = () => {
  return (
    <div className="flex flex-col items-center container mx-auto p-4 gap-4">
      <h1 className=" text-4xl font-bold mb-4 ">
        Diseases Predicted using our Model
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {diseases.map((disease) => (
          <div key={disease.id} className="bg-gray-300 rounded-lg p-4 shadow">
            <img
              src={disease.imageSrc}
              alt={disease.name}
              className="mb-2 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{disease.name}</h2>
            <p>{disease.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diseases;
