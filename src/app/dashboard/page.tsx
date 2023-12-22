import React from "react";
import { Contract, columns } from "./_contracts/columns";
import { DataTable } from "./_contracts/contracts-table";

async function getData(): Promise<Contract[]> {
  //TODO fetch data from API and convert expired contracts to Contract type
  return [
    {
      id: "728ed52f",
      clientname: "Jan Kowalski",
      employeename: "Maria Kowalska",
      expiresin: "3 dni",
    },
    {
      id: "9a4f3b2c",
      clientname: "John Doe",
      employeename: "Jane Doe",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "c5e1a3b2",
      clientname: "Alice Johnson",
      employeename: "Bob Johnson",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "f8d2e9a1",
      clientname: "Emily Smith",
      employeename: "Michael Smith",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "3b9a2c8f",
      clientname: "Alex Brown",
      employeename: "Olivia Brown",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "7c3a9f2b",
      clientname: "Daniel Davis",
      employeename: "Sophia Davis",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "1f2b3c4d",
      clientname: "Grace Taylor",
      employeename: "Ethan Taylor",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "2e3d4f5a",
      clientname: "Lily Miller",
      employeename: "Aiden Miller",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "5a1b2c3d",
      clientname: "Thomas Wilson",
      employeename: "Emma Wilson",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
    {
      id: "4f8e2d3a",
      clientname: "Sophie Turner",
      employeename: "Benjamin Turner",
      expiresin: `${Math.floor(Math.random() * 15) + 1} dni`,
    },
  ];

  //   const updatedRecords = records.map((record) => {
  //     const expiresInDays = parseInt(record.expiresin.split(" ")[0]);
  //     const expirationDate = new Date(currentDate);
  //     expirationDate.setDate(currentDate.getDate() + expiresInDays);
  //     return {
  //       ...record,
  //       expiresin: expirationDate.toISOString(),
  //     };
  //   });
}

const DashboardHomePage = async () => {
  const data = await getData();

  return (
    <div className="py-3">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardHomePage;
