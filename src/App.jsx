import { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { IVE, GFRIEND, NMIXX } from "./data/groups";

export default function App() {
  const [activeTab, setActiveTab] = useState("IVE");
  const [selectedMember, setSelecterdMember] = useState(null);

  const buttons = ["IVE", "GFRIEND", "NMIXX"];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-gray-100 px-2 py-6">
      <div className="flex space-x-2 rounded-4xl bg-white p-2 shadow-md/30">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveTab(btn)}
            className={`rounded-2xl px-4 py-2 font-medium transition-all duration-200 hover:cursor-pointer ${
              activeTab === btn
                ? "bg-slate-900 text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activeTab === "IVE" &&
          IVE.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              onClick={() => setSelecterdMember(member)}
            />
          ))}
        {activeTab === "GFRIEND" &&
          GFRIEND.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              onClick={() => setSelecterdMember(member)}
            />
          ))}
        {activeTab === "NMIXX" &&
          NMIXX.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              onClick={() => setSelecterdMember(member)}
            />
          ))}
      </div>
      <Modal
        isOpen={selectedMember}
        onClose={() => setSelecterdMember(null)}
        group={activeTab}
        name={selectedMember?.name}
        role={selectedMember?.role}
        description={selectedMember?.description}
      />
    </div>
  );
}
