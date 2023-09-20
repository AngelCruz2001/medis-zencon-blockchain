"use client";
import React, { useEffect, useState } from "react";
import GraphComponent from "./GraphComponent";
import { Card, CardBody } from "@nextui-org/react";

const exampleData1 = {
  nodes: [
    { id: "A", group: 1 },
    { id: "B", group: 1 },
    { id: "C", group: 2 },
    { id: "D", group: 2 },
    { id: "E", group: 3 },
    { id: "F", group: 3 },
  ],
  links: [
    { source: "A", target: "B", value: 1 },
    { source: "A", target: "C", value: 2 },
    { source: "B", target: "D", value: 3 },
    { source: "C", target: "E", value: 4 },
    { source: "D", target: "F", value: 5 },
    { source: "F", target: "E", value: 5 },
  ],
};

const GraphPage: React.FC = () => {
  const [exampleData, setExampleData] = useState({
    nodes: [],
    links: [],
  });

  const fetchData = async () => {
    const resp = await fetch("http://localhost:3000/api/family");
    const data = await resp.json();
    setExampleData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold">Family Tree</h1>
      <Card className="mt-7 min-h-[500px]">
        <CardBody>
          <GraphComponent data={exampleData} />
        </CardBody>
      </Card>
    </div>
  );
};

export default GraphPage;
