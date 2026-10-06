export default function FilterBar({
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
}) {
  return (
    <>
      <div className="w-full sm:w-3/5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari nama member..."
          className="w-full rounded-full border border-gray-400 px-3 py-1 text-sm shadow-sm focus:outline-gray-500"
        />
      </div>
      <div className="w-full sm:w-2/5">
        <select
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
          className="w-full rounded-full border border-gray-400 px-2 py-1 text-sm shadow-sm hover:cursor-pointer"
        >
          <option value="">Semua Posisi</option>
          <option value="Leader">Leader</option>
          <option value="Main Vocalist">Main Vocalist</option>
          <option value="Main Dancer">Main Dancer</option>
          <option value="Main Rapper">Main Rapper</option>
          <option value="Visual">Visual</option>
          <option value="Maknae">Maknae</option>
        </select>
      </div>
    </>
  );
}
