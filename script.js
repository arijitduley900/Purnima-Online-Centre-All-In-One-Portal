const categories = [
  {id:"all", name:"✨ সব পরিষেবা"},
  {id:"citizen", name:"📜 সার্টিফিকেট ও নাগরিক পরিষেবা"},
  {id:"education", name:"🎓 শিক্ষা ও স্কলারশিপ"},
  {id:"land", name:"🌾 জমি, কৃষি ও গ্রামীণ পরিষেবা"},
  {id:"vehicle", name:"🚗 গাড়ি, লাইসেন্স ও চালান"},
  {id:"jobs", name:"💼 সরকারি চাকরি & Employment"},
  {id:"health", name:"❤️ স্বাস্থ্য & সামাজিক প্রকল্প"},
  {id:"business", name:"🏢 ব্যবসা, Tax & Licence"}
];

const services = [
  // Citizen
  {cat:"citizen",icon:"🏛️",name:"WB e-District",desc:"Citizen Services",url:"https://edistrict.wb.gov.in/",accent:"#2178d0"},
  {cat:"citizen",icon:"📜",name:"WBPMS Gram Panchayat Certificate",desc:"Residence / Income / Character & other GP Certificates",url:"https://wbpms.in/citizen/",accent:"#7447df"},
  {cat:"citizen",icon:"👶",name:"Birth & Death Registration WB",desc:"Janma-Mrityu Tathya / Certificate Services",url:"https://janma-mrityutathya.wb.gov.in/",accent:"#0e9c91"},
  {cat:"citizen",icon:"🪪",name:"Aadhaar / UIDAI",desc:"Aadhaar Services",url:"https://myaadhaar.uidai.gov.in/",accent:"#4858b9"},
  {cat:"citizen",icon:"💳",name:"PAN Services",desc:"PAN Application / Services",url:"https://www.incometax.gov.in/",accent:"#2178d0"},
  {cat:"citizen",icon:"🗳️",name:"Voter Services",desc:"Election / Voter Portal",url:"https://voters.eci.gov.in/",accent:"#7447df"},
  {cat:"citizen",icon:"🇮🇳",name:"Indian Citizenship",desc:"Citizenship application & information",url:"https://indiancitizenshiponline.nic.in/",accent:"#0e9c91"},
  {cat:"citizen",icon:"👮",name:"Police Clearence Certificate",desc:"WEST BENGAL POLICE",url:"https://pcc.wb.gov.in/",accent:"#4858b9"},
  // Education
  {cat:"education",icon:"🎓",name:"SVMCM Scholarship",desc:"Swami Vivekananda Merit-cum-Means Scholarship",url:"https://svmcm.wb.gov.in/",accent:"#2178d0"},
  {cat:"education",icon:"🌙",name:"Aikyashree Scholarship",desc:"Minority Students Scholarship – Govt. of West Bengal",url:"https://dev.aikyashree.wb.gov.in/",accent:"#7447df"},
  {cat:"education",icon:"📗",name:"OASIS Scholarship",desc:"SC / ST / OBC Scholarship – West Bengal",url:"https://oasis.wb.gov.in/",accent:"#0e9c91"},
  {cat:"education",icon:"🏛️",name:"Nabanna Scholarship / CMRF",desc:"Chief Minister's Relief Fund – Educational Assistance",url:"https://cmrf.wb.gov.in/",accent:"#4858b9"},
  {cat:"education",icon:"🏅",name:"National Scholarship Portal",desc:"Central Government Scholarship Services",url:"https://scholarships.gov.in/",accent:"#2178d0"},
  {cat:"education",icon:"📝",name:"NMMS Scholarship WB",desc:"National Means-cum-Merit Scholarship – School Education WB",url:"https://banglarshiksha.wb.gov.in/scholarships/",accent:"#7447df"},
  {cat:"education",icon:"🎒",name:"West Bengal Freeship Scheme",desc:"Tuition Fee Waiver for eligible technical students",url:"https://wbscte.wb.gov.in/",accent:"#0e9c91"},
  {cat:"education",icon:"👩‍🎓",name:"Kanyashree",desc:"K1 / K2 – West Bengal Girls' Education Scheme",url:"https://wbkanyashree.gov.in/",accent:"#4858b9"},
  {cat:"education",icon:"🎓",name:"Kanyashree K3",desc:"Postgraduate Scholarship – via SVMCM",url:"https://svmcm.wb.gov.in/",accent:"#2178d0"},
  {cat:"education",icon:"📚",name:"Hindi Scholarship Scheme",desc:"Post-Matric Hindi Scholarship information",url:"https://wbsche.wb.gov.in/",accent:"#7447df"},
  {cat:"education",icon:"🏫",name:"Banglar Shiksha",desc:"West Bengal School Education Portal",url:"https://banglarshiksha.gov.in/",accent:"#0e9c91"},
  {cat:"education",icon:"📄",name:"WBCHSE Scholarship Directory",desc:"Official school education resources",url:"https://wbchse.wb.gov.in/",accent:"#4858b9"},
  {cat:"education",icon:"🏆",name:"LIC Golden Jubilee Scholarship",desc:"LIC Golden Jubilee Foundation Scholarship",url:"https://licindia.in/",accent:"#2178d0"},
  {cat:"education",icon:"🏅",name:"G P Birla Scholarship",desc:"Merit-cum-means support for eligible WB/Jharkhand students",url:"https://www.gpbirlaedufoundation.com/",accent:"#7447df"},
  {cat:"education",icon:"✏️",name:"G P Birla Apply Online",desc:"Direct online scholarship application",url:"https://www.gpbirlaedufoundation.com/",accent:"#0e9c91"},
  {cat:"education",icon:"📘",name:"Sitaram Jindal Foundation Scholarship",desc:"Scholarship for eligible students in multiple courses",url:"https://www.sitaramjindalfoundation.org/",accent:"#4858b9"},
  // Land
  {cat:"land",icon:"🗺️",name:"Banglarbhumi",desc:"Land & Mutation",url:"https://banglarbhumi.gov.in/BanglarBhumi/Home.action",accent:"#2178d0"},
  {cat:"land",icon:"👷",name:"MGNREGA Job Card",desc:"Job Card / Worker Information",url:"https://nregastrep.nic.in/",accent:"#7447df"},
  {cat:"land",icon:"🌱",name:"PM-KISAN",desc:"Farmer Services",url:"https://pmkisan.gov.in/",accent:"#0e9c91"},
  {cat:"land",icon:"🌾",name:"Ration Card / Food WB",desc:"Food & Supplies",url:"https://food.wb.gov.in/",accent:"#4858b9"},
  {cat:"land",icon:"📗",name:"NFSA",desc:"National Food Security",url:"https://nfsa.gov.in/",accent:"#2178d0"},
  {cat:"land",icon:"🏠",name:"WBPRD Property Tax",desc:"Panchayat Online Property Tax",url:"https://prdeodb.wb.gov.in/",accent:"#7447df"},
  // Vehicle
  {cat:"vehicle",icon:"🚘",name:"Parivahan Sewa",desc:"Driving / Vehicle Services",url:"https://parivahan.gov.in/",accent:"#2178d0"},
  {cat:"vehicle",icon:"🪪",name:"Sarathi Parivahan",desc:"Driving / Learner Licence",url:"https://sarathi.parivahan.gov.in/",accent:"#7447df"},
  {cat:"vehicle",icon:"🚙",name:"Vahan",desc:"Vehicle Related Services",url:"https://vahan.parivahan.gov.in/",accent:"#0e9c91"},
  {cat:"vehicle",icon:"🚦",name:"e-Challan",desc:"Traffic Challan Check / Payment",url:"https://echallan.parivahan.gov.in/",accent:"#4858b9"},
  // Jobs
  {cat:"jobs",icon:"💼",name:"Employment Bank WB",desc:"West Bengal Job Seeker / Employment Services",url:"https://employmentbankwb.gov.in/",accent:"#2178d0"},
  {cat:"jobs",icon:"🏛️",name:"WBPSC",desc:"WBCS / Clerkship / Miscellaneous & WB Govt Recruitment",url:"https://www.wbpsc.gov.in/",accent:"#7447df"},
  {cat:"jobs",icon:"🏫",name:"WB School Service Commission",desc:"School Service / Teacher Recruitment",url:"https://www.westbengalssc.com/",accent:"#0e9c91"},
  {cat:"jobs",icon:"👮",name:"West Bengal Police Recruitment",desc:"WBP / Kolkata Police Recruitment",url:"https://prb.wb.gov.in/",accent:"#4858b9"},
  {cat:"jobs",icon:"📋",name:"SSC",desc:"CGL / CHSL / MTS / GD / JE / Stenographer",url:"https://ssc.gov.in/",accent:"#2178d0"},
  {cat:"jobs",icon:"🇮🇳",name:"UPSC",desc:"Civil Services / NDA / CDS / CAPF & Central Recruitment",url:"https://www.upsc.gov.in/",accent:"#7447df"},
  {cat:"jobs",icon:"📝",name:"UPSC Online Application",desc:"UPSC Examination Application Portal",url:"https://upsconline.nic.in/",accent:"#0e9c91"},
  {cat:"jobs",icon:"🚆",name:"RRB Kolkata",desc:"Railway Recruitment Board Kolkata",url:"https://www.rrbkolkata.gov.in/",accent:"#4858b9"},
  {cat:"jobs",icon:"🚉",name:"Indian Railways",desc:"Railway Recruitment / Official Railway Portal",url:"https://indianrailways.gov.in/",accent:"#2178d0"},
  {cat:"jobs",icon:"🏦",name:"IBPS",desc:"Bank PO / Clerk-CSA / SO / RRB Recruitment",url:"https://www.ibps.in/",accent:"#7447df"},
  {cat:"jobs",icon:"🏦",name:"SBI Careers",desc:"SBI PO / Clerk / Specialist Officer Recruitment",url:"https://sbi.co.in/web/careers",accent:"#0e9c91"},
  {cat:"jobs",icon:"💰",name:"RBI Opportunities",desc:"RBI Recruitment / Vacancies",url:"https://opportunities.rbi.org.in/",accent:"#4858b9"},
  {cat:"jobs",icon:"🌾",name:"NABARD Careers",desc:"NABARD Recruitment / Career Notices",url:"https://www.nabard.org/",accent:"#2178d0"},
  {cat:"jobs",icon:"📈",name:"SEBI Careers",desc:"SEBI Recruitment / Vacancies",url:"https://www.sebi.gov.in/",accent:"#7447df"},
  {cat:"jobs",icon:"💼",name:"National Career Service",desc:"Government Jobs & Career Services",url:"https://www.ncs.gov.in/",accent:"#0e9c91"},
  {cat:"jobs",icon:"📮",name:"India Post GDS",desc:"Gramin Dak Sevak Recruitment",url:"https://indiapostgdsonline.gov.in/",accent:"#4858b9"},
  {cat:"jobs",icon:"🪖",name:"Indian Army Recruitment",desc:"Join Indian Army",url:"https://joinindianarmy.nic.in/",accent:"#2178d0"},
  {cat:"jobs",icon:"⚓",name:"Indian Navy Recruitment",desc:"Join Indian Navy",url:"https://www.joinindiannavy.gov.in/",accent:"#7447df"},
  {cat:"jobs",icon:"✈️",name:"Indian Air Force Recruitment",desc:"Agniveervayu / Air Force Recruitment",url:"https://agnipathvayu.cdac.in/",accent:"#0e9c91"},
  {cat:"jobs",icon:"🛟",name:"Coast Guard Recruitment",desc:"Indian Coast Guard Recruitment",url:"https://joinindiancoastguard.cdac.in/",accent:"#4858b9"},
  // Health
  {cat:"health",icon:"❤️",name:"Ayushman Bharat",desc:"PM-JAY Services",url:"https://pmjay.gov.in/",accent:"#2178d0"},
  {cat:"health",icon:"🩺",name:"Swasthya Sathi",desc:"West Bengal Health",url:"https://swasthyasathi.gov.in/",accent:"#7447df"},
  {cat:"health",icon:"👩‍🎓",name:"Kanyashree",desc:"West Bengal Scheme",url:"https://wbkanyashree.gov.in/",accent:"#0e9c91"},
  {cat:"health",icon:"🏥",name:"Swasthya O Paribar Kalyan",desc:"West Bengal Health & Family Welfare",url:"https://www.wbhealth.gov.in/",accent:"#4858b9"},
  {cat:"health",icon:"💊",name:"eSanjeevani",desc:"National Telemedicine Service",url:"https://esanjeevani.mohfw.gov.in/",accent:"#2178d0"},
  {cat:"health",icon:"🧾",name:"Health ID / ABHA",desc:"Ayushman Bharat Health Account",url:"https://abha.abdm.gov.in/",accent:"#7447df"},
  // Business
  {cat:"business",icon:"🏢",name:"Silpa Sathi",desc:"West Bengal Single Window / Business Services",url:"https://silpasathi.wb.gov.in/",accent:"#2178d0"},
  {cat:"business",icon:"🧾",name:"Income Tax",desc:"e-Filing Portal",url:"https://www.incometax.gov.in/",accent:"#7447df"},
  {cat:"business",icon:"🧮",name:"GST Portal",desc:"GST Services",url:"https://www.gst.gov.in/",accent:"#0e9c91"},
  {cat:"business",icon:"🏛️",name:"EPFO",desc:"PF Services",url:"https://www.epfindia.gov.in/",accent:"#4858b9"},
  {cat:"business",icon:"🏪",name:"Udyam Registration",desc:"MSME Registration",url:"https://udyamregistration.gov.in/",accent:"#2178d0"},
  {cat:"business",icon:"🍽️",name:"FSSAI / FoSCoS",desc:"Food Licence / Registration",url:"https://foscos.fssai.gov.in/",accent:"#7447df"},
  {cat:"business",icon:"📊",name:"TDS / TRACES",desc:"Tax Deducted at Source Services",url:"https://www.tdscpc.gov.in/",accent:"#0e9c91"},
  {cat:"business",icon:"🧑‍💼",name:"ESIC",desc:"Employee State Insurance Services",url:"https://www.esic.gov.in/",accent:"#4858b9"}
];

const sectionMeta = {
  citizen:{icon:"📜",bn:"সার্টিফিকেট ও নাগরিক পরিষেবা",en:"Certificates & Citizen Services",desc:"পঞ্চায়েত সার্টিফিকেট, জন্ম-মৃত্যু, e-District ও পরিচয় সংক্রান্ত পরিষেবা",sub:"Panchayat certificates, birth & death, e-District and identity-related services"},
  education:{icon:"🎓",bn:"শিক্ষা ও স্কলারশিপ",en:"Education & Scholarships",desc:"শিক্ষার্থী ও স্কলারশিপের জন্য সরকারি ও নির্বাচিত সহায়তা portal",sub:"Government and selected scholarship / financial assistance portals"},
  land:{icon:"🌾",bn:"জমি, কৃষি ও গ্রামীণ পরিষেবা",en:"Land, Agriculture & Rural Services",desc:"জমি, Job Card, কৃষক, রেশন ও পঞ্চায়েত পরিষেবা",sub:"Land, Job Card, farmer, ration and Panchayat services"},
  vehicle:{icon:"🚗",bn:"গাড়ি, লাইসেন্স ও চালান",en:"Vehicle, Driving Licence & Challan",desc:"Driving licence, vehicle services ও traffic challan",sub:"Driving licence, vehicle services and traffic challan portals"},
  jobs:{icon:"💼",bn:"সরকারি চাকরি ও Employment",en:"Government Jobs & Employment",desc:"Railway, Bank, SSC, UPSC, West Bengal এবং অন্যান্য সরকারি চাকরির portal",sub:"Official recruitment portals for Railway, Bank, SSC, UPSC, West Bengal and other government jobs"},
  health:{icon:"❤️",bn:"স্বাস্থ্য ও সামাজিক প্রকল্প",en:"Health & Social Welfare",desc:"স্বাস্থ্য কার্ড ও গুরুত্বপূর্ণ সামাজিক প্রকল্প",sub:"Health cards and important social welfare schemes"},
  business:{icon:"🏢",bn:"ব্যবসা, Tax ও Licence",en:"Business, Tax & Licence",desc:"Business registration, tax, PF এবং licence-related services",sub:"Business registration, tax, PF and licence-related services"}
};

const portalContent = document.getElementById("portalContent");
const categoryNav = document.getElementById("categoryNav");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const noResults = document.getElementById("noResults");
// const serviceCount = document.getElementById("serviceCount");
let activeCategory = "all";

// serviceCount.textContent = services.length + "+";

function renderCategories(){
  categoryNav.innerHTML = categories.map(c =>
    `<button class="category-btn ${c.id===activeCategory?"active":""}" data-cat="${c.id}">${c.name}</button>`
  ).join("");
  categoryNav.querySelectorAll(".category-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      activeCategory=btn.dataset.cat;
      renderCategories();
      renderServices();
      document.querySelector(".toolbar").scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
}

function cardHTML(s){
  return `<article class="service-card"
      style="--accent:${s.accent}; cursor:pointer;"
      onclick="window.open('${s.url}', '_blank', 'noopener,noreferrer')">

    <div class="card-icon">${s.icon}</div>

    <div class="card-body">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <span class="tag">${sectionMeta[s.cat].en}</span>
    </div>

    <a class="open-btn"
       href="${s.url}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Open ${s.name}"
       onclick="event.stopPropagation()">↗</a>

  </article>`;
}

function renderServices(){
  const q = searchInput.value.trim().toLowerCase();
  const filtered = services.filter(s=>{
    const matchesCat = activeCategory==="all" || s.cat===activeCategory;
    const hay = `${s.name} ${s.desc} ${sectionMeta[s.cat].bn} ${sectionMeta[s.cat].en}`.toLowerCase();
    return matchesCat && (!q || hay.includes(q));
  });

  if(!filtered.length){
    portalContent.innerHTML="";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  const order = activeCategory==="all" ? Object.keys(sectionMeta) : [activeCategory];
  portalContent.innerHTML = order.map(cat=>{
    const items = filtered.filter(s=>s.cat===cat);
    if(!items.length) return "";
    const m=sectionMeta[cat];
    return `<section class="portal-section" id="section-${cat}">
      <div class="section-head">
        <div class="section-icon">${m.icon}</div>
        <div>
          <h2>${m.bn}</h2>
          <p>${m.en}</p>
          <small>${m.desc}<br>${m.sub}</small>
        </div>
      </div>
      <div class="card-grid">${items.map(cardHTML).join("")}</div>
    </section>`;
  }).join("");
}

searchInput.addEventListener("input", renderServices);
clearSearch.addEventListener("click",()=>{
  searchInput.value="";
  renderServices();
  searchInput.focus();
});
document.getElementById("year").textContent=new Date().getFullYear();
renderCategories();
renderServices();

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>500));
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
