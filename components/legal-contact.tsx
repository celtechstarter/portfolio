"use client";
import { useState } from "react";
type ContactData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  phoneFormatted: string;
};
/** Uses the existing public contact endpoint; nothing is baked into the client bundle. */
export function LegalContact() {
  const [data, setData] = useState<ContactData | null>(null),
    [error, setError] = useState(""),
    [loading, setLoading] = useState(false);
  async function reveal() {
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/contact");
      if (!r.ok) throw new Error();
      const value = await r.json();
      if (!value.name || !value.address || !value.email) throw new Error();
      setData(value);
    } catch {
      setError(
        "Die Angaben konnten nicht geladen werden. Bitte erneut versuchen.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="legal-contact">
      {data ? (
        <address>
          <strong>{data.name}</strong>
          <span>{data.address}</span>
          <a href={"mailto:" + data.email}>{data.email}</a>
          {data.phone && (
            <a href={"tel:" + data.phone}>
              {data.phoneFormatted || data.phone}
            </a>
          )}
        </address>
      ) : (
        <>
          <p>Die Kontaktdaten werden nach einem Klick angezeigt.</p>
          <button
            className="button button-secondary"
            onClick={reveal}
            disabled={loading}
          >
            {loading ? "Wird geladen …" : "Kontaktdaten anzeigen"}
          </button>
        </>
      )}
      <p role="status">{error}</p>
    </div>
  );
}
