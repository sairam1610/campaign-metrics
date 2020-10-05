import React from 'react';
import './App.scss';
import CampaignTable from "./containter/Table/campaignTable";

function App() {
  return (
    <div className="App">
      <h3 className="app-header">MoEngage Campaigns Metrics</h3>
      <CampaignTable></CampaignTable>
    </div>
  );
}

export default App;
