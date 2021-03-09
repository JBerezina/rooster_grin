import React from 'react';
import ClimberSection from './climberSection/ClimberSection';
import MomAndSonSection from './momAndSonSection/MomAndSonSection';
import ExpertiseSection from './expertiseSection/ExpertiseSection';
import GirlSection from './girlSection/GirlSection';
import JohnDoeSection from './johnDoeSection/JohnDoeSection';


const content  = () => {
    return (
        <div>
            <ClimberSection />
            <MomAndSonSection />
            <ExpertiseSection />
            <GirlSection />
            <JohnDoeSection />
        </div>
    );
}

export default content;
