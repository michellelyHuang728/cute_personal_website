const data={
  diamond:{icon:'◇',title:'Diamond · The Dreamer',color:'#f6be20',char:'👩‍💻✨',menu:['About Me','Resume','Projects','Experience','Skills','Education','GitHub'],cards:[['About Me','Aspiring SWE & ML engineer passionate about building scalable systems and solving real-world problems.'],['Featured Projects','ML Traffic Predictor · Distributed File System · Campus Events Platform'],['Skills Tree','Python ★★★★★<br>C++ ★★★★☆<br>Machine Learning ★★★★☆<br>AWS ★★★☆☆']]},
  heart:{icon:'♥',title:'Heart · The Competitor',color:'#f35b8c',char:'🏸🎮',menu:['Overview','Gym Journey','Esports','Achievements','Goals','Gallery'],cards:[['Gym Progress','Bench Press 40kg → 65kg <div class="bar"><span style="width:80%"></span></div>'],['Esports','Valorant · Rhythm Games · Challenge mode ON'],['Recent Achievements','Inter-university badminton champion · Top rhythm game score 98.25%']]},
  spade:{icon:'♠',title:'Spade · The Artist',color:'#3d88d9',char:'🎸🎵',menu:['Music','Piano','Violin','TIO','Artworks','Cosplay','Playlist'],cards:[['About My Music','Music is how I express what words cannot say. Originals, covers, and tiny feelings.'],['Now Playing','Rainy Memory — Original Composition'],['My Works','Music notes · cosplay concepts · photo gallery']]},
  clover:{icon:'♣',title:'Clover · The Nurturer',color:'#57aa52',char:'🍱🍵',menu:['Recipes','Meal Prep','Healthy Life','Matcha Corner','Life Notes','Bento Diary'],cards:[['Today\'s Bento','Grilled salmon · brown rice · egg roll · broccoli · cherry tomatoes'],['Healthy Habits','8k steps/day <div class="bar"><span style="width:70%"></span></div>Drink 2L water <div class="bar"><span style="width:55%"></span></div>'],['Latest Recipe','Creamy avocado pasta + matcha reset.']]}
};
function render(type){
  const d=data[type];
  document.documentElement.style.setProperty('--active',d.color);
  document.querySelectorAll('.egg-card').forEach(b=>b.classList.toggle('active',b.dataset.type===type));
  panelIcon.textContent=d.icon; panelTitle.textContent=d.title; character.textContent=d.char;
  sideMenu.innerHTML=d.menu.map(x=>`<div>${x}</div>`).join('');
  info.innerHTML=d.cards.map(([h,b])=>`<article class="card"><h3>${h}</h3><p>${b}</p></article>`).join('');
}
document.querySelectorAll('.egg-card').forEach(btn=>btn.addEventListener('click',()=>render(btn.dataset.type)));
render('diamond');
