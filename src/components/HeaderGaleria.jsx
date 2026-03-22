import Image from "next/image";

export default function HeaderReparacion() {
  return (
    <header className="grid grid-cols-4 justify-center align-middle bg-[var(--panel)] border border-[var(--border)] p-3 mt-2">
      <p className="pl-2 mono-ui text-[var(--muted)]">GALERÍA</p>
      <div className="flex align-middle col-start-4 col-end-5 justify-end gap-4 mr-4">
        <p className="text-2xl flex align-middle rotate-90 text-[var(--accent)]">»</p>
      </div>
    </header>
  );
}
