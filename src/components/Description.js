import React from 'react';
import Level from './Level';
import LevelInfo from './LevelInfo';

const Description = (props) => {
  const { attributeSelected, categoryChecked } = props;

  return (
    <div>
      {categoryChecked ? (
        <div>
          <h3>2: Rank (TBD)</h3>
          <h2>{attributeSelected.displayName}</h2>
          <p>{attributeSelected.description}</p>

          <div>
            <Level />
            <div>
              {attributeSelected.milestones.map(milestone => {
                return (
                  <>
                    <p>{milestone.summary}</p>
                    <p>Examples behaviors</p>
                    <ul>
                      {milestone.signals.map((signal, index) => {
                        return (
                          <li key={index}>{signal}</li>
                        );
                      })}
                    </ul>
                    <p>Examples Tasks</p>
                    <ul>
                      {milestone.examples.map((example, index) => {
                        return (
                          <li key={index}>{example}</li>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
            {/* <LevelInfo 
          milestones={attributeSelected.milestones}
        /> */}
          </div>

        </div>
      )
        : 'elige un botón'}
    </div>

  );
};

export default Description;