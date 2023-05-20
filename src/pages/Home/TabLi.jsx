import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabLi = () => {
  const princess = "Princess"
  const [disneyPrincess, setDisneyPrincess] = useState([])

  const handleTabOneData = () => {
    console.log("clicked");
    fetch(`http://localhost:5000/myToys?subCategory=Princess`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };

  return (
    <div className="bg-slate-200 p-5 rounded-lg">
      <Tabs>
        <TabList>
          <Tab onClick={handleTabOneData}>Disney Princes</Tab>
          <Tab>Frozen Dolls</Tab>
          <Tab>Donald Duck</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabLi;
