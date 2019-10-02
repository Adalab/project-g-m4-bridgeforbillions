import React from 'react';


const EmployeeSatatus = () => {
  return (
    <div className="page__description__container">
      <h2 className="page__title">Tealify</h2>
      <ul className="description__list">
        <li className="list__item"> Tealify is a transparency tool to define career paths in Tech teams. </li>
        <li className="list__item">  By selecting each area, grouped in categories, the user can inspect the different levels of expertise (ranked from 0 to 5 points). Each level represents a list of expected behaviours and tasks. </li>
        <li className="list__item"> Once all the areas have been ranked, the progress circle visualization will show us the percentage of mastery in each category. Based on that, a dropdown will suggest different names for job titles.</li>
      </ul>
    </div>
  );
};

export default EmployeeSatatus;