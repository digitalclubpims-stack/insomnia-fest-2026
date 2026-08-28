const categories = [
  {slug:"literary",name:"LITERARY",desc:"Quiz, Mash Up, Escape Room, Shark Tank, Bidding + Literary × Cultural.",color:"c1",count:7},
  {slug:"literary-cultural",name:"LITERARY × CULTURAL",desc:"MBBS Through Ages & Traitors.",color:"c2",count:2},
  {slug:"cultural",name:"CULTURAL",desc:"Singing, Dancing, Modelling + Literary × Cultural.",color:"c3",count:5},
  {slug:"arts",name:"ARTS",desc:"T-shirt Painting, Rangoli & Temporary Tattooing.",color:"c4",count:3},
  {slug:"photography",name:"PHOTOGRAPHY",desc:"Behind the Scenes.",color:"c5",count:1},
  {slug:"digital",name:"DIGITAL",desc:"A Short Film, Poster Design & A Day of an MBBS Student.",color:"c6",count:3},
  {slug:"fandom",name:"FANDOM",desc:"Murder Mystery, Scene It Again & E-Sports.",color:"c2",count:3},
  {slug:"social",name:"SOCIAL",desc:"Marathon, Auction, Painting for a Cause & Best Out of Waste.",color:"c1",count:4},
  {slug:"clinical",name:"CLINICAL",desc:"Suturing, BLS & Gynae + Peds.",color:"c3",count:3},
  {slug:"mr-miss-insomnia",name:"MR & MISS INSOMNIA",desc:"The flagship Insomnia stage competition.",color:"c4",count:1}
];

const eventData = {
  literary:[
    {title:"QUIZ",desc:"Think you know it all? Prove it. Fast questions, faster answers, and absolutely no time to second-guess yourself."},
    {title:"MASH UP",desc:"Two worlds collide, and your job is to make sense of the chaos. Connect, create, guess, and let your brain do the heavy lifting."},
    {title:"ESCAPE ROOM",desc:"Locked in. Clues everywhere. Clock ticking. Think fast, crack the code, and get out before the room wins."},
    {title:"SHARK TANK",desc:"Got an idea crazy enough to work? Pitch it. Bring the vision, sell the dream, and convince the sharks to bite."},
    {title:"BIDDING",desc:"The stakes are high and the paddle is in your hand. Bid smart, play bold, and remember—one bad call can change everything."}
  ],
  "literary-cultural":[
    {title:"MBBS THROUGH AGES",desc:"Medicine has changed. Students? Not that much. Travel through the eras of MBBS in a chaotic mix of stories, nostalgia, and creativity."},
    {title:"TRAITORS",desc:"Trust no one. Literally. Build your alliances, question everyone, and figure out who’s playing you before it’s too late."}
  ],
  cultural:[
    {title:"SINGING",desc:"Take the mic and own the moment. Whether you’re here to melt hearts or absolutely destroy the high notes—make it unforgettable."},
    {title:"DANCING",desc:"No rules. No holding back. Just rhythm. Bring your moves, your energy, and a stage that’s waiting to be owned."},
    {title:"MODELLING",desc:"Walk in like the spotlight was made for you. Confidence, attitude, and a runway moment that demands attention."},
    {title:"MBBS THROUGH AGES",desc:"Medicine has changed. Students? Not that much. Travel through the eras of MBBS in a chaotic mix of stories, nostalgia, and creativity."},
    {title:"TRAITORS",desc:"Trust no one. Literally. Build your alliances, question everyone, and figure out who’s playing you before it’s too late."}
  ],
  arts:[
    {title:"T-SHIRT PAINTING",desc:"Blank tee. Wild imagination. Zero limits. Turn something basic into something nobody else could pull off."},
    {title:"RANGOLI",desc:"Turn colours into a masterpiece. Patterns, precision, creativity—and a little bit of competitive chaos."},
    {title:"TEMPORARY TATTOOING",desc:"Ink without the commitment. Design it, wear it, flex it—and make your skin part of the artwork."}
  ],
  photography:[
    {title:"BEHIND THE SCENES",desc:"Because the best moments aren’t always on stage. Capture the chaos, the candid moments, and everything that happens when nobody’s posing."}
  ],
  digital:[
    {title:"A SHORT FILM",desc:"Lights. Camera. Insomnia. Take an idea, turn it into a story, and make us feel something in just a few minutes."},
    {title:"DESIGN A POSTER IN 1 HOUR",desc:"One hour. One canvas. One shot. Think fast, design faster, and create something worth stopping the scroll for."},
    {title:"A DAY OF AN MBBS STUDENT",desc:"Sleep? Optional. Attendance? Mandatory. Turn the painfully relatable chaos of MBBS life into a story everyone will recognise."}
  ],
  fandom:[
    {title:"MURDER MYSTERY",desc:"Someone did it. Everyone has a secret. Nobody is innocent. Follow the clues, interrogate the suspects, and crack the case before the killer gets away."},
    {title:"SCENE IT AGAIN",desc:"You’ve seen the scene. Now make it yours. Recreate iconic moments, add your own chaos, and bring your favourite screen moments back to life."},
    {title:"E-SPORTS",desc:"No stethoscopes. No textbooks. Just pure competition. Lock in, squad up, and prove who really owns the leaderboard."}
  ],
  social:[
    {title:"MARATHON",desc:"Run for the rush. Run for the cause. Run because you can. Every step counts when the finish line means something bigger."},
    {title:"AUCTION",desc:"Everything has a price. The question is—how much are you willing to pay? Play your cards right, outbid the competition, and walk away with the win."},
    {title:"PAINTING FOR A CAUSE",desc:"Create something beautiful. Make it mean something. Every stroke becomes a little part of something bigger than the canvas."},
    {title:"BEST OUT OF WASTE",desc:"Trash today. Treasure tomorrow. Take the ordinary, think ridiculously creatively, and turn waste into something worth showing off."}
  ],
  clinical:[
    {title:"SUTURING",desc:"Steady hands. Sharp focus. No room for sloppy work. Put your skills to the test and stitch your way to the top."},
    {title:"BLS",desc:"When seconds matter, knowing what to do matters more. Test your instincts, your technique, and your ability to stay calm when it counts."},
    {title:"GYNAE & PEDS",desc:"Two specialties. One challenge. Put your clinical thinking to work and see how well you handle the cases that keep medicine interesting."}
  ],
  "mr-miss-insomnia":[
    {title:"MR & MISS INSOMNIA",desc:""}
  ]
};

function $(q,scope=document){return scope.querySelector(q)}
function $$(q,scope=document){return [...scope.querySelectorAll(q)]}

function makeCategoryCard(c){
  return `<a class="category-card ${c.color}" style="--rot:${Math.random()>.5?'0.7':'-0.7'}deg" href="events.html?category=${encodeURIComponent(c.slug)}">
    <span class="count">${c.count} ${c.count===1?'EVENT':'EVENTS'}</span>
    <h3>${c.name}</h3>
    <p>${c.desc}</p>
    <span class="arrow">SEE EVENTS →</span>
  </a>`;
}

function renderCategories(target){
  if(!target)return;
  target.innerHTML=categories.map(makeCategoryCard).join("");
}

function setupNav(){
  const nav=$("#nav");
  if(!nav)return;
  window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>50),{passive:true});
  $$(".menu-open").forEach(b=>b.addEventListener("click",()=>$("#menuOverlay")?.classList.add("open")));
  $(".menu-close")?.addEventListener("click",()=>$("#menuOverlay")?.classList.remove("open"));
  $$("#menuOverlay a").forEach(a=>a.addEventListener("click",()=>$("#menuOverlay")?.classList.remove("open")));
}

function setupHomeAnimations(){
  if(!$("#hero"))return;
  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-poster-img",{scale:1.03,duration:1.8,ease:"power2.out"});
    gsap.to(".transition-poster",{scale:1.75,scrollTrigger:{trigger:".poster-transition",start:"top top",end:"bottom bottom",scrub:1}});
    gsap.to(".transition-glow",{scale:1.8,opacity:0,scrollTrigger:{trigger:".poster-transition",start:"top top",end:"bottom center",scrub:1}});
    gsap.to(".transition-line",{scaleX:1,scrollTrigger:{trigger:".poster-transition",start:"55% center",end:"75% center",scrub:1}});
    gsap.utils.toArray(".architecture-parallax").forEach((el,i)=>{
      gsap.to(el,{y:i?-160:160,rotate:i?30:60,scrollTrigger:{trigger:".cosmic-world",start:"top bottom",end:"bottom top",scrub:1.2}});
    });
    gsap.utils.toArray(".reveal").forEach(el=>{
      gsap.to(el,{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 86%"}});
    });
  }else{
    $$(".reveal").forEach(el=>{el.style.opacity=1;el.style.transform="none"});
  }
}

function init(){
  setupNav();
  renderCategories($("#homeCategories"));
  setupHomeAnimations();
}
document.addEventListener("DOMContentLoaded",init);


/* ---------- V3 event-card interaction ---------- */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".event-frame");
  if (!card || e.target.closest("a,button")) return;
  card.classList.toggle("is-focused");
});

/* ---------- V3 parallax depth for post-transition pages ---------- */
function setupPageParallax(){
  if(!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray("[data-parallax]").forEach((el)=>{
    const amount = Number(el.dataset.parallax || 30);
    gsap.to(el,{
      y: amount,
      ease:"none",
      scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:1.2}
    });
  });
}
document.addEventListener("DOMContentLoaded", setupPageParallax);
