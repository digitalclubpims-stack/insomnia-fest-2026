const SHARED_LC=[
 {title:'MBBS THROUGH AGES',desc:'Medicine has changed. Students? Not that much. Travel through the eras of MBBS in a chaotic mix of stories, nostalgia, and creativity.'},
 {title:'TRAITORS',desc:'Trust no one. Literally. Build your alliances, question everyone, and figure out who’s playing you before it’s too late.'}
];
const categories=[
 {slug:'literary',name:'LITERARY',desc:'Quiz, Mash Up, Escape Room, Shark Tank, Bidding + shared events.',color:'yellow',icon:'book'},
 {slug:'cultural',name:'CULTURAL',desc:'Singing, Dancing, Modelling + shared events.',color:'pink',icon:'mask'},
 {slug:'arts',name:'ARTS',desc:'T-shirt Painting, Rangoli & Temporary Tattooing.',color:'purple',icon:'palette'},
 {slug:'photography',name:'PHOTOGRAPHY',desc:'Behind the Scenes.',color:'cream',icon:'camera'},
 {slug:'digital',name:'DIGITAL',desc:'A Short Film, Poster Design & A Day of an MBBS Student.',color:'orange',icon:'monitor'},
 {slug:'fandom',name:'FANDOM',desc:'Murder Mystery & Scene It Again.',color:'cyan',icon:'film'},
 {slug:'e-sports',name:'E-SPORTS',desc:'Competitive gaming. Squad up and own the leaderboard.',color:'orange',icon:'game'},
 {slug:'social',name:'SOCIAL',desc:'Marathon, Auction, Painting for a Cause & Best Out of Waste.',color:'yellow',icon:'heart'},
 {slug:'clinical',name:'CLINICAL',desc:'Suturing, BLS & Gynae + Peds.',color:'pink',icon:'medical'},
 {slug:'mr-miss-insomnia',name:'MR & MISS INSOMNIA',desc:'The flagship Insomnia stage competition.',color:'purple',icon:'crown'}
];
const eventData={
 literary:[['QUIZ','Think you know it all? Prove it. Fast questions, faster answers, and absolutely no time to second-guess yourself.'],['MASH UP','Two worlds collide, and your job is to make sense of the chaos. Connect, create, guess, and let your brain do the heavy lifting.'],['ESCAPE ROOM','Locked in. Clues everywhere. Clock ticking. Think fast, crack the code, and get out before the room wins.'],['SHARK TANK','Got an idea crazy enough to work? Pitch it. Bring the vision, sell the dream, and convince the sharks to bite.'],['BIDDING','The stakes are high and the paddle is in your hand. Bid smart, play bold, and remember—one bad call can change everything.'],...SHARED_LC.map(x=>[x.title,x.desc])],
 cultural:[['SINGING','Take the mic and own the moment. Whether you’re here to melt hearts or absolutely destroy the high notes—make it unforgettable.'],['DANCING','No rules. No holding back. Just rhythm. Bring your moves, your energy, and a stage that’s waiting to be owned.'],['MODELLING','Walk in like the spotlight was made for you. Confidence, attitude, and a runway moment that demands attention.'],...SHARED_LC.map(x=>[x.title,x.desc])],
 arts:[['T-SHIRT PAINTING','Blank tee. Wild imagination. Zero limits. Turn something basic into something nobody else could pull off.'],['RANGOLI','Turn colours into a masterpiece. Patterns, precision, creativity—and a little bit of competitive chaos.'],['TEMPORARY TATTOOING','Ink without the commitment. Design it, wear it, flex it—and make your skin part of the artwork.']],
 photography:[['BEHIND THE SCENES','Because the best moments aren’t always on stage. Capture the chaos, the candid moments, and everything that happens when nobody’s posing.']],
 digital:[['A SHORT FILM','Lights. Camera. Insomnia. Take an idea, turn it into a story, and make us feel something in just a few minutes.'],['DESIGN A POSTER IN 1 HOUR','One hour. One canvas. One shot. Think fast, design faster, and create something worth stopping the scroll for.'],['A DAY OF AN MBBS STUDENT','Sleep? Optional. Attendance? Mandatory. Turn the painfully relatable chaos of MBBS life into a story everyone will recognise.']],
 fandom:[['MURDER MYSTERY','Someone did it. Everyone has a secret. Nobody is innocent. Follow the clues, interrogate the suspects, and crack the case before the killer gets away.'],['SCENE IT AGAIN','You’ve seen the scene. Now make it yours. Recreate iconic moments, add your own chaos, and bring your favourite screen moments back to life.']],
 'e-sports':[['E-SPORTS','No stethoscopes. No textbooks. Just pure competition. Lock in, squad up, and prove who really owns the leaderboard.']],
 social:[['MARATHON','Run for the rush. Run for the cause. Run because you can. Every step counts when the finish line means something bigger.'],['AUCTION','Everything has a price. The question is—how much are you willing to pay? Play your cards right, outbid the competition, and walk away with the win.'],['PAINTING FOR A CAUSE','Create something beautiful. Make it mean something. Every stroke becomes a little part of something bigger than the canvas.'],['BEST OUT OF WASTE','Trash today. Treasure tomorrow. Take the ordinary, think ridiculously creatively, and turn waste into something worth showing off.']],
 clinical:[['SUTURING','Steady hands. Sharp focus. No room for sloppy work. Put your skills to the test and stitch your way to the top.'],['BLS','When seconds matter, knowing what to do matters more. Test your instincts, your technique, and your ability to stay calm when it counts.'],['GYNAE & PEDS','Two specialties. One challenge. Put your clinical thinking to work and see how well you handle the cases that keep medicine interesting.']],
 'mr-miss-insomnia':[['MR & MISS INSOMNIA','']]
};
const iconPaths={book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15A2.5 2.5 0 0 1 6.5 18H20"/>',mask:'<path d="M4 6h16v7c0 4-3.6 7-8 7s-8-3-8-7z"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>',palette:'<circle cx="12" cy="12" r="9"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="9" r="1"/>',camera:'<path d="M4 7h4l2-2h4l2 2h4v12H4z"/><circle cx="12" cy="13" r="4"/>',monitor:'<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/>',film:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14M16 5v14M4 9h4M16 9h4M4 15h4M16 15h4"/>',game:'<path d="M7 9h10a4 4 0 0 1 3.5 6l-1 2a2 2 0 0 1-3.4.4L14.5 16h-5l-1.6 1.4A2 2 0 0 1 4.5 17l-1-2A4 4 0 0 1 7 9z"/><path d="M8 12v4M6 14h4M16 13h.01M18 15h.01"/>',heart:'<path d="M20 12c0 5-8 9-8 9s-8-4-8-9a4.5 4.5 0 0 1 8-2.6A4.5 4.5 0 0 1 20 12z"/>',medical:'<path d="M12 4v5M9.5 6.5h5"/><path d="M7 9h10v8a5 5 0 0 1-10 0z"/>',crown:'<path d="m4 7 3 4 5-6 5 6 3-4-1 12H5z"/>'};
function $(q,s=document){return s.querySelector(q)} function $$(q,s=document){return [...s.querySelectorAll(q)]}
function categoryIcon(key){return `<span class="category-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[key]||iconPaths.book}</svg></span>`}
function makeCategoryCard(c,i){return `<a class="category-card ${c.color} tilt-${i%2?'l':'r'} reveal" href="events.html?category=${encodeURIComponent(c.slug)}"><div class="card-top">${categoryIcon(c.icon)}<span class="count">${eventData[c.slug]?.length||0} ${eventData[c.slug]?.length===1?'EVENT':'EVENTS'}</span></div><h3>${c.name}</h3><p>${c.desc}</p><span class="card-arrow">SEE EVENTS <b>↗</b></span><span class="card-glow"></span></a>`}
function renderCategories(){const el=$('#homeCategories');if(el)el.innerHTML=categories.map((c,i)=>makeCategoryCard(c,i)).join('')}
function setupNav(){const nav=$('#nav');if(nav){const f=()=>nav.classList.toggle('scrolled',scrollY>50);f();addEventListener('scroll',f,{passive:true})}$$("[data-menu-open]").forEach(b=>b.onclick=()=>{$('#menuOverlay')?.classList.add('open');$('#menuOverlay')?.setAttribute('aria-hidden','false')});$("[data-menu-close]")?.addEventListener('click',closeMenu);$('#menuOverlay')?.addEventListener('click',e=>{if(e.target.id==='menuOverlay')closeMenu()});$$('#menuOverlay a').forEach(a=>a.addEventListener('click',closeMenu))}
function closeMenu(){$('#menuOverlay')?.classList.remove('open');$('#menuOverlay')?.setAttribute('aria-hidden','true')}
function setupPass(){const link=$('[data-pass-link]');if(link)link.addEventListener('click',e=>{if(link.getAttribute('href')==='#'){e.preventDefault();alert('Add your final Google Form URL in app.js → PASS_FORM_URL.')}})}
function renderEventsPage(){const tabs=$('#tabs');if(!tabs)return;const selected=new URLSearchParams(location.search).get('category')||'all';const allCats=[{slug:'all',name:'ALL',icon:'crown'},...categories];tabs.innerHTML=allCats.map(c=>`<a class="category-tab ${selected===c.slug?'active':''}" href="${c.slug==='all'?'events.html':'events.html?category='+encodeURIComponent(c.slug)}">${c.name}</a>`).join('');let list=[];if(selected==='all'){const seen=new Set();Object.values(eventData).flat().forEach(([title,desc])=>{if(!seen.has(title)){seen.add(title);list.push({title,desc})}})}else list=(eventData[selected]||[]).map(([title,desc])=>({title,desc}));const cat=allCats.find(c=>c.slug===selected)||allCats[0];$('#categoryTitle').textContent=cat.name;$('#eventCount').textContent=`${list.length} ${list.length===1?'EVENT':'EVENTS'}`;$('#categoryIcon').innerHTML=categoryIcon(cat.icon);const grid=$('#eventGrid');grid.innerHTML=list.map((e,i)=>`<article class="event-card ${i%2?'tilt-left':'tilt-right'} reveal"><div class="poster-box"><div class="poster-word">POSTER<small>3 : 4</small></div></div><div class="event-info"><div class="event-label">EVENT ${String(i+1).padStart(2,'0')}</div><h3>${e.title}</h3><p>${e.desc||''}</p><div class="event-meta"><span></span><span></span><span></span></div><button class="register-btn" disabled>REGISTER</button></div></article>`).join('');setupAnimations();}
function setupParallax(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const layers=$$('.layer');if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);layers.forEach(l=>{const s=parseFloat(l.dataset.speed||0);gsap.to(l,{y:()=>innerHeight*s*2, ease:'none',scrollTrigger:{trigger:l.closest('.scene'),start:'top bottom',end:'bottom top',scrub:1.2}})})}else{addEventListener('scroll',()=>{const y=scrollY;layers.forEach(l=>{const s=parseFloat(l.dataset.speed||0);l.style.transform=`translate3d(0,${y*s}px,0)`})},{passive:true})}}
function setupAnimations(){const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce){$$('.reveal').forEach(e=>e.classList.add('visible'));return}if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);$$('.reveal').forEach((el,i)=>{gsap.fromTo(el,{y:55,opacity:0,rotateX:5},{y:0,opacity:1,rotateX:0,duration:.9,ease:'power3.out',delay:Math.min(i*.035,.18),scrollTrigger:{trigger:el,start:'top 88%',once:true}})});$$('.category-card').forEach((c,i)=>{gsap.fromTo(c,{y:100,rotate:i%2?4:-4,scale:.94,opacity:0},{y:0,rotate:i%2?-1.15:1.15,scale:1,opacity:1,duration:1.05,ease:'power4.out',scrollTrigger:{trigger:c,start:'top 92%',once:true}})});$$('.event-card').forEach((c,i)=>{gsap.fromTo(c,{y:110,rotate:i%2?7:-7,scale:.9,opacity:0},{y:0,rotate:i%2?-1.15:1.15,scale:1,opacity:1,duration:1.05,ease:'power4.out',scrollTrigger:{trigger:c,start:'top 91%',once:true}});gsap.to(c,{y:i%2?-8:8,scrollTrigger:{trigger:c,start:'top bottom',end:'bottom top',scrub:1.5}})});$$('.display').forEach(h=>gsap.fromTo(h,{scale:.75,y:80,opacity:0},{scale:1,y:0,opacity:1,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 88%',end:'top 45%',scrub:1}}));$$('.section-head').forEach(h=>gsap.fromTo(h,{x:-80,opacity:0},{x:0,opacity:1,duration:1,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 85%',once:true}}));$$('.night-card').forEach((c,i)=>gsap.fromTo(c,{y:70,rotate:i%2?4:-4,opacity:0},{y:0,rotate:i%2?-1:1,opacity:1,duration:.9,delay:i*.08,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 90%',once:true}}));}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(e=>io.observe(e))}}

function setupCinematicMotion(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  if(!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);

  $$('.category-card').forEach((card,i)=>{
    gsap.to(card,{
      y:i%2?10:-10,
      rotate:i%2?-1.15:1.15,
      ease:'none',
      scrollTrigger:{trigger:card,start:'top bottom',end:'bottom top',scrub:1.1}
    });
  });

  $$('.spotlight-feature').forEach(el=>{
    gsap.fromTo(el,{y:55,scale:.97},{y:-18,scale:1,ease:'none',
      scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1.25}});
  });

  $$('.closing-inner').forEach(el=>{
    gsap.fromTo(el,{y:35,opacity:.65},{y:-25,opacity:1,ease:'none',
      scrollTrigger:{trigger:el.closest('.closing'),start:'top bottom',end:'bottom top',scrub:1.1}});
  });
}

function init(){setupNav();renderCategories();setupPass();setupAnimations();setupParallax();setupCinematicMotion();if($('#eventGrid'))renderEventsPage()}
document.addEventListener('DOMContentLoaded',init);
