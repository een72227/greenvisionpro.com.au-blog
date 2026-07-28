import { UserRound } from "lucide-react";

export default function AuthorCard({ author, role }: { author: string; role: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl2 border border-black/5 bg-white p-4 shadow-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
        <UserRound size={20} />
      </span>
      <div>
        <p className="font-display text-sm font-semibold text-ink-dark">{author}</p>
        <p className="text-xs text-ink-soft">{role}</p>
      </div>
    </div>
  );
}
