import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

import './Ingredients.scss';

const Ingredient = () => {
  const [blackBean, setBlackBean] = useState(false);
  const [lettuce, setLettuce] = useState(false);
  const [chicken, setChicken] = useState(false);
  const [beef, setBeef] = useState(false);

  return (
    <div className="ingredient">
      <h1>Food Ingredient in a bowl</h1>
      <div>
        <ToggleSwitch
          id="blackBean"
          checked={blackBean}
          onChange={(checked) => setBlackBean(checked)}
          toggleLabel="Black Bean  //{Normal switch}"
        />
      </div>
      <div>
        <ToggleSwitch
          id="lettuces"
          checked={lettuce}
          onChange={(checked) => setLettuce(checked)}
          optionLabels={['Add', 'Less']}
          toggleLabel="Lettuces  //{Custom labels}"
        />
      </div>
      <div>
        <ToggleSwitch
          id="chicken"
          checked={chicken}
          onChange={(checked) => setChicken(checked)}
          disabled={true}
          toggleLabel="Chicken  //{Disabled switch}"
        />
      </div>
      <div>
        <ToggleSwitch
          id="beef"
          checked={beef}
          onChange={(checked) => setBeef(checked)}
          small={true}
          toggleLabel="Beef  //{Small switch}"
        />
      </div>
    </div>
  );
};

export default Ingredient;
