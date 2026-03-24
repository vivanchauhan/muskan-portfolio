export default function Footer() {
  return (
    <footer style={{ padding:'24px var(--px)', borderTop:'1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, fontStyle:'italic', color:'var(--muted)' }}>Muskan Chauhan</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:'var(--muted)', letterSpacing:1 }}>© 2025 — Brand & Social Media Strategist</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:'var(--muted)', letterSpacing:1 }}>Noida, Uttar Pradesh · India</div>
    </footer>
  )
}
