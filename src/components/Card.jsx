export default function Card({ image, name, role }) {
  return (
    <div className="w-75 rounded-xl bg-white pb-4 text-center shadow-md/45">
      <img className="rounded-t-xl" src={image} alt={name} />
      <h1 className="mt-2.5 text-lg/relaxed font-semibold">{name}</h1>
      <p className="font-medium text-gray-600">{role}</p>
    </div>
  );
}
