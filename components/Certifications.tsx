import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";

/* ================= TYPES ================= */

type Credential = {
  id?: string;
  url?: string;
};

type Cert = {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  link?: string;
  file?: string;
  platform?: string;
  platformLogo?: string;
  credential?: Credential;
};

/* ================= HELPERS ================= */

const isImage = (url?: string) =>
  !!url && /\.(png|jpe?g|webp|gif|svg)$/i.test(url);

const isPDF = (url?: string) => !!url && /\.pdf$/i.test(url);

const getUrl = (c?: Cert | null) => {
  if (!c) return undefined;

  let raw: string | undefined;
  if (c.link) raw = c.link;
  else if (c.file) raw = `/certificates/${c.file}`;

  if (!raw) return undefined;

  try {
    return raw.startsWith("/") ? encodeURI(raw) : raw;
  } catch {
    return raw;
  }
};

/* ================= CARD ================= */

const CertCard: React.FC<{
  cert: Cert;
  onPreview: (cert: Cert) => void;
}> = ({ cert, onPreview }) => {
  const url = getUrl(cert);
  const ongoing =
    (cert.title || "").toLowerCase().includes("ongoing") ||
    (!cert.file && !cert.link);

  const rawLogo = cert.platformLogo || cert.platform;
  const logoSrc =
    rawLogo &&
    (rawLogo.startsWith("/") || /\.(png|jpe?g|svg|webp)$/i.test(rawLogo))
      ? rawLogo
      : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl p-4 h-full border ${
        ongoing
          ? "bg-white/6 border-amber-700/20"
          : "bg-white/5 border-white/10"
      }`}
    >
      <div className="flex gap-4">
        {logoSrc && (
          <img
            src={logoSrc}
            alt="platform"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
        )}

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            {ongoing && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-600/10 text-amber-300">
                Ongoing
              </span>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-1">
            {cert.issuer} • {cert.year}
          </p>

          <p className="text-sm text-gray-300 mt-2">{cert.description}</p>

          <div className="flex gap-3 mt-4 flex-wrap">
            {url ? (
              <>
                <button
                  onClick={() => onPreview(cert)}
                  className="text-sm px-3 py-1 rounded-md bg-cyan-600/10 text-cyan-300 border border-cyan-700/20"
                >
                  Preview
                </button>

                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="text-sm px-3 py-1 rounded-md border border-white/10 text-gray-100"
                >
                  Download
                </a>
              </>
            ) : (
              <span className="text-xs text-gray-400">Coming Soon</span>
            )}

            {cert.credential?.url && (
              <a
                href={cert.credential.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1 rounded-md bg-amber-600/10 text-amber-300 border border-amber-700/20"
              >
                Credential
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= MAIN ================= */

const Certifications: React.FC = () => {
  const certs: Cert[] = DATA.certifications ?? [];
  const [selected, setSelected] = useState<Cert | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const visibleCerts = showAll ? certs : certs.slice(0, 4);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 sticky top-24"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-mono mb-6">
              Certifications
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Verified Learning
            </h2>
            <p className="text-gray-300">
              Professional certifications & course completions.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visibleCerts.map((cert, i) => (
                <CertCard
                  key={i}
                  cert={cert}
                  onPreview={(c) => {
                    const url = getUrl(c);
                    if (isImage(url) || isPDF(url)) setSelected(c);
                    else if (url) window.open(url, "_blank");
                  }}
                />
              ))}
            </div>

            {/* VIEW MORE */}
            {certs.length > 4 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll((p) => !p)}
                  className="px-6 py-2 rounded-full bg-cyan-600/10 text-cyan-300 border border-cyan-700/20 hover:bg-cyan-600/20 transition"
                >
                  {showAll ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelected(null)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-black rounded-xl overflow-hidden max-w-4xl w-full"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ×
            </button>

            {isImage(getUrl(selected)) ? (
              <img
                src={getUrl(selected)}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain"
              />
            ) : (
              <iframe
                src={getUrl(selected)}
                className="w-full h-[80vh] bg-white"
                title={selected.title}
              />
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export { Certifications };
