"use client"

import { useState } from "react"

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API || "https://basvuru.emrecaneren.com"

const EMPTY = { name: "", phone: "", message: "", kvkk: false, website: "" } // website: bot trap, hidden from people

export function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorText, setErrorText] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setStatus("idle")
    setErrorText("")
    try {
      // requests land in the clinic's panel at basvuru.emrecaneren.com/admin/iletisim
      const res = await fetch(`${CONTACT_API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus("success")
        setForm(EMPTY)
      } else {
        setErrorText(data.error || "")
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="card cf" onSubmit={onSubmit} aria-labelledby="cf-h">
      <div>
        <span className="pg-lbl" data-en="Appointment form">Randevu formu</span>
        <h2 id="cf-h" data-en="Fill in the form and we will call you.">Formu doldurun, sizi arayalım.</h2>
      </div>
      <div className="cf-row">
        <label><span data-en="Full name *">Ad soyad *</span>
          <input type="text" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label><span data-en="Phone *">Telefon *</span>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="05XX XXX XX XX" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </label>
      </div>
      <label><span data-en="Message (optional)">Mesaj (isteğe bağlı)</span>
        <textarea rows={4} placeholder="Hangi konuda görüşmek istediğinizi yazabilirsiniz." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </label>
      <div className="cf-trap" aria-hidden="true">
        <label>Web sitesi
          <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
        </label>
      </div>
      <label className="cf-ok">
        <input type="checkbox" required checked={form.kvkk} onChange={(e) => setForm({ ...form, kvkk: e.target.checked })} />
        <span data-en='I have read the <a href="/kvkk">privacy notice</a> (in Turkish) on processing my name and phone number so the clinic can contact me about an appointment.'>
          Adımın ve telefon numaramın randevu için benimle iletişime geçilmesi amacıyla işlenmesine ilişkin{" "}
          <a href="/kvkk">KVKK Aydınlatma Metni</a>’ni okudum.
        </span>
      </label>
      <div className="row">
        <button type="submit" className="pbtn" disabled={sending}>{sending ? "Gönderiliyor…" : "Gönder →"}</button>
      </div>
      <p className="cf-msg" role="status">
        {status === "success" && "Formunuz alındı. Çalışma saatleri içinde sizi arayacağız."}
      </p>
      {status === "error" && (
        <p className="cf-msg err" role="alert">
          {errorText || "Form gönderilemedi."} Lütfen tekrar deneyin ya da {"+90 543 486 00 55"} numarasını arayın.
        </p>
      )}
      <p className="cf-msg" data-en="For urgent matters, please call.">Acil durumlar için lütfen telefonla ulaşın.</p>
    </form>
  )
}
