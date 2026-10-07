import { LegalContact } from "./legal-contact";
export function ScratchImpressum() {
  return (
    <div className="glass-card p-8 rounded-xl">
      <p className="eyebrow">Rechtliche Angaben</p>
      <h1>Impressum</h1>
      <div className="mt-8">
        <LegalContact />
      </div>
    </div>
  );
}
