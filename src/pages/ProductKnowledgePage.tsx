/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import { faqList } from "../data/faq";
import { productList } from "../data/products";
import { quizLevels } from "../data/quizBank";

import { PageHeader } from "../components/Common";
import { ChevronDown, ChevronUp, BookOpen, HelpCircle, BrainCircuit, Search, CheckCircle, XCircle, RotateCcw, Award } from "lucide-react";

type Tab = "faq" | "library" | "quiz";

export default function ProductKnowledgePage() {
  const [tab, setTab] = useState<Tab>("faq");
  return (
    <div className="page">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-telkom-blue rounded-full" />
        <PageHeader title="Product Knowledge" subtitle="Pahami produk, kuasai jualan" />
      </div>
      <div className="flex ui-tabs mb-4">
        <TabBtn icon={HelpCircle} label="FAQ" active={tab === "faq"} onClick={() => setTab("faq")} />
        <TabBtn icon={BookOpen} label="Library" active={tab === "library"} onClick={() => setTab("library")} />
        <TabBtn icon={BrainCircuit} label="Kuis" active={tab === "quiz"} onClick={() => setTab("quiz")} />
      </div>
      {tab === "faq" && <FaqTab />}
      {tab === "library" && <LibraryTab />}
      {tab === "quiz" && <QuizTab />}
    </div>
  );
}

function TabBtn({ icon: Icon, label, active, onClick }: { icon: any; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-1 py-2.5 text-xs font-semibold rounded-lg transition ${
        active ? "ui-tab-active" : "text-gray-600"
      }`}
    >
      <Icon size="14" />
      {label}
    </button>
  );
}

// ── FAQ ──
const faqGroups: Record<string, { title: string; icon: string }> = {
  dasar: { title: "Dasar & Konsep", icon: "📘" },
  rekomendasi: { title: "Rekomendasi Paket", icon: "🎯" },
  produk: { title: "Produk & Add-on", icon: "🔧" },
  keberatan: { title: "Menangani Keberatan", icon: "💬" },
  skenario: { title: "Skenario Lapangan", icon: "🏃" },
};

function FaqTab() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = faqList.filter(
    (f) =>
      f.tanya.toLowerCase().includes(search.toLowerCase()) ||
      f.jawab.toLowerCase().includes(search.toLowerCase())
  );

  // Group filtered results by tag
  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    for (const faq of filtered) {
      const key = faq.tag || "lainnya";
      if (!groups[key]) groups[key] = [];
      groups[key].push(faq);
    }
    // Order by group priority
    const order = ["dasar", "rekomendasi", "produk", "keberatan", "skenario"];
    return order.filter((k) => groups[k]).map((k) => ({
      key: k,
      title: faqGroups[k]?.title || k,
      icon: faqGroups[k]?.icon || "📌",
      items: groups[k],
    }));
  }, [filtered]);

  // Determine groups that are fully visible (for jump-to filters)
  const availableGroups = grouped.map((g) => g.key);

  return (
    <div>
      <div className="relative mb-3">
        <Search size="16" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari FAQ..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setActiveGroup(null);
          }}
          className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-telkom-red"
        />
      </div>

      {/* Group filter pills */}
      {!search && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          <button
            onClick={() => setActiveGroup(null)}
            className={`text-xs font-semibold rounded-full px-3 py-1.5 transition ${
              activeGroup === null ? "bg-telkom-dark text-white" : "bg-white border border-gray-200 text-gray-700"
            }`}
          >
            Semua
          </button>
          {availableGroups.map((key) => (
            <button
              key={key}
              onClick={() => setActiveGroup(activeGroup === key ? null : key)}
              className={`text-xs font-semibold rounded-full px-3 py-1.5 transition ${
                activeGroup === key ? "bg-telkom-dark text-white" : "bg-white border border-gray-200 text-gray-700"
              }`}
            >
              {faqGroups[key]?.icon} {faqGroups[key]?.title || key}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {grouped
          .filter((g) => !activeGroup || g.key === activeGroup)
          .map((group) => (
            <section key={group.key}>
              <div className="flex items-center gap-2 mb-2 px-1">
                <span className="text-sm">{group.icon}</span>
                <h3 className="text-sm font-extrabold text-telkom-dark">{group.title}</h3>
                <span className="text-[11px] text-gray-400">({group.items.length})</span>
              </div>
              <div className="space-y-2">
                {group.items.map((faq) => (
                  <div key={faq.id} className="ui-card overflow-hidden">
                    <button
                      onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                      className="w-full flex items-start justify-between p-4 text-left"
                    >
                      <span className="text-sm font-medium flex-1 pr-2">{faq.tanya}</span>
                      {openId === faq.id ? <ChevronUp size="18" className="shrink-0 mt-0.5" /> : <ChevronDown size="18" className="shrink-0 mt-0.5" />}
                    </button>
                    {openId === faq.id && (
                      <div className="px-4 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          {faq.tag && <span className="badge-blue text-xs">{faqGroups[faq.tag]?.title || faq.tag}</span>}
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{faq.jawab}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        {grouped.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-8">Tidak ada FAQ yang cocok.</p>
        )}
      </div>
    </div>
  );
}

// ── LIBRARY ──
function LibraryTab() {
  const [selected, setSelected] = useState<string | null>(null);
  const product = selected ? productList.find((p) => p.id === selected) : null;

  if (product) {
    return (
      <div>
        <button onClick={() => setSelected(null)} className="text-sm text-telkom-blue font-medium mb-3">&larr; Kembali ke library</button>
        <div className="ui-card p-4">
          <h2 className="text-lg font-bold mb-1">{product.nama}</h2>
          <p className="text-sm text-gray-700 mb-4">{product.penjelasan}</p>
          <div className="space-y-3">
            <Section title="Fungsi Utama">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {product.fungsiUtama.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </Section>
            <Section title="Cocok Untuk">{product.cocokUntuk}</Section>
            <Section title="Contoh Usaha">
              <div className="flex flex-wrap gap-1.5">
                {product.contohUsaha.map((u, i) => <span key={i} className="badge-blue">{u}</span>)}
              </div>
            </Section>
            <Section title="Masalah Pelanggan yang Diselesaikan">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {product.masalahPelanggan.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </Section>
            <Section title="Contoh Kalimat Jualan">
              <div className="bg-gray-50 rounded-lg p-3 italic text-sm text-gray-700">"{product.contohKalimat}"</div>
            </Section>
            <Section title="Keberatan Umum">
              <div className="flex flex-wrap gap-1.5">
                {product.keberatanUmum.map((k, i) => <span key={i} className="badge-red">{k}</span>)}
              </div>
            </Section>
            <Section title="Catatan Penting">
              <p className="text-sm text-gray-700">{product.catatanPenting}</p>
            </Section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {productList.map((p) => (
        <button
          key={p.id}
          onClick={() => setSelected(p.id)}
          className="w-full ui-card p-4 text-left hover:border-gray-200 transition"
        >
          <h3 className="font-semibold text-sm">{p.nama}</h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.penjelasan}</p>
        </button>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">{title}</h4>
      <div className="text-sm">{children}</div>
    </div>
  );
}

// ── QUIZ ──
type QuizView = "levels" | "playing" | "result";
type QuizProgress = { scores: Record<string, number>; names: Record<string, string>; certificates: Record<string, string>; };
const PASSING_SCORE = 100;

function QuizTab() {
  const [view, setView] = useState<QuizView>("levels");
  const [currentLevel, setCurrentLevel] = useState<any>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [technicianName, setTechnicianName] = useState("");
  const [progress, setProgress] = useState<QuizProgress>(() => {
    try {
      return JSON.parse(localStorage.getItem("indibiz_quiz_progress") || '{"scores":{},"names":{},"certificates":{}}');
    } catch {
      return { scores: {}, names: {}, certificates: {} };
    }
  });
  const completed = progress.scores;
  const allPassed = quizLevels.every((level) => (completed[level.id] || 0) >= PASSING_SCORE);
  const [badges, setBadges] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("indibiz_badges") || "[]");
    } catch {
      return [];
    }
  });

  const startQuiz = (level: any) => {
    setCurrentLevel(level);
    setCurrentQ(0);
    setAnswers([]);
    setView("playing");
  };

  const answer = (idx: number) => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (newAnswers.length < currentLevel.questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate score
      const correct = newAnswers.filter(
        (a, i) => a === currentLevel.questions[i].correctIndex
      ).length;
      const score = Math.round((correct / currentLevel.questions.length) * 100);
      const newProgress = { ...progress, scores: { ...progress.scores, [currentLevel.id]: Math.max(score, progress.scores[currentLevel.id] || 0) } };
      setProgress(newProgress);
      localStorage.setItem("indibiz_quiz_progress", JSON.stringify(newProgress));
      if (score >= PASSING_SCORE) {
        const newBadges = badges.includes(currentLevel.badgeName)
          ? badges
          : [...badges, currentLevel.badgeName];
        setBadges(newBadges);
        localStorage.setItem("indibiz_badges", JSON.stringify(newBadges));
      }
      setView("result");
    }
  };

  if (view === "levels") {
    return (
      <div>
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-3 mb-4 border border-amber-200">
          <div className="flex items-center gap-2 mb-1.5">
            <Award size="18" className="text-amber-600" />
            <span className="font-semibold text-sm">Progress hadiah</span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            Lulus minimal {PASSING_SCORE}% di semua 6 level untuk eligible hadiah. Progress: {quizLevels.filter((l) => (completed[l.id] || 0) >= PASSING_SCORE).length}/6 level.
          </p>
          {allPassed && <p className="mt-2 text-sm font-black text-green-700">✅ Eligible hadiah — semua level lulus.</p>}
        </div>

        {badges.length > 0 && (
          <div className="bg-white/70 rounded-xl p-3 mb-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Award size="18" className="text-amber-600" />
              <span className="font-semibold text-sm">Badge kamu</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {badges.map((b) => (
                <span key={b} className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-3">
          {quizLevels.map((level) => (
            <div key={level.id} className="ui-card p-4">
              <h3 className="font-semibold text-sm mb-1">{level.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{level.description}</p>
              <p className="text-xs text-gray-400 mb-3">{level.questions.length} soal</p>
              <div className="flex items-center justify-between">
                <button onClick={() => startQuiz(level)} className="btn-primary text-xs !px-4 !py-2">
                  Mulai Kuis
                </button>
                {completed[level.id] !== undefined && (
                  <span className={`text-xs font-semibold ${completed[level.id] >= PASSING_SCORE ? "text-green-600" : "text-orange-500"}`}>
                    {completed[level.id] >= PASSING_SCORE ? `✅ ${completed[level.id]}%` : `${completed[level.id]}%`}
                  </span>
                )}
                {badges.includes(level.badgeName) && (
                  <Award size="18" className="text-amber-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view === "playing" && currentLevel) {
    const q = currentLevel.questions[currentQ];
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">
            Soal {currentQ + 1} dari {currentLevel.questions.length}
          </span>
          <span className="text-xs font-medium text-telkom-blue">{currentLevel.name}</span>
        </div>
        <div className="ui-card p-4">
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
            <div
              className="bg-telkom-blue h-1.5 rounded-full transition-all"
              style={{ width: `${((currentQ + 1) / currentLevel.questions.length) * 100}%` }}
            />
          </div>
          <h3 className="font-semibold text-sm mb-4">{q.question}</h3>
          <div className="space-y-2">
            {q.options.map((opt: string, i: number) => (
              <button
                key={i}
                onClick={() => answer(i)}
                className="w-full text-left p-3 rounded-lg border border-gray-200 text-sm hover:border-telkom-red hover:bg-red-50 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (view === "result" && currentLevel) {
    const correct = answers.filter(
      (a, i) => a === currentLevel.questions[i].correctIndex
    ).length;
    const score = Math.round((correct / currentLevel.questions.length) * 100);
    const passed = score >= PASSING_SCORE;

    return (
      <div>
        <div className="ui-card p-6 text-center">
          {passed ? (
            <div className="mb-4">
              <Award size="48" className="mx-auto text-amber-500 mb-2" />
              <h2 className="text-lg font-bold text-green-600">Lulus!</h2>
              <p className="text-sm text-gray-600 mt-1">Skor: {score}% • Kamu dapat badge:</p>
              <p className="font-bold text-telkom-blue mt-1">{currentLevel.badgeName}</p>
            </div>
          ) : (
            <div className="mb-4">
              <XCircle size="48" className="mx-auto text-orange-400 mb-2" />
              <h2 className="text-lg font-bold text-orange-500">Sedikit lagi!</h2>
              <p className="text-sm text-gray-600 mt-1">Skor: {correct}/{currentLevel.questions.length} ({score}%)</p>
            </div>
          )}

          {passed && (
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-left">
              <label className="label">Nama teknisi untuk sertifikat</label>
              <input className="ui-input" value={technicianName} onChange={(e) => setTechnicianName(e.target.value)} placeholder="Contoh: Gambir Cideng" />
              <button className="btn-primary text-sm mt-3 w-full" onClick={() => generateCertificate(currentLevel, score, technicianName, progress, setProgress)} disabled={!technicianName.trim()}>
                Buat Sertifikat PNG
              </button>
              {progress.certificates[currentLevel.id] && (
                <a className="btn-outline text-sm mt-2 w-full" href={progress.certificates[currentLevel.id]} download={`sertifikat-${currentLevel.id}.png`}>
                  Download Sertifikat
                </a>
              )}
            </div>
          )}

          <div className="space-y-2 mt-4 text-left">
            {currentLevel.questions.map((q: any, i: number) => {
              const isCorrect = answers[i] === q.correctIndex;
              return (
                <div key={i} className={`p-3 rounded-lg text-xs ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="flex items-start gap-2">
                    {isCorrect ? <CheckCircle size="14" className="text-green-600 mt-0.5 shrink-0" /> : <XCircle size="14" className="text-red-500 mt-0.5 shrink-0" />}
                    <div>
                      <p className="font-medium">{q.question}</p>
                      <p className="text-gray-600 mt-0.5">
                        {isCorrect ? (
                          <span className="text-green-700">✓ {q.options[q.correctIndex]}</span>
                        ) : (
                          <>
                            <span className="text-red-600">Jawabanmu: {q.options[answers[i]]}</span>
                            <br />
                            <span className="text-green-700">Jawaban benar: {q.options[q.correctIndex]}</span>
                          </>
                        )}
                      </p>
                      {q.explanation && <p className="text-gray-500 mt-1 italic">{q.explanation}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-6 justify-center">
            <button onClick={() => startQuiz(currentLevel)} className="btn-outline text-sm flex items-center gap-1.5">
              <RotateCcw size="14" />
              Ulangi Kuis
            </button>
            <button onClick={() => setView("levels")} className="btn-primary text-sm">
              Ke Level Lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function generateCertificate(level: any, score: number, name: string, progress: QuizProgress, setProgress: (p: QuizProgress) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "#f7f3ec";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#c83a45";
  ctx.fillRect(0, 0, canvas.width, 28);
  ctx.fillRect(0, canvas.height - 28, canvas.width, 28);
  ctx.strokeStyle = "#c83a45";
  ctx.lineWidth = 6;
  ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

  ctx.fillStyle = "#182230";
  ctx.textAlign = "center";
  ctx.font = "900 48px Inter, system-ui, sans-serif";
  ctx.fillText("Sertifikat Indibiz Helper", canvas.width / 2, 160);
  ctx.font = "500 24px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#667085";
  ctx.fillText("Diberikan kepada", canvas.width / 2, 235);
  ctx.font = "900 58px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#c83a45";
  ctx.fillText(name.trim(), canvas.width / 2, 315);
  ctx.font = "700 28px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#182230";
  ctx.fillText(`Telah menyelesaikan ${level.name}`, canvas.width / 2, 390);
  ctx.font = "600 24px Inter, system-ui, sans-serif";
  ctx.fillText(`${level.badgeName} • Skor ${score}%`, canvas.width / 2, 440);
  ctx.font = "500 20px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#667085";
  ctx.fillText(new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }), canvas.width / 2, 520);
  ctx.font = "800 22px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#182230";
  ctx.fillText("Indibiz Teknisi Helper", canvas.width / 2, 650);

  const dataUrl = canvas.toDataURL("image/png");
  const newProgress = {
    ...progress,
    names: { ...progress.names, [level.id]: name.trim() },
    certificates: { ...progress.certificates, [level.id]: dataUrl },
  };
  setProgress(newProgress);
  localStorage.setItem("indibiz_quiz_progress", JSON.stringify(newProgress));
}
