import { Header, StatsCard, TripCard } from "../../../components";
import React from "react";

const dashboard = () => {
  const user = { name: "Adrian" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}👋`}
        description="Track activity,trends and popular destinations in real time"
      />
      <StatsCard />
      <TripCard />
    </main>
  );
};

export default dashboard;
