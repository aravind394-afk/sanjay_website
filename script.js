const products = [
  {name:'Vertical Autoclave',model:'HSI-101',category:'Sterilization',image:'autoclave-vertical.webp',summary:'High-pressure electrically heated steam sterilizer for laboratories, hospitals and educational institutions.',specs:['Working pressure: 15 psi','22–187 L listed sizes','Stainless-steel construction'],details:['Double-walled construction with stainless-steel inner and outer chamber.','Pressure gauge, steam-release cock, safety valve and drain outlet.','Available in multiple chamber sizes; selected controls are optional.']},
  {name:'BOD Incubator',model:'HSI-104',category:'Incubation',image:'bod-incubator.webp',summary:'Low-temperature incubator for BOD determination and preservation applications.',specs:['5°C to 60°C range','112–420 L listed','Digital controller'],details:['Double-walled insulated cabinet with stainless-steel inner chamber.','Cooling system and heating arrangement support controlled operation.','Available in multiple chamber capacities with adjustable shelves.']},
  {name:'Humidity Chamber',model:'HSI-125',category:'Incubation',image:'humidity-chamber.webp',summary:'Controlled humidity and temperature chamber for environmental testing applications.',specs:['35%–100% control range','Up to 95% RH stated','Ambient +5°C to 60°C'],details:['Stainless-steel interior with insulated double-wall construction.','Humidity controller, temperature controller and water reservoir system.','Multiple chamber sizes are listed in the catalogue.']},
  {name:'Bacteriological Incubator',model:'HSI-102',category:'Incubation',image:'lab-incubator.webp',summary:'Laboratory incubator for microbiology, slide drying, tissue work and related applications.',specs:['Ambient +5°C to 80°C','45–336 L listed','Adjustable shelves'],details:['Stainless-steel inner chamber and powder-coated outer body.','Transparent glass door supports inspection without opening the chamber.','Digital controller, fan and timer are listed as optional accessories.']},
  {name:'Shaking Incubator',model:'HSI-127',category:'Incubation',image:'shaking-incubator.webp',summary:'Incubator-shaker combination for controlled temperature and platform movement.',specs:['5°C to 60°C stated','Adjustable shaking speed','Platform options'],details:['Double-walled chamber with insulated construction.','Platform movement and temperature are controlled for laboratory applications.','Platform capacity and optional accessories are detailed in the catalogue.']},
  {name:'Muffle Furnace',model:'HSI-113',category:'Heating',image:'muffle-furnace.webp',summary:'Laboratory muffle furnace for high-temperature heating applications.',specs:['Up to 1150°C stated','Digital temperature control','Multiple chamber sizes'],details:['Double-walled chamber with refractory insulation.','Temperature is controlled through a digital controller and thermocouple.','Standard and heavy-duty models are available.']},
  {name:'High Temperature Furnace',model:'HSI-115',category:'Heating',image:'high-temperature-furnace.webp',summary:'High-temperature furnace for laboratories and industrial testing requirements.',specs:['High-temperature use','Silicon carbide heating','Digital control'],details:['Insulated double-wall construction and controlled heating system.','Designed for laboratory and industrial high-temperature applications.','Multiple chamber sizes and power ratings are listed.']},
  {name:'Tubular Furnace',model:'HSI-114',category:'Heating',image:'tubular-furnace.webp',summary:'Horizontal tubular furnace for controlled heating of samples within a tube.',specs:['Up to 1150°C stated','PID controller','Horizontal configuration'],details:['Insulated furnace body with heating elements around the tube.','Digital PID control supports temperature regulation.','Optional tube dimensions can be discussed.']},
  {name:'Hot Air Oven - Lab Model',model:'HSI-116',category:'Heating',image:'hot-air-oven.webp',summary:'Hot-air oven for drying, sterilization and controlled heating in laboratories.',specs:['Ambient +5°C to 250°C','45–336 L listed','Stainless-steel chamber'],details:['Double-walled construction with insulated inner chamber.','Temperature is controlled through a capillary thermostat in the stated model.','Digital control, air circulation and timer are listed as optional.']},
  {name:'Vacuum Oven',model:'HSI-137',category:'Heating',image:'vacuum-oven.webp',summary:'Vacuum oven for controlled heating and drying under reduced pressure.',specs:['Vacuum operation','Multiple chamber sizes','Controlled heating'],details:['Designed for laboratory and industrial vacuum-drying use.','Inner chamber is shaped to support vacuum conditions.','Vacuum pump requirements and configurations should be confirmed during enquiry.']},
  {name:'Industrial Drier',model:'HSI-122',category:'Heating',image:'industrial-drier.webp',summary:'Industrial drying oven for bulk material and production laboratory applications.',specs:['Tray configuration','Controlled temperature','Industrial construction'],details:['Double-walled insulated chamber and forced-air circulation.','Tray capacities and chamber configurations are listed in the catalogue.','Suitable specifications can be discussed based on material and process.']},
  {name:'Deep Freezer - Vertical',model:'HSI-110',category:'Incubation',image:'deep-freezer-vertical.webp',summary:'Vertical deep freezer for laboratory and medical research storage applications.',specs:['Low-temperature storage','Vertical cabinet','Multiple capacities'],details:['Double-walled cabinet with stainless-steel inner chamber.','Refrigeration system supports below-ambient storage conditions.','Capacity and temperature requirement should be confirmed before quotation.']},
  {name:'Laminar Flow Cabinet - Vertical',model:'HSI-128',category:'Clean Air',image:'laminar-flow-vertical.webp',summary:'Vertical clean-air work cabinet for protected laboratory operations.',specs:['Vertical airflow','HEPA filtration stated','Work-area lighting'],details:['Designed to provide a clean working environment for laboratory applications.','Cabinet construction includes work area, filtration and blower arrangements.','Horizontal and vertical models are available.']},
  {name:'Laminar Flow Cabinet - Horizontal',model:'HSI-128',category:'Clean Air',image:'laminar-flow-horizontal.webp',summary:'Horizontal laminar-flow work station for clean-air laboratory procedures.',specs:['Horizontal airflow','Multiple work sizes','HEPA filtration stated'],details:['Horizontal airflow model for clean work applications.','Available working-area sizes are provided in the catalogue.','Additional features and configuration can be discussed.']},
  {name:'Fume Hood',model:'HSI-111',category:'Clean Air',image:'fume-hood.webp',summary:'Laboratory fume-exhaust hood intended to reduce exposure to fumes and vapours.',specs:['Exhaust configuration','Multiple work sizes','Laboratory use'],details:['Cabinet and work-area construction are described in the catalogue.','Designed for extraction of fumes generated during laboratory procedures.','Exhaust and installation requirements should be confirmed for the site.']},
  {name:'Biosafety Cabinet',model:'Catalogue model',category:'Clean Air',image:'biosafety-cabinet.webp',summary:'Biosafety cabinet model included in the supplied Hasthas product catalogue.',specs:['Protected work area','Laboratory use','Configuration on request'],details:['The supplied catalogue includes a biosafety cabinet product image.','Detailed model specifications should be confirmed with the manufacturer.','Enquire with application and required protection level.']},
  {name:'Thermostatic Water Bath',model:'HSI-139',category:'Baths',image:'water-bath-thermostatic.webp',summary:'Thermostatic water bath for controlled laboratory heating.',specs:['5°C to 98°C stated','6-hole model','Stainless-steel chamber'],details:['Double-walled water-bath construction.','Temperature control is provided for laboratory heating applications.','Digital-controller options are listed for selected models.']},
  {name:'Digital Water Bath',model:'HSI-140',category:'Baths',image:'water-bath-digital.webp',summary:'Digital-control water bath with multiple openings for sample vessels.',specs:['Digital control','12-hole model','Up to 98°C stated'],details:['Stainless-steel construction and digital temperature control.','Designed for controlled laboratory water-bath applications.','Wattage and chamber options are listed in the catalogue.']},
  {name:'Serological Water Bath',model:'HSI-141',category:'Baths',image:'serological-water-bath.webp',summary:'Serological water bath with circulation for uniform temperature applications.',specs:['Ambient +5°C to 90°C','Circulating design','Multiple chamber sizes'],details:['Stainless-steel inner chamber and insulated construction.','Water circulation supports uniform temperature distribution.','Capacity and heater load vary by listed chamber size.']},
  {name:'Constant Temperature Bath',model:'HSI-107',category:'Baths',image:'constant-temperature-bath.webp',summary:'Constant-temperature bath for laboratory work requiring stable controlled conditions.',specs:['5°C to 100°C stated','Circulating system','Multiple capacities'],details:['Double-walled construction with temperature-control components.','Available capacities are listed with corresponding chamber dimensions.','Digital control options can be discussed.']},
  {name:'Low Temperature Water Bath',model:'HSI-109',category:'Baths',image:'low-temperature-water-bath.webp',summary:'Refrigerated water bath for laboratory applications below ambient temperature.',specs:['Below-ambient control','Refrigeration system','Digital proportional control'],details:['Insulated double-wall cabinet with stainless-steel chamber.','Refrigeration and circulation systems support lower temperature operation.','Required temperature range should be specified during enquiry.']},
  {name:'Magnetic Stirrer',model:'HSI-130',category:'Essentials',image:'magnetic-stirrer.webp',summary:'Magnetic stirrer with hot-plate configuration for routine laboratory mixing.',specs:['With hot plate','Speed control','Laboratory mixing'],details:['Compact magnetic-stirring equipment for laboratory use.','The supplied catalogue lists a hot-plate type model.','Vessel size, speed and heating requirement should be discussed.']},
  {name:'Flocculator',model:'HSI-132',category:'Essentials',image:'flocculator.webp',summary:'Jar-test flocculator for water and wastewater treatment studies.',specs:['Multiple stirrers','Jar-testing use','Speed control'],details:['Designed for laboratory jar-test experiments.','Multiple paddle positions support comparative testing.','Catalogue lists two-, four- and six-stirrer options.']},
  {name:'Heating Mantle',model:'HSI-119',category:'Essentials',image:'heating-mantle.webp',summary:'Laboratory heating mantle with temperature regulation for round-bottom vessels.',specs:['50 ml–20 L listed','Regulated heating','Fibreglass insulation'],details:['Heating elements are housed within an insulated mantle.','Multiple flask capacities and power ratings are listed.','Controller configuration should be confirmed for the required capacity.']},
  {name:'Water Distillation Unit',model:'HSI-143 / HSI-144',category:'Essentials',image:'water-distillation-table.webp',summary:'Table-top and wall-mounted water-distillation units for laboratory water preparation.',specs:['Table-top / wall-mounted','Multiple capacities','Stainless-steel construction'],details:['The catalogue includes wall-mounted and table-top configurations.','Capacity and power rating vary by model.','Water inlet, drainage and electrical requirements should be reviewed for installation.']},
  {name:'Hot Plate - Rectangular',model:'HSI-124',category:'Essentials',image:'hot-plate-rectangular.webp',summary:'Rectangular laboratory hot plate available in multiple plate sizes.',specs:['Multiple sizes','Controlled heating','Laboratory bench use'],details:['Heavy-duty hot plate with insulated heating system.','Several top-plate dimensions and ratings are listed.','Required plate size and application should be shared during enquiry.']},
  {name:'C.O.D. Heating Block',model:'Catalogue model',category:'Essentials',image:'cod-heating-block.webp',summary:'Bench-top heating block shown in the Hasthas catalogue for laboratory digestion work.',specs:['Bench-top unit','Digital display','Laboratory digestion'],details:['The product image is included in the supplied catalogue.','Detailed specifications should be confirmed before quotation.','Share required tube capacity, operating temperature and application.']}
];

const state = {filter:'All', query:'', expanded:false};
const grid = document.getElementById('productGrid');
const noResults = document.getElementById('noResults');
const showMoreBtn = document.getElementById('showMoreBtn');
const productSelect = document.getElementById('productSelect');

function icon(name){return `<svg aria-hidden="true"><use href="#${name}"/></svg>`}

function filteredProducts(){
  const q=state.query.trim().toLowerCase();
  return products.filter(p => (state.filter==='All'||p.category===state.filter) && (!q || `${p.name} ${p.model} ${p.category} ${p.summary}`.toLowerCase().includes(q)));
}

function renderProducts(){
  const matches=filteredProducts();
  const visible=state.expanded||state.query||state.filter!=='All'?matches:matches.slice(0,12);
  grid.innerHTML=visible.map((p)=>{
    const index=products.indexOf(p);
    return `<article class="product-card">
      <div class="product-image"><span class="product-category">${p.category}</span><img src="assets/images/products/${p.image}" alt="Hasthas ${p.name}" loading="lazy" width="600" height="480"></div>
      <div class="product-body"><span class="product-model">${p.model}</span><h3>${p.name}</h3><p>${p.summary}</p><div class="product-specs">${p.specs.slice(0,3).map(s=>`<span>${s}</span>`).join('')}</div><div class="product-actions"><button class="product-enquire" type="button" data-enquire="${index}">Enquire for this product</button><button class="product-details" type="button" data-details="${index}" aria-label="View ${p.name} details">${icon('i-arrow')}</button></div></div>
    </article>`;
  }).join('');
  noResults.hidden=matches.length>0;
  showMoreBtn.hidden=state.query||state.filter!=='All'||matches.length<=12;
  showMoreBtn.innerHTML=state.expanded?`Show fewer products ${icon('i-chevron')}`:`Show more equipment ${icon('i-chevron')}`;
  showMoreBtn.classList.toggle('expanded',state.expanded);
}

renderProducts();

document.getElementById('filterRow').addEventListener('click',e=>{
  const btn=e.target.closest('[data-filter]'); if(!btn)return;
  state.filter=btn.dataset.filter; state.expanded=true;
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===btn));
  renderProducts();
});

document.getElementById('productSearch').addEventListener('input',e=>{state.query=e.target.value;renderProducts()});
showMoreBtn.addEventListener('click',()=>{state.expanded=!state.expanded;renderProducts()});

document.querySelectorAll('[data-filter-jump]').forEach(btn=>btn.addEventListener('click',()=>{
  state.filter=btn.dataset.filterJump; state.expanded=true;
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===state.filter));
  renderProducts();
  document.getElementById('featured-products').scrollIntoView({behavior:'smooth'});
}));

const productDialog=document.getElementById('productDialog');
const dialogContent=document.getElementById('dialogContent');

grid.addEventListener('click',e=>{
  const detail=e.target.closest('[data-details]');
  const enquire=e.target.closest('[data-enquire]');
  if(detail){
    const p=products[Number(detail.dataset.details)];
    dialogContent.innerHTML=`<div class="dialog-product"><div class="dialog-image"><img src="assets/images/products/${p.image}" alt="${p.name}"></div><div class="dialog-info"><span class="product-model">${p.model} · ${p.category}</span><h2>${p.name}</h2><p>${p.summary}</p><ul class="dialog-spec-list">${p.details.map(d=>`<li>${icon('i-check')}<span>${d}</span></li>`).join('')}</ul><button class="btn btn-primary btn-large" type="button" data-dialog-enquire="${products.indexOf(p)}">Request quotation ${icon('i-arrow')}</button></div></div>`;
    productDialog.showModal();
  }
  if(enquire) selectProductForQuote(products[Number(enquire.dataset.enquire)]);
});

dialogContent.addEventListener('click',e=>{
  const btn=e.target.closest('[data-dialog-enquire]');
  if(btn){productDialog.close();selectProductForQuote(products[Number(btn.dataset.dialogEnquire)])}
});

document.querySelectorAll('.dialog-close').forEach(btn=>btn.addEventListener('click',()=>btn.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()}));

function selectProductForQuote(product){
  const categoryMap={Sterilization:'Autoclave / Sterilization',Incubation:'Incubator / Environmental Chamber',Heating:'Oven / Furnace','Clean Air':'Laminar Flow / Fume Hood',Baths:'Water Bath / Temperature Bath',Essentials:'Other laboratory equipment'};
  productSelect.value=categoryMap[product.category]||'Other laboratory equipment';
  const message=document.querySelector('[name="message"]');
  message.value=`I am interested in ${product.name}${product.model&&product.model!=='Catalogue model'?` (${product.model})`:''}. Please share price, availability and suitable specifications.`;
  document.getElementById('quote').scrollIntoView({behavior:'smooth'});
  setTimeout(()=>document.querySelector('[name="name"]').focus({preventScroll:true}),650);
}

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')==='true';
  menuToggle.setAttribute('aria-expanded',String(!open)); nav.classList.toggle('open',!open); document.body.classList.toggle('menu-open',!open);
});
nav.addEventListener('click',e=>{if(e.target.matches('a')){nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const form=new FormData(e.currentTarget);
  const lines=[
    'Hello Hasthas Scientific Instruments,',
    '',
    'I would like to request a quotation.',
    `Name: ${form.get('name')}`,
    `Phone: ${form.get('phone')}`,
    `Institution / Company: ${form.get('organization')||'Not provided'}`,
    `City: ${form.get('city')||'Not provided'}`,
    `Equipment: ${form.get('product')}`,
    `Requirement: ${form.get('message')||'Please contact me with details.'}`
  ];
  const url=`https://wa.me/919361232452?text=${encodeURIComponent(lines.join('\n'))}`;
  const toast=document.getElementById('toast'); toast.classList.add('show');
  setTimeout(()=>{window.open(url,'_blank','noopener');toast.classList.remove('show')},350);
});

document.getElementById('viewCertificate').addEventListener('click',()=>document.getElementById('certificateDialog').showModal());
document.querySelector('.document-thumb').addEventListener('click',()=>document.getElementById('certificateDialog').showModal());
document.querySelector('.document-thumb').style.cursor='pointer';
document.getElementById('currentYear').textContent=new Date().getFullYear();
