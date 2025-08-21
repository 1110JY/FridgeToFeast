import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Fridge to Feast?",
          answer:
            "Fridge to Feast is a web application designed to help users minimise food waste and explore authentic East Asian cuisine by generating recipes based on ingredients they already have at home. It also includes a tool to locate nearby stores for specialty ingredients.",
        },
        {
          question: "How does Fridge to Feast reduce food waste?",
          answer:
            "The app prioritises recipes that use perishable or leftover ingredients you input, helping you make the most of what's already in your fridge or pantry.",
        },
        {
          question: "Is Fridge to Feast free to use?",
          answer: "Yes! The app is completely free, with no hidden charges or premium features.",
        },
      ],
    },
    {
      category: "Recipe Matching",
      questions: [
        {
          question: "How does the recipe-matching feature work?",
          answer:
            "Enter the ingredients you have, and the app will suggest authentic East Asian recipes that use those ingredients. The results are powered by the Spoonacular API.",
        },
        {
          question: "Can I filter recipes by dietary restrictions?",
          answer:
            "Currently, the app focuses on East Asian cuisine without dietary filters, but this is a planned feature for future updates.",
        },
        {
          question: "What if I'm missing an ingredient for a recipe?",
          answer:
            "The app will suggest common substitutions (e.g., light soy sauce for dark soy sauce) to help you adapt recipes with what you have in a future update.",
        },
      ],
    },
    {
      category: "Ingredient Finder",
      questions: [
        {
          question: "How does the ingredient finder work?",
          answer:
            'Enter your city and an ingredient (e.g., "gochujang", "New York"), and the app will show nearby stores that carry it using Google Maps.',
        },
        {
          question: "Why can't I find a specific ingredient in my area?",
          answer:
            "The tool relies on Google Maps' business listings. Smaller or specialty stores may not appear if they're unlisted. Try broader search terms.",
        },
        {
          question: "Does the app track my exact location?",
          answer:
            "No. For privacy, the app only uses city-level data you manually enter, not precise GPS coordinates.",
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          question: "Why am I getting limited recipe results?",
          answer:
            "The Spoonacular API has a daily request limit for free accounts. If you hit this limit, try again later or refresh the page.",
        },
        {
          question: "The ingredient finder isn't loading store results. What should I do?",
          answer:
            "Ensure you've entered a valid city name and ingredient. If the issue persists, check your internet connection or try a different browser.",
        },
        {
          question: "Is Fridge to Feast available as a mobile app?",
          answer:
            "Not yet, but the website is mobile-friendly. A dedicated app may be developed in the future.",
        },
      ],
    },
    {
      category: "Future Features",
      questions: [
        {
          question: "Will more cuisines be added?",
          answer: "Yes! Future updates may include recipes from other global cuisines.",
        },
        {
          question: "Are user accounts or saved recipes planned?",
          answer:
            "Potentially. Account features (e.g., saving favorites, meal planning) are under consideration for future releases.",
        },
        {
          question: "How can I support Fridge to Feast?",
          answer:
            "Share the app with others! If monetisation is introduced later (e.g., optional donations), contributions will help cover API and hosting costs.",
        },
      ],
    },
    {
      category: "Sustainability & Mission",
      questions: [
        {
          question: "How does Fridge to Feast align with sustainability goals?",
          answer:
            "The app supports SDG 12 (Responsible Consumption) by reducing household food waste and promoting mindful cooking.",
        },
        {
          question: "Can I submit my own recipes or feedback?",
          answer:
            "Not currently, but user-generated content and feedback tools are planned for future versions.",
        },
      ],
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        Frequently <span className="highlight">Asked</span> Questions
      </h1>
      <p className="faq-subtitle">
        Find answers to common questions about Fridge to Feast, our recipe matching system,
        ingredient finder, and more to help you make the most of our platform.
      </p>

      <div className="faq-grid">
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h2 className="faq-category-title">{category.category}</h2>
            <ul className="faq-questions-list">
              {category.questions.map((item, itemIndex) => {
                const questionId = `${catIndex}-${itemIndex}`;
                return (
                  <li key={itemIndex} className="faq-item">
                    <div 
                      className="faq-question-container" 
                      onClick={() => toggleQuestion(questionId)}
                      aria-expanded={openQuestion === questionId}
                    >
                <span className="faq-question">{item.question}</span>
                <span className={`faq-arrow ${openQuestion === questionId ? 'open' : ''}`}>
                     ▼
                      </span>
                    </div>
                    <div 
                    className={`faq-answer ${openQuestion === questionId ? 'show' : ''}`}
                    aria-hidden={openQuestion !== questionId}
                    >
                      {item.answer}
                    </div>
                </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;