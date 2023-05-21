import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Princess from "./Princess";
const TabLi = () => {
  const princess = "Princess";
  const frozen = "FrozenDolls";
  const duck = "DonaldDuck";
  const [disneyPrincess, setDisneyPrincess] = useState([]);
  const [frozenDolls, setfrozenDolls] = useState([]);
  const [donaldDuck, setdonaldDuck] = useState([]);

  const handleTabOneData = () => {
    console.log("clicked");
    fetch(`https://fairy-tale-treasures-server.vercel.app/category?subCategory=${princess}`)
      .then((res) => res.json())
      .then((data) => {
        setDisneyPrincess(data);
      });
  };

  const handleTabTwoData = () => {
    fetch(`https://fairy-tale-treasures-server.vercel.app/category?subCategory=${frozen}`)
      .then((res) => res.json())
      .then((data) => {
        setfrozenDolls(data);
      });
  };

  const handleTabThreeData = () => {
    fetch(`https://fairy-tale-treasures-server.vercel.app/category?subCategory=${duck}`)
      .then((res) => res.json())
      .then((data) => {
        setdonaldDuck(data);
      });
  };

  return (
    <div className="bg-slate-200 p-5 rounded-lg">
      <Tabs>
        <TabList>
          <Tab onClick={handleTabOneData}>Disney Princes</Tab>
          <Tab onClick={handleTabTwoData}>Frozen Dolls</Tab>
          <Tab onClick={handleTabThreeData}>Donald Duck</Tab>
        </TabList>

        <TabPanel>
          <div className="lg:flex gap-4">
            {disneyPrincess.map((princess) => (
              <Princess key={princess._id} princess={princess}></Princess>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:flex gap-4">
            {frozenDolls.map((princess) => (
              <Princess key={princess._id} princess={princess}></Princess>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="lg:flex gap-4">
            {donaldDuck.map((princess) => (
              <Princess key={princess._id} princess={princess}></Princess>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabLi;
