import React from 'react';
import Level from './Level';
import LevelInfo from './LevelInfo';

const Description = (props) => {
    const { attributeSelected, categoryChecked } = props;
    return (
      <div className="description__container">
        {categoryChecked ? (
          <div className="description__info">
          <h3 className="description__subtitle">2: Rank (TBD)</h3>
          <h2 className="description__title">{attributeSelected.displayName}</h2>
          <p className="description__text">{attributeSelected.description}</p>
          <div className="description__level__container">
              <Level />
              <div className="levelInfo">
              {attributeSelected.milestones.map(milestone => {
                return (
                  <React.Fragment>
                      <p className="levelInfo__summary">{milestone.summary}</p>
                      <h4 className="levelInfo__behaviors">Examples behaviors</h4>
                      <ul className="levelInfo__behavior-list">
                      {milestone.signals.map((signal, index) => {
                        return (
                          <li className="levelInfo__behavior-item" key={index}>{signal}</li>
                            );
                        })}
                    </ul>
                      <h4 className="levelInfo__tasks">Examples Tasks</h4>
                      <ul className="levelInfo__task-list">
                          {milestone.examples.map((example, index) => {
                            return (
                              <li className="levelInfo__task-item" key={index}>{example}</li>
                                );
                            })}
                        </ul>
                    </React.Fragment>
                            );
              })}
            </div>
              {/* <LevelInfo 
                            milestones={attributeSelected.milestones}
                        /> */}
            </div>
        </div>
) : 'elige un botón'}
                        
      </div>
                        
                        );
                    };
                    
                    export default Description;