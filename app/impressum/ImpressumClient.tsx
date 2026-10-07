import Link from "next/link";
import { ScratchImpressum } from "@/components/ScratchImpressum";
export default function ImpressumClient() {
  return (
    <div className="legal-page px-6">
      <div className="mx-auto">
        <Link href="/" className="text-link mb-8">
          ← Zurück zum Portfolio
        </Link>
        <ScratchImpressum />
      </div>
    </div>
  );
}
