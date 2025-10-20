"use client";

export default function ButtonIcon({ Icon, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-ghost btn-circle">
      <Icon className="w-5 h-5" />
    </button>
  );
}