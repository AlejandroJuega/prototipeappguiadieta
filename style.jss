:root {
  --verde:#1E7A3A;
  --amarillo:#F8C24E;
  --crema:#FFF9F0;
  --gris:#EDECE8;
  --shadow:0 8px 24px rgba(0,0,0,.08);
  --radius:18px;
}

body {
  margin:0;
  background:var(--crema);
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;
  color:#1E392A;
}

header {
  position:sticky;
  top:0;
  background:var(--crema);
  border-bottom:1px solid var(--gris);
  z-index:5;
}

.wrap {max-width:1000px;margin:auto;padding:16px;}

.brand {display:flex;align-items:center;gap:12px;}
.logo {
  width:44px;height:44px;border-radius:12px;
  display:grid;place-items:center;
  background:linear-gradient(135deg,#ffdf85,var(--amarillo));
  border:3px solid #e7b63e;color:var(--verde);font-weight:800;
}
.title {font-family:Poppins;font-weight:800;}

nav {display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}
.tab {
  padding:8px 14px;
  border-radius:999px;
  border:1px solid var(--gris);
  background:white;
  box-shadow:var(--shadow);
  cursor:pointer;
  font-weight:600;
}
.tab.active {background:var(--verde);color:#fff;border:none;}

main {padding:20px;}
section {display:none;}
section.active {display:block;}

.card {
  background:#fff;
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  padding:16px;
  margin:14px 0;
}

.btn {
  background:var(--verde);
  color:#fff;
  border:none;
  border-radius:14px;
  padding:10px 16px;
  font-weight:700;
  cursor:pointer;
}

.input {
  width:100%;
  padding:12px;
  border-radius:12px;
  border:1px solid var(--gris);
  font:inherit;
}

.grid {display:grid;gap:14px;}
@media(min-width:700px){.grid.cols-2{grid-template-columns:1fr 1fr;}}

.result {
  display:grid;
  grid-template-columns:90px 1fr;
  gap:12px;
  align-items:center;
  background:white;
  border:1px solid var(--gris);
  border-radius:14px;
  padding:10px;
}
.result img {
  width:90px;height:90px;object-fit:cover;border-radius:12px;
}

.emoji-row {display:flex;gap:12px;}
.emoji {
  flex:1;
  background:white;
  border:2px solid var(--gris);
  border-radius:16px;
  display:grid;
  place-items:center;
  padding:8px;
  cursor:pointer;
  transition:.1s;
}
.emoji.active {border-color:var(--verde);box-shadow:0 0 0 3px #e9f8ef;}
.emoji span {font-size:34px;}

.link {color:var(--verde);font-weight:700;text-decoration:none;}

.chatbox {
  background:#e9f8ef;
  border-radius:14px;
  padding:10px 12px;
  margin-top:10px;
  box-shadow:inset 0 0 4px rgba(0,0,0,.05);
}

footer {text-align:center;padding:30px;color:#64748b;}
