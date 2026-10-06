import { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import FilterBar from "./components/FilterBar";
import { IVE, GFRIEND, NMIXX } from "./data/groups";

export default function App() {
  const [activeTab, setActiveTab] = useState("IVE");
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const buttons = ["IVE", "GFRIEND", "NMIXX"];

  const currentGroupData =
    activeTab === "IVE" ? IVE : activeTab === "GFRIEND" ? GFRIEND : NMIXX;

  const filteredMembers = currentGroupData.filter((member) => {
    const matchesName = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "" || member.role === selectedRole;
    return matchesName && matchesRole;
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-6 overflow-hidden bg-gray-100 px-2 py-6">
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
      <div className="flex max-w-2xl flex-col items-center gap-4 sm:flex-row">
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />
      </div>
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <Card
              key={`${activeTab}-${member.id}`}
              image={member.image}
              name={member.name}
              role={member.role}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      ) : (
        <p className="py-8 text-gray-500">Member tidak ditemukan.</p>
      )}
      <Modal
        isOpen={selectedMember}
        onClose={() => setSelectedMember(null)}
        group={activeTab}
        name={selectedMember?.name}
        role={selectedMember?.role}
        description={selectedMember?.description}
      />
    </div>
  );
}
