const experiences = [
  {title:"CV. Berkat Mitra Solusi",role:"Sales Engineer",date:"Mar 2026 — Mei 2026",icon:"⚡",items:[
    "Menangani penjualan dan pemasaran produk electrical untuk kebutuhan proyek dan industri.",
    "Melakukan identifikasi kebutuhan pelanggan serta memberikan rekomendasi produk sesuai spesifikasi teknis.",
    "Berkoordinasi dengan supplier dan pelanggan terkait harga, spesifikasi, ketersediaan, dan kebutuhan produk.",
    "Menyusun penawaran dan melakukan follow-up terhadap calon pelanggan serta kebutuhan proyek."
  ]},
  {title:"Cleaning AC Malang",role:"Co-Founder",date:"Jan 2024 — Mei 2026",icon:"❄️",items:[
    "Melayani jasa cleaning dan perawatan AC rumah maupun tempat usaha.",
    "Melakukan pemeriksaan kondisi AC dan mengidentifikasi apabila terdapat masalah.",
    "Berkoordinasi dengan pelanggan terkait jadwal dan kebutuhan layanan."
  ]},
  {title:"PT Multi Daya Mitra",role:"Electrician Intern",date:"Jul 2025 — Des 2025",icon:"🔧",items:[
    "Terlibat langsung dalam preventive maintenance di PT Unilever Surabaya, PT HM Sampoerna Pasuruan, dan PDAM Karang Pilang untuk menjaga keandalan dan kondisi peralatan listrik.",
    "Ikut andil dalam peremajaan panel dan kabel di Gardu Induk PT PLN Nusantara Power - UP Gresik untuk meningkatkan keandalan sistem kelistrikan.",
    "Turut serta dalam fabrikasi dan pemasangan panel detuned reactor di PT Onduline Pasuruan untuk membantu mengurangi gangguan harmonisa dan melindungi capacitor bank.",
    "Turut serta dalam penggantian capacitor bank di PT Cargil Pasuruan untuk membantu memperbaiki faktor daya dan menjaga efisiensi sistem kelistrikan.",
    "Terlibat dalam pemasangan dan pengujian MVMDP di Gardu Pelabuhan Tanjung Perak untuk memastikan panel siap digunakan dan bekerja dengan baik.",
    "Turut serta dalam pengujian ACB di Pakuwon Trade Center Surabaya untuk memastikan kondisi dan fungsi pemutus tenaga bekerja dengan baik.",
    "Turut serta dalam pemasangan dan pengujian panel AHF di PDAM Ngagel untuk membantu mengurangi harmonisa pada sistem kelistrikan.",
    "Ikut andil dalam instalasi fire alarm di PT Multi Daya Mitra untuk mendukung sistem deteksi dini terhadap potensi kebakaran.",
    "Mengikuti safety induction sebelum bekerja di area proyek untuk memahami prosedur keselamatan, potensi bahaya, dan aturan kerja yang berlaku."
  ]},
  {title:"RSIA Melati Husada Malang",role:"Engineer",date:"Agu 2021 — Mei 2023",icon:"🏥",items:[
    "Melakukan pengecekan dan perawatan rutin pada fasilitas dan peralatan di area rumah sakit RSIA Melati Husada.",
    "Melakukan perbaikan pada instalasi dan peralatan listrik yang mengalami gangguan / masalah.",
    "Berkontribusi dalam instalasi dan pemasangan AC di pembangunan rumah sakit RSU Melati Husada yang baru.",
    "Melakukan pemeriksaan dan monitoring kondisi peralatan serta pengisian data inventaris/peralatan untuk mendukung pencatatan dan pemeliharaan fasilitas rumah sakit."
  ]},
  {title:"PT. PLN (Persero) ULP Tumpang",role:"Electrician Intern",date:"Jul 2019 — Nov 2019",icon:"🔌",items:[
    "Turut serta dalam penggantian trafo distribusi di Gardu Pakis Malang, untuk membantu menjaga keandalan penyaluran listrik kepada pelanggan.",
    "Terlibat dalam penggantian kabel AAAC menjadi AAAC-S di wilayah Tajinan-Tumpang untuk meningkatkan keandalan dan keamanan jaringan distribusi.",
    "Ikut andil dalam perbaikan 5 tiang listrik SUTM yang roboh akibat cuaca buruk di Jabung untuk memulihkan jaringan dan pasokan listrik.",
    "Turut serta dalam pemeliharaan trafo dan panel distribusi untuk menjaga kondisi peralatan dan keandalan sistem distribusi.",
    "Berkontribusi dalam inspeksi gangguan jaringan untuk membantu menemukan penyebab gangguan dan mempercepat proses penanganannya."
  ]}
];

const projects = [
  {title:"Pemasangan panel charging motor listrik merk ALVA di 9 titik lokasi di wilayah sekitar Malang",date:"2026",icon:"🔋",items:[
    "Alfamart | Jl. Candi Panggung, Mojolangu, Kec. Lowokwaru, Kota Malang",
    "Alfamart | Jl. Kendal Sari Bar, No.17d, Tulusrejo, Kec. Lowokwaru, Kota Malang.",
    "Alfamart | Jl. Pattimura, No.16 Kel. Sisir, Temas, Kec. Batu, Kota Batu",
    "Alfamart | Jl. Bendungan Sutami, No.15, Kel. Sumbersari, Kec. Lowokwaru, Kota Malang",
    "Alfamart | Jl. Surabaya, No.14, Kel. Gading Kasri, Kec. Lowokwaru, Kota Malang",
    "TPI GrabCar Rental Pool | Jl. Karang Widoro No.8A, Kota Malang",
    "Kedai Kopi Karyawan | Jl. Raya Perusahaan No.22, Losawi, Tanjungtirto, Kec. Singosari, Kab. Malang",
    "Masjid Besar Fathurrohman | Jl. Jend. Ahmad Yani Utara No.2013, Arjosari, Kec. Blimbing, Kota Malang",
    "Masjid Nurul Ikhsan | Jl. Kapi Woro, Keduyo, Mangliawan, Kec. Pakis, Kab. Malang",
  ]},
  {title:"Rancang bangun synchronous buck converter 120 V ke 24 V 250 Watt untuk sistem PLTPH",date:"2026",icon:"⚡",items:[
    "Merancang dan mensimulasikan rangkaian menggunakan PLECS serta membuat skematik dan PCB menggunakan KiCad.",
    "Melakukan fabrikasi, perakitan, pengujian, dan pengambilan data prototype."
  ]},
  {title:"Perancangan dan perakitan motor starter berbasis VFD dengan kendali manual dan otomatis melalui HMI",date:"2025",icon:"⚙️",items:[
    "Merancang layout panel dan wiring sistem VFD dengan kendali manual dan otomatis melalui HMI.",
    "Melakukan perakitan, wiring, instalasi kontrol, serta pengujian sistem."
  ]},
  {title:"Perancangan dan perakitan rangkaian kontrol dan daya untuk 3 motor listrik pada sistem penggergaji kayu",date:"2024",icon:"🪚",items:[
    "Merancang rangkaian kontrol dan daya 3 motor dengan metode Star-Delta, Forward-Reverse, dan DOL.",
    "Membuat wiring, memasang komponen, dan melakukan pengujian fungsi sistem."
  ]}
];

const certificates = [
  ["Sertifikat Kompetensi BNSP - Supervisor Perancangan Instalasi Pemanfaatan Tegangan Rendah","2026"],
  ["Sertifikat Kompetensi ESDM - Ketua Grub Perancangan Pemanfaatan Tegangan Rendah","2026"],
  ["Sertifikat Tes Bahasa Inggris Untuk Komunikasi Internasional (TOEIC) - Skor 645","2026"],
  ["Sertifikat Anggota Subdivisi Kesekretariatan UKM Olah Raga Politeknik Negeri Malang","2026"],
  ["Sertifikat Pelatihan K3 Kelistrikan Level Pemula","2026"],
  ["Sertifikat Pelatihan Bahasa Inggris - Speaking Partner Basic 1","2026"],
  ["Sertifikat Kepanitiaan Polinema Basketball Competition (PBC)","2025"],
  ["Sertifikat Kepanitiaan Sportifor Interschool Cup (SISC)","2024"],
  ["Sertifikat Kompetensi BNSP - Pemasangan Listrik Bangunan Sederhana","2021"],
  ["Sertifikat Peserta Lomba Keterampilan Siswa (LKS) SMK","2021"]
];

const experienceGrid=document.getElementById("experienceGrid");
const projectGrid=document.getElementById("projectGrid");
const certificateGrid=document.getElementById("certificateGrid");
const modal=document.getElementById("detailModal");
const modalContent=document.getElementById("modalContent");

function cardHtml(x,type,i){
  return `<article class="${type}-card glass" onclick="openDetail('${type}',${i})">
    <div class="card-top"><span class="card-icon">${x.icon||"📜"}</span><span class="card-year">${x.date||x[1]}</span></div>
    <h3>${x.title||x[0]}</h3>
    ${x.role?`<h4>${x.role}</h4>`:""}
    ${x.items?`<p>${x.items[0]}</p>`:""}
    <span class="view-more">VIEW DETAILS →</span>
  </article>`;
}
experienceGrid.innerHTML=experiences.map((x,i)=>cardHtml(x,"experience",i)).join("");
projectGrid.innerHTML=projects.map((x,i)=>cardHtml(x,"project",i)).join("");
certificateGrid.innerHTML=certificates.map((x,i)=>cardHtml(x,"certificate",i)).join("");

function openDetail(type,i){
  let x;
  if(type==="experience") x=experiences[i];
  else if(type==="project") x=projects[i];
  else x={title:certificates[i][0],date:certificates[i][1],items:["Tempat untuk bukti sertifikat."]};
  const title=x.title;
  const cleanTitle=title.length>55?title.slice(0,55)+"…":title;
  let body="";
  if(type==="certificate"){
    const safe=certificates[i][0].replace(/[^a-zA-Z0-9]+/g,"-").replace(/-$/,"");
    body=`<h2>${cleanTitle}</h2><p class="modal-sub">${x.date} • CERTIFICATE</p>
      <div class="gallery-slot" style="height:420px">📜<br>Letakkan file sertifikat di:<br><strong>assets/certificates/${safe}.jpg</strong><br><br>atau PDF dengan nama yang sama.</div>
      <p class="modal-note">Jika nama file berbeda, edit link/file pada bagian certificates di <strong>script.js</strong>.</p>`;
  }else{
    body=`<h2>${cleanTitle}</h2><p class="modal-sub">${x.role||"PROJECT"} • ${x.date}</p>
      <ul>${x.items.map(item=>`<li>${item}</li>`).join("")}</ul>
      <div class="modal-gallery">
        <div class="gallery-slot">📷<br>Tempat foto / dokumentasi 1</div>
        <div class="gallery-slot">📷<br>Tempat foto / dokumentasi 2</div>
        <div class="gallery-slot">📷<br>Tempat foto / dokumentasi 3</div>
        <div class="gallery-slot">📷<br>Tempat foto / dokumentasi 4</div>
      </div>
      <p class="modal-note">Tambahkan foto dokumentasi ke folder <strong>assets/${type==="project"?"projects":"experience"}/</strong>, lalu sesuaikan HTML/JavaScript jika ingin foto tampil otomatis.</p>`;
  }
  modalContent.innerHTML=body;
  modal.classList.add("show");
  document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("show");document.body.style.overflow=""}
document.getElementById("modalClose").onclick=closeModal;
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.getElementById("enterBtn").onclick=()=>document.getElementById("welcome").classList.add("hide");
document.getElementById("menuToggle").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id))}})
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));

function randomStrike(){
  const s=document.createElement("div");s.className="strike";
  s.style.left=(8+Math.random()*84)+"%";s.style.top=(Math.random()*35)+"%";
  s.style.height=(80+Math.random()*300)+"px";s.style.transform=`rotate(${(-18+Math.random()*36)}deg)`;
  document.getElementById("lightning").appendChild(s);setTimeout(()=>s.remove(),900);
}
setInterval(()=>{if(Math.random()>.25)randomStrike()},2200);
