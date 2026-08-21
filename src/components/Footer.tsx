import { FlaskConical } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gold/40 text-gold">
            <FlaskConical size={14} strokeWidth={1.75} />
          </span>
          <span className="text-sm text-graycool-light">
            {profile.name} &middot; {profile.title}
          </span>
        </div>
        <p className="text-xs text-graycool text-center">
          {profile.university} &middot; Preparing for graduate study in Europe
        </p>
        <p className="text-xs text-graycool">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
