// import { Mail, MapPin } from "lucide-react";

export default function ProfileCard({
  name = "Sarah Amelia",
  role = "Product Designer",
  location = "Jakarta, Indonesia",
  email = "sarah.amelia@mail.com",
  bio = "Merancang produk digital yang sederhana dan mudah dipakai orang banyak.",
  avatarInitials = "SA",
}) {
  return (
    <div className="flex min-h-70 items-center justify-center bg-stone-50 p-8">
      <div className="w-full max-w-sm rounded-xl border border-stone-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-medium text-white">
            {avatarInitials}
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-base font-medium text-stone-900">
              {name}
            </h2>
            <p className="truncate text-sm text-stone-500">{role}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-stone-600">{bio}</p>

        <div className="mt-4 space-y-2 border-t border-stone-100 pt-4">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            {/* <MapPin size={15} className="shrink-0" /> */}
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-500">
            {/* <Mail size={15} className="shrink-0" /> */}
            <span className="truncate">{email}</span>
          </div>
        </div>

        <button className="mt-5 w-full rounded-lg bg-stone-900 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800">
          Lihat profil
        </button>
      </div>
    </div>
  );
}
