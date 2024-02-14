let UserHp = 1000;
let AiHp = 1000;
let min = 1000;
let max = 1000;
 let skillPoints= 10;
 let healpoints = 5;
 let skillPoints2 = 10;
 let healpoints2 = 5;
 let bankaiSkill = 0;
 

 
 var element = document.querySelector(".character");
 var element2 = document.querySelector(".character2");
 
randomName = ["Lily", "Daniel", "Loomy", "Peet", "Stell", "Leyna","cloud","Nina","Altair","David","shallom","Gift","Dray","Lan"];
   chosenName = Math.floor(Math.random() * randomName.length);
   
 let  randomMusic = ["forest.mp3","witch.mp3"];
  let chosenMusic = Math.floor(Math.random()* randomMusic.length);
   
let audio = document.getElementById("audio1");


    
let loader;

function showLoader() {
  loader = Swal.fire({
    title: 'Loading...',
    allowOutsideClick: false,
    showConfirmButton: false,
    showCancelButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}

function startGame(){
      Swal.fire({
        icon:'success',
        title:'completed',
        showConfirmButton:true,
        confirmButtonColor:'green',
        allowOutsideClick:false,
        didOpen: () => {
          Swal.close();
        }
      });
    }
    

function hideLoader() {
  if (loader) {
    loader.close();
  }
}

async function preloadAssets(assetList) {
  showLoader();

  try {
    for (let index = 0; index < assetList.length; index++) {
      const asset = assetList[index];
      await new Promise((resolve, reject) => {
        const element = asset.type === 'image' ? new Image() : new Audio();

        element.onload = () => {
          console.log(`Asset loaded: ${index + 1}/${assetList.length}`);
          resolve();
        };

        element.onerror = () => {
          console.error(`Failed to load asset: ${asset.src}`);
          reject(new Error(`Failed to load asset: ${asset.src}`));
        };

        element.src = asset.src;
      });
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    hideLoader();
  }
}


window.onload = function() {
    
    audio.controls = false;
    audio.pause();
    
(async () => {
  
      const assetsToPreload = [
        { type: 'audio', src: 'drift.mp3' },
        { type: 'audio', src: 'witch.mp3' },
        { type: 'audio', src: 'fast.mp3' },
        { type: 'audio', src: 'forest.mp3' },
        { type: 'audio', src: 'sazanthos.mp3' },
        { type: 'audio', src: 'A.mp3' },
        { type: 'audio', src: 'B.mp3' },
        { type: 'audio', src: 'Bankai.mp3' },
        { type: 'audio', src: 'battle10.wav' },
        { type: 'audio', src: 'battle12.wav' },
        { type: 'audio', src: 'battle23.wav' },
        { type: 'audio', src: 'battle3.wav' },
        { type: 'audio', src: 'battle34.wav' },
        { type: 'audio', src: 'battle9.wav' },
        { type: 'audio', src: 'cut.wav' },
        { type: 'audio', src: 'cut3.mp3' },
        { type: 'audio', src: 'cut5.mp3' },
        { type: 'audio', src: 'cut6.mp3' },
        { type: 'audio', src: 'E.mp3' },
        { type: 'audio', src: 'F.mp3' },
        { type: 'audio', src: 'kk.mp3' },
        { type: 'audio', src: 'lack.mp3' },
        { type: 'audio', src: 'll.mp3' },
        { type: 'audio', src: 'mm.mp3' },
        { type: 'audio', src: 'nn.mp3' },
        { type: 'audio', src: 'oo.mp3' },
        { type: 'audio', src: 'over.mp3' },
        { type: 'audio', src: 'potion.mp3' },
        { type: 'audio', src: 'sample2.wav' },
        { type: 'audio', src: 'sample5.wav' },
        { type: 'audio', src: 'shao.mp3' },
        { type: 'audio', src: 'Useless.m4a' },
        { type: 'audio', src: 'Weak.m4a' },
        { type: 'image', src: 'zack.png' },
      
        { type: 'image', src: 'axe.png' },
        { type: 'image', src: 'best.png' },
        { type: 'image', src: 'blood2.jpg' },
        { type: 'image', src: 'burst.png' },
        { type: 'image', src: 'burst2.png' },
        { type: 'image', src: 'burst5.png' },
        { type: 'image', src: 'buster.png' },
        { type: 'image', src: 'chaos.png' },
        { type: 'image', src: 'cloud2.png' },
        { type: 'image', src: 'dark.png' },
        { type: 'image', src: 'fan.jpg' },
        { type: 'image', src: 'fire.png' },
        { type: 'image', src: 'got.jpg' },
        { type: 'image', src: 'ley.png' },
        { type: 'image', src: 'noctis.png' },
        { type: 'image', src: 'noctis3.png' },
        { type: 'image', src: 'plan.jpg' },
        { type: 'image', src: 'seph.png' },
        { type: 'image', src: 'seph4.png' },
        { type: 'image', src: 'sephE.png' },
        { type: 'image', src: 'sword1.png' },
        { type: 'image', src: 'sword2.png' },
        { type: 'image', src: 'sword3.png' },
        { type: 'image', src: 'sword4.png' },
        { type: 'image', src: 'sword5.png' },
        { type: 'image', src: 'sword6.png' },
        { type: 'image', src: 'sword7.png' },
        { type: 'image', src: 'Terra.png' },
        { type: 'image', src: 'Terra2.png' },
        { type: 'image', src: 'V.png' },
        { type: 'image', src: 'V1.png' },
        { type: 'image', src: 'V2.png' },
        { type: 'image', src: 'V3.png' },
        { type: 'image', src: 'wall.jpeg' },
        { type: 'image', src: 'wall2.jpeg' },
        { type: 'image', src: 'wall3.jpg' },
        { type: 'image', src: 'wall4.jpg' },
        { type: 'image', src: 'wall5.jpg' },
        ];
  
      try {
        await preloadAssets(assetsToPreload);
        startGame();
      } catch (error) {
        console.error(error.message);
      }
    
})();
    //});
    
}
  
    
//};
   function HealEffect(){
   let healEffect =  new Audio("potion.mp3");
   healEffect.play();
   return healEffect;
   }
  let soundEffect =  ["cut3.mp3","cut5.mp3","cut6.mp3"];
  function effect() {
    let chosenEffect = Math.floor(Math.random() * soundEffect.length);
    let playEffect = new Audio(soundEffect[chosenEffect]);
    playEffect.play();
    
  }
  
let choice3 = document.getElementById("audio1");
    choice3.src = randomMusic[chosenMusic];
   
function run() {
  
      let run3 = document.getElementsByClassName("work")[0];
      let run4 = document.getElementsByClassName("work2")[0];
      music();
      run3.style.display = 'block';
      run4.style.display = 'inline-block';
    
    }
   

let audio3 = new Audio("fast.mp3");
 let audio4 = new Audio("drift.mp3");    
    //window.onload = function() {
    //  begin();
    //  music();
   //   updateHealthDisplay();
      
   // }
   
    let aiPick = ["Terra2.png", "zack.png", "sephE.png", "V.png", "V1.png", "V2.png", "V3.png"];
    let aiSword = ["sword5.png", "sword1.png", "burst.png", "burst2.png"];
    let aiPickChoice = Math.floor(Math.random() * aiPick.length);
    let aiSwordChoice = Math.floor(Math.random() * aiSword.length);
    let link = document.getElementById("zack");
    
    let link2 = document.getElementById("sword2");
      
function Work() {
       let a = document.getElementById("intro");
        let b = document.getElementById("container");
        let c = document.getElementById("text");
        let x = document.getElementById("skill");
        let y = document.getElementById("skill1");
        let xy = document.getElementById("heal1");
        let xz = document.getElementById("heal2");
        let userBar = document.getElementById("health");
        let userBar2 = document.getElementById("healthContainer");
        let aiBar = document.getElementById("health2");
        let aiBar2 = document.getElementById("health2Container");
        let turnn = document.getElementById("turn");
        let turn2 = document.getElementById("turn2");
        turn2.value= bankaiSkill;
        turn2.style.display = "inline";
        turnn.style.display = "inline";
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "block";
        x.style.display = "inline-block";
        y.style.display = "inline-block";
        xy.style.display = "inline-block";
        xz.style.display = "inline-block";
        userBar.style.display = "block";
        userBar2.style.display = "block";
        aiBar.style.display = "block";
        aiBar2.style.display = "block";
        y.value = skillPoints;
        xz.value = healpoints;
        let charr = document.getElementsByClassName("character");
        let charr2 = document.getElementsByClassName("character2");
        for(var i = 0; i < charr2.length; i++){
          var people2 = charr2[i];
          people2.style.display = 'block';
        }
        for(var i = 0; i < charr.length; i++){
          var people = charr[i];
          people.style.display = 'block';
        }
        
        
        link.src = aiPick[aiPickChoice];
        
        link2.src = aiSword[aiSwordChoice];
        
        if(!audio.paused){
          audio.pause();
          audio4.play();
          audio4.loop = true;
        }
        begin();
        conf();

    }
//close
    function Work2() {
        Swal.fire({
          title:'Abort',
          text :'Are you sure you want to quit?',
          icon :'Goodbye',
          showCancelButton:true,
          allowOutsideClick:false,
          confirmButtonColor:'red',
          confirmButtonText:'yes',
          cancelButtonColor:'green',
        }).then((result) => {
          if(result.isConfirmed){
            window.close();
          }
        });
    }
        
    
      let fr4 = 1
     let fr5 = 2;
      let frr = Math.floor(Math.random() * (fr5 - fr4 + 1) + 1);
//loader
    function showloader() {
      
        Swal.fire({
        title: 'Searching for Players',
        html: 'Please wait',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 4000,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            title: `Players Found:${randomName[chosenName]}`,
            text: 'You are ready to start the game.',
            icon: 'success',
            confirmButtonText: 'Start Game',
            allowOutsideClick:false
          }).then((result) => {
            if(result.isConfirmed){
              
              const characters = [
                { name: 'Cloud', path: 'best.png' },
                { name: 'Sephiroth', path: 'dark.png' },
                { name: 'stark', path :'seph.png' },
                { name: 'Layla', path: 'terra.png' },
                  {name:'Noctis',path:'noctis3.png'},{name:'CloudX',path:'cloud2.png'},{name:'Aqua',path:'ley.png'},{name:'NoctisX',path:'noctis.png'},{
                    name:'NJ',path:'seph4.png'
                  }];
                  
                  const sword = [{
                    name:'Ultima',path:'sword7.png'
                  },{name:'buster',path:'buster.png'},
                  {name:'Soul cutter',path:'burst5.png'},{name:'Gilian',path:'sword6.png'},{name:'death bringer',path:'sword2.png'},{name:"Ragnarok",path:'sword3.png'},{
                    name:"Automata",path:"fire.png"
                  }];
              Swal.fire({
                icon:'info',
                input:'select',
                inputOptions:characters.map(character => character.name),
                title:'Select your character',
               showConfirmButton:true,
               allowOutsideClick:false,
               allowEscapeKey:false
               
               
              }).then((result) => {
                if(result.isConfirmed){
                  
                  const selectedIndex = result.value;
                  
                const lot = new SpeechSynthesisUtterance(characters[selectedIndex].name);
                  speechSynthesis.speak(lot);
                  
                  
                  const lap = document.getElementById("best");
                  
                  if (selectedIndex >= 0 && selectedIndex < characters.length) {
                    // Set the src attribute using the selected index
                    lap.src = characters[selectedIndex].path;
                  }
                  
                  Swal.fire({
                    icon:'info',
                    input:'select',
                    title:'Select weapon',
                    inputOptions:sword.map(character => character.name),
                    showConfirmButton:true,
                    allowEscapeKey:false,
                    allowOutsideClick:false
                  }).then((result) => {
                    if(result.isConfirmed){
                      
                     const chose = result.value; 
                      
                    const lot2 = new SpeechSynthesisUtterance(sword[chose].name);
                      speechSynthesis.speak(lot2);
                      
                      
                      const lap2 = document.getElementById("sword");
                      
                      if (chose>= 0 && chose < sword.length) {
                        // Set the src attribute using the selected index
                        lap2.src = sword[chose].path;
                      }
                      
                      background = [
                        {name:'dispair',path:'fan.jpg'},{name:'Purge',path:'blood2.jpg'},
                        {name:'Tale of vigor',path:'got.jpg'},{name:'Transfiguration',path:'wall.jpeg'},{name:'Tenebre',path:'wall2.jpeg'},{name:'Resolve',path:'wall3.jpg'},{name:'Mondstat',path:'wall4.jpg'},{name:'Sumeru',path:'wall5.jpg'}];
                      Swal.fire({
                        icon:'info',
                        input:'select',
                        title:'Select Background',
                        inputOptions:background.map(character => character.name),
                        allowOutsideClick:false,
                        allowEscapeKey:false
                      }).then((result) => {
                        if(result.isConfirmed){
                          let pic = document.getElementById("text");
                          let mine = result.value;
                          pic.style.backgroundImage = `url(${background[mine].path})`;
                        
                      //});
                      const lot4 = new SpeechSynthesisUtterance(background[mine].name);
                      speechSynthesis.speak(lot4);
                        }
                      
                    Swal.fire({
                        icon: 'info',
                        title: 'loading...please wait!',
                        showConfirmButton: false,
                        allowEscapeKey:false,
                   allowOutsideClick:false,
                        willOpen: () => {
                          Swal.showLoading();
                        },
                        timer: 3000
                      }).then(() => {
                        Work();
                      });
                      });
                      
                      }
                    });
                  }
                  
              });
            
            
            }else{
              
            }
          });
        }
      });
        setTimeout(function() {
          hideLoader();
        }, 4000);
        document.getElementById("loader").style.display = "flex";
        }
    

    function hideLoader() {
        document.getElementById("loader").style.display = "none";

    }
    
      
      
      //Music
      let soundArray = ["Weak.m4a", "shao.mp3", "Useless.m4a", "A.mp3", "B.mp3", "E.mp3", "F.mp3", "ll.mp3"];
      
      
      function sound() {
      
        randomSound = Math.floor(Math.random() * soundArray.length)
        var audio = new Audio(soundArray[randomSound]);
        audio.play();
        return audio;
      }
      //music
      function music() {
        var audio = document.getElementById("audio1");
        audio.play();
        audio.volume = 0.25;
        audio.controls = false;
        return audio;
      }

  


let land = sound();
function normal() {
  
  effect();
  fr = 1;
  fs = 2;
  frs = Math.floor(Math.random() * (fs - fr + 1) + 1);
  if(frs === 2){
    sound();
  }else{
    
  } 
  
  
  if(currentWave == 3){
    if(frr == 1){
    if(!land.paused){
    land.pause();
    }
  } 
  }
  
      let sword = document.getElementById('sword');
      let enemy = document.getElementById('enemy');
      let player = document.getElementById("player");
      let screen = document.getElementById("text");
      
    
     let a = 1;
     let b = 100;
     let damage = Math.floor(Math.random()*(b - a + 1) + 1);
     AiHp -= damage;
     screen.value = ` \nYou damaged ${randomName[chosenName]}:${damage}`
     //updateHealthDisplay();
     
    
    let clicker = document.getElementById("btn");
    
    clicker.addEventListener('click',function() {
      clicker.style.backgroundColor = 'black';
      setTimeout(function () {
        clicker.style.backgroundColor = 'darkred';
      },200);
    });
    
    
      // Move the sword to the enemy position
      sword.style.display = 'inline';
      sword.style.left = `${enemy.offsetLeft + enemy.clientWidth / 20}px`;
    
    player.style.animation = 'vibrationAnimation 0.25s ease-out';
        //player.style.animation = 'attackAnimation 0.58s ease';
    
      // Sword animation
      sword.style.animation = 'swordAnimation 0.5s ease-out';
      setTimeout(() => {
        player.style.animation = 'none';
        sword.style.animation = 'none';
      },400);
    
      // Vibration animation for the enemy
      enemy.style.animation = 'vibrationAnimation 0.5s ease-out';
     
        
    
      // Reset animations and move sword back after a short delay
      setTimeout(() => {
        sword.style.display = 'none';
        sword.style.animation = 'none';
        enemy.style.animation = 'none';
        sword.style.left = '50%'; // Move sword back to the center
      }, 500);
      
      setTimeout(function() {
        
      updateHealthDisplay();
      setTimeout(() => {
       aiSpeak();
      },2000);
     
      AiChoice();
        
      },3000);
      
    }
    
    
 let turn3 = document.getElementById("turn2");
    
    function special() {
   let clicker = document.getElementById("first");
      clicker.style.display = 'inline';
      clicker.focus();
     let clicker2 = document.getElementById("btn2");
    clicker2.addEventListener('click',function() {
      clicker2.style.backgroundColor = 'black';
      setTimeout(function () {
        clicker2.style.backgroundColor = 'darkred';
      },200);
    });
    
      }  
      
    
      
    let damage3 = [121,222,140,180,211,122,144,166];
    let damage2 = [222,111,150,121,134,156,166,200];
      
    
      
      
    function handleSelect(){
      bankaiSkill += 1;
      turn3.value = bankaiSkill;
      
      effect();
      fr1 = 1;
      fs1 = 2;
      frs1 = Math.floor(Math.random() * (fs1 - fr1 + 1) + 1);
      if (frs1 === 2) {
        sound();
      } else {
       
      }
        if(currentWave == 3){
          
          if(frr == 1){
          if(!land.paused){
          land.pause();
          }
        }
        }
      
      skillPoints -= 1;
      if(skillPoints < 0){
        Swal.fire({
          icon:'info',
          text:'You are out of skill points',
          confirmButton:true,
          confirmButtonColor:'red'
        });
      }else{
      
     //damage2 = [222,111,150,121,134,156,166,200]
     let randomDamage2 = Math.floor(Math.random()*damage2.length);
      
        AiHp -= damage2[randomDamage2];
        
      
      let ski = document.getElementById("skill1");
      ski.value = skillPoints;
      
      let skill2 = document.getElementById("first");
      let sword2 = document.getElementById('sword');
      let enemy2 = document.getElementById('enemy');
      let player2 = document.getElementById("player");
      skill2.style.display = "none";
      // Move the sword to the enemy position
      let screen2 = document.getElementById("text");
     
      let displaySkill = document.getElementById("first").value;
      screen2.value = ` \nYou used ${displaySkill} damaged ${randomName[chosenName]}:${damage2[randomDamage2]}`
      
      sword2.style.display = 'inline';
      sword2.style.left = `${enemy.offsetLeft + enemy.clientWidth / 20}px`;
    
      player.style.animation = 'vibrationAnimation 0.05s ease-out';
      player.style.animation = 'attackAnimation 0.57s ease';
    
      // Sword animation
       sword2.style.animation = 'swordAnimation 0.5s ease-out';
      setTimeout(() => {
        player.style.animation = 'none';
        sword2.style.animation = 'none';
      },400);
    
      // Vibration animation for the enemy
      enemy.style.animation = 'vibrationAnimation 0.5s ease-out';
     
        
    
      // Reset animations and move sword back after a short delay
      setTimeout(() => {
        sword2.style.display = 'none';
        sword2.style.animation = 'none';
        enemy.style.animation = 'none';
        sword2.style.left = '50%'; // Move sword back to the center
      }, 500);
      
      
      setTimeout(function() {
        updateHealthDisplay();
        setTimeout(() => {
        aiSpeak();
        
        },2000);
      AiChoice();
        
      },3000);
    }
    }
    
function heal(){
  
   healer = document.getElementById("second");
  healer.style.display = 'inline';
  healer.focus();
  let clicker3 = document.getElementById("btn3");
    
    clicker3.addEventListener('click',function() {
      clicker3.style.backgroundColor = 'black';
      setTimeout(function () {
        clicker3.style.backgroundColor = 'darkred';
      },200);
    });
    
    
  
}

function handleHealing(){
  HealEffect();
  
     fr2 = 1;
     fs2 = 2;
     frs2 = Math.floor(Math.random() * (fs2 - fr2 + 1) + 1);
     if (frs2 === 2) {
      // sound();
     } else {
     
     }
      healpoints -= 1;
      if(healpoints < 0){
        Swal.fire({
          icon:'info',
          text:'You are out of heal points',
          confirmButton:true,
          confirmButtonColor:'red'
        });
      }else{
      let pick2 = document.getElementById("second");
      pick2.style.display = 'none';
      
      randomDamageIndex2 = Math.floor(Math.random()*damage3.length);
      
        
      userHealLog = "\n You used "+pick2.value+" healed"+": "+damage3[randomDamageIndex2];
        
        UserHp += damage3[randomDamageIndex2];
        
      let healInput = document.getElementById("heal2");
        healInput.value = healpoints;
      
        let display3 = document.getElementById("text");
          updateHealthDisplay();
        display3.value = userHealLog;
        //alert(userHealLog);
        
        setTimeout(function(){
// Update HP values to ensure they don't exceed 1000
          UserHp = Math.min(UserHp, min);
          
        updateHealthDisplay();
        setTimeout(() => {
        aiSpeak();
        },2000);
          AiChoice();
        },3000);
    }
    }

  
function updateHealthDisplay(){
  let playerName = document.getElementById("name").value;
    let userBar = document.getElementById("healthContainer");
    let aiBar = document.getElementById("health2Container");
    userHealthPercentage = (UserHp / min) * 100;
    aiHealthPercentage = (AiHp / max) * 100;
    
    let pick = document.getElementById("text");
    pick.value = `                            ${playerName}:${UserHp}\n                             ${randomName[chosenName]}:${AiHp}                                               \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    YOU👆`
    // Update the width of the health bars
    userBar.style.width = userHealthPercentage + "%";
    aiBar.style.width = aiHealthPercentage + "%";
    let A = document.getElementById("turn2");
    let B = document.getElementById("skill1");
    let C = document.getElementById("heal2");
    A.value = bankaiSkill;
    B.value = skillPoints;
    C.value = healpoints;
    
    if(skillPoints < 0){
      skillPoints = 0;
    }else if(healpoints < 0){
      healpoints = 0;
    }
    
    
    element.style.animationName = 'bounce';
    element.style.animationDuration = '2s';
    element.style.animationTimingFunction = 'ease-in-out';
    element.style.animationIterationCount = 'infinite';
    
    element2.style.animationName = 'bounce';
    element2.style.animationDuration = '2s';
    element2.style.animationTimingFunction = 'ease-in-out';
    element2.style.animationIterationCount = 'infinite';
      
    
    }
    
    


function begin() {
    Swal.fire({
      icon: 'info',
      text: 'Going to fullscreen',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
      timer: 3000,
      willClose: () => {},
    }).then(() => {
      var element = document.documentElement; // Fullscreen the entire document
  
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      
      
    });
  }
 
 function aiSpeak(){
   let self = document.getElementById("name").value;
    var speaker = new SpeechSynthesisUtterance(`${self}'s turn`);
    speechSynthesis.speak(speaker);
 }
 function AiChoice(){
        if (AiHp <= 0) {
          check();
          return;
        }
   //Swal.fire({
   //  icon:'info',
   //  text:`${randomName[chosenName]} turn`,
 //    timer:1000,
   //  customClass: {
   //    popup: 'small',
//     },
//   });
   
   let p = 1;
   let q = 3;
   let range = Math.floor(Math.random()* (q-p+1)+1);
   
   if(range === 1){
     Aiplay();
   } else if (range === 2) {
     AiSkill();
   } else if (range === 3) {
     aiHeal();
   }
 }
 
 
 function Aiplay(){
  if(currentWave == 3){
    sound();
  }
   effect();
   let d = 1;
   let e = 150;
   let aiDamage = Math.floor(Math.random() * (e - d + 1) + 1);
   UserHp -= aiDamage;
   let ailog1 = document.getElementById("text");
   ailog1.value = ` \n ${randomName[chosenName]} damaged you ${aiDamage}`;
   
   
      // Move the sword to the enemy position
      sword2.style.display = 'inline';
      sword2.style.right = `${player.offsetLeft + player.clientWidth / 20}px`;
    
    player.style.animation = 'vibrationAnimation2 0.5s ease-out';
        
    
      // Sword animation
      sword2.style.animation = 'swordAnimation2 1.0s ease-out';
      setTimeout(() => {
        player.style.animation = 'none';
        sword2.style.animation = 'none';
      },400);
    
      // Vibration animation for the enemy
      enemy.style.animation = 'vibrationAnimation2 0.05s ease-out';
     
    //enemy.style.animation = 'attackAnimation2 0.57s ease';
    
      // Reset animations and move sword back after a short delay
      setTimeout(() => {
        sword2.style.display = 'none';
        sword2.style.animation = 'none';
        enemy.style.animation = 'none';
        sword2.style.left = '50%'; // Move sword back to the center
      }, 500);
      





   setTimeout(function(){
    check();
     updateHealthDisplay();
   },3000);
   
 }
 
 
  function AiSkill(){
   if(currentWave == 3){
   sound();
   }
    effect();
    
  skillPoints2 -= 1;
      if (skillPoints2 < 0) {
        Swal.fire({
          icon: 'info',
          text: `${randomName[chosenName]} is out of skill points`,
          timer: 1000
        }).then((result) => {
          updateHealthDisplay();
        });
      } else {
        skills = ['slice', 'dark', 'flare', 'sap', 'meteor', 'flicker','blizzard'];
        damage = [200, 110, 111, 145, 169, 120,121];
        combined = skills.concat(damage);
        let randomSkillIndex = Math.floor(Math.random() * skills.length);
        let randomDamageIndex = Math.floor(Math.random() * damage.length);
      
      
        UserHp -= damage[randomDamageIndex];
      
        aiSkillLog = `\n${randomName[chosenName]} used ${skills[randomSkillIndex]} damaged you: ${damage[randomDamageIndex]}`;
    
     let log = document.getElementById("text");
     log.value = aiSkillLog;
    
    
      // Move the sword to the enemy position
      sword2.style.display = 'inline';
      sword2.style.right = `${player.offsetLeft + player.clientWidth / 20}px`;
    
    player.style.animation = 'vibrationAnimation2 1.5 ease-out';
    
      // Sword animation
      sword2.style.animation = 'swordAnimation2 1.0s ease-out';
      setTimeout(() => {
        player.style.animation = 'none';
        sword2.style.animation = 'none';
      },400);
    
      // Vibration animation for the enemy
      enemy.style.animation = 'vibrationAnimation2 0.05s ease-out';
      enemy.style.animation = 'attackAnimation2 0.57s ease';
    
        
    
      // Reset animations and move sword back after a short delay
      setTimeout(() => {
        sword2.style.display = 'none';
        sword2.style.animation = 'none';
        enemy.style.animation = 'none';
        sword2.style.left = '50%'; // Move sword back to the center
      }, 500);
      
    
    


    setTimeout(function() {
    check();
      
      updateHealthDisplay();
    },3000);
      }
  }
function aiHeal() {
  HealEffect();
    healpoints2 -= 1;
    if (healpoints2 < 0) {
      Swal.fire({
        icon: 'info',
        text: `${randomName[chosenName]} is out of heal points`,
        timer: 1000
      }).then((result) => {
        updateHealthDisplay();
      });
  
    } else {
      let test2 = 1;
      let test3 = 200;
      let test = Math.floor(Math.random() * (test3 - test2 + 1) + 1);
      AiHp += test;
      food = ["potion", "Hi potion", "Elixer", "coffee","wine"];
      randomFood = Math.floor(Math.random() * food.length);
      aiHealLog = `\n ${randomName[chosenName]} used ${food[randomFood]} healed: ${test}`;
  
      let plan3 = document.getElementById("text");
      plan3.value = aiHealLog;
      setTimeout(function() {
        // Update HP values to ensure they don't exceed 1000
        AiHp = Math.min(AiHp, max);
  
        updateHealthDisplay();
        check();
      }, 3000);
    }
  
  }
    
function conf() {
      Swal.fire({
        title: 'Welcome',
        text: 'Your aim is to defeat your opponent. There are several waves to go through, and only the strongest will survive. Are you ready?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I am ready!',
        allowOutsideClick:false,
        allowEscapeKey:false
      }).then((result) => {
        if (result.isConfirmed) {
          audio = new Audio("shao.mp3");
          audio.play();
          updateHealthDisplay();
        } else {
          Swal.fire({
            icon: 'info',
            title: 'Are you sure you want to abort?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            allowEscapeKey:false,
            allowOutsideClick:false
          }).then((result) => {
            if (result.isConfirmed) {
              window.close();
            } else {
                  Swal.fire({
                  title: 'Welcome',
                  text: 'Your aim is to defeat your opponent. There are several waves to go through, and only the strongest will survive. Are you ready?',
                  icon: 'info',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, I am ready!',
                  allowOutsideClick:false
                }).then((result) => {
                    if (result.isConfirmed) {
                      audio = new Audio("shao.mp3");
                      audio.play();
                      updateHealthDisplay();
                      valid = true;
                    }
                });
            
            }
          });
        }
      });
    }
  
  
function continue1(){
      audio = new Audio("shao.mp3");
      audio.play();
      updateHealthDisplay();
    }

let additionalHpInWave3 = 1000; 
  
  let currentWave = 1;
  let bankai = 1;
  let gameOver = new Audio("over.mp3");
  let win = new Audio("final.mp3");
  
  tan3 = new Audio("drift.mp3");
function check() {
    // Check if player's HP is zero
    if (UserHp <= 0) {
      UserHp = 0;
      updateHealthDisplay();
      luck3 = music();
      // Show game over message
      Swal.fire({
        icon: 'info',
        title: 'GAME OVER',
        text: 'Play again?',
        cancelButton: true,
        cancelButtonColor: 'red',
        confirmButtonText: 'continue',
        allowEscapeKey:false,
        allowOutsideClick:false,
        didOpen: () => {
          luck3.pause();
          audio3.pause();
          gameOver.play();
          finalBoss.pause();
          tan.pause();
          
          if(!tan3.paused){
          tan3.pause();
          tan3.currentTime = 0;
          }
          
        }
        
      }).then((result) => {
        if (result.isConfirmed) {
          // Reset game variables for a new game
          UserHp = 1000;
          AiHp = 1000;
          min = 1000;
          max = 1000;
          gameOver.pause();
          gameOver.currentTime = 0;
          luck2 = music();
          
            audio3.pause();
            luck2.currentTime = 0;
            tan3.currentTime = 0;
            tan3.play();
            if(!luck2.paused){
              luck2.pause();
            }
          
          skillPoints = 10;
          healpoints = 5;
          updateHealthDisplay();
          continue1();
      soundArray = ["Weak.m4a","shao.mp3","Useless.m4a","A.mp3","B.mp3","E.mp3","F.mp3","ll.mp3"];
        bankai = 1;
        bankaiSkill = 0;
        currentWave = 1;
        
        damage3 = [222,111,150,121,134,156,166,200];
       damage2 = [222,111,150,121,134,156,166,200];
        skillPoints2 = 10;
        healpoints2 = 5;
        link.src = aiPick[aiPickChoice];
        link2.src = aiSword[aiSwordChoice];
          
        }
      });
      return;
    }else{


  if (UserHp < 300) {
    if(bankai >= 1 ){
      Swal.fire({
        icon: 'info',
        text: 'Your opponent wouldn\'t be defeatable at this rate. You have no choice but to use your last skill BANKAI',
        cancelButton: true,
        cancelButtonColor: 'red',
        confirmButtonText: 'Use',
        confirmButtonColor: 'green'
      }).then((result) => {
        if (result.isConfirmed) {
          bankai -= 1;
          audio2 = new Audio("Bankai.mp3");
          luck = music();
          luck.pause();
          if(!audio4.paused){
            audio4.pause();
          }
          

        // Set an event listener for the timeupdate event
        audio3.addEventListener('timeupdate', function() {
       // Check if the audio is within the last 9 seconds of its duration
        if (audio3.currentTime > audio3.duration - 19) {
        // Reset the playback to the beginning
         audio3.currentTime = 0;
        }
        });
          
          audio3.play();
          UserHp = 1000;
          audio2.play();
          skillPoints = 10;
          healpoints = 5;
          
          damage2 = [200,250,219,113,222,280,230,160,218];
          
          damage3 = [290,300,340,200,400,350,280,170,210,111,322];
          
          soundArray = ["kk.mp3","mm.mp3","nn.mp3","oo.mp3"];
          
          updateHealthDisplay();
        }
      });
      
      
    }else{
      
    }
  }
    }
  
    // Check if AI's HP is zero
    if (AiHp <= 0) {
      AiHp = 0;
      updateHealthDisplay();
  
      // Start the next wave
      startNextWave();
    }
  
  function startNextWave() {
  if (currentWave < 3) {
    Swal.fire({
      icon: 'success',
      text: currentWave < 3 ? `Wave ${currentWave} completed +3(skills, heal points). Next wave` : '',
      confirmButtonText: currentWave < 3 ? 'Move' : '',
      allowOutsideClick:false,
      allowEscapeKey:false,
      didOpen: () => {
        win.play();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        win.pause();
        win.currentTime = 0;
        mim = 1000;
        max = 2000;
        currentWave++;
      console.log(max);
        if (currentWave == 2) {
          AiHp = 1000 + additionalHpInWave3;
        } else if (currentWave == 3) {
          max = 3000;
          AiHp = 2000 + additionalHpInWave3;
          console.log(max);
          let boss = document.getElementById("zack");
           boss.src = "chaos.png";
          let bossSword = document.getElementById("sword2");
         bossSword.src = "axe.png";
          let tan2 = music();
        if (!tan2.paused) {
          tan2.pause();
        }
        if (!audio3.paused) {
          audio3.pause();
        }
        finalBoss = new Audio("sazanthos.mp3");
        finalBoss.play();
        finalBoss.loop = true;
        
        soundArray = ["battle12.wav","battle23.wav","battle9.wav","battle10.wav","sample2.wav","sample5.wav","battle34.wav"]
        } else if(currentWave > 3){
          showVictoryMessage();
        }else{
          updateHealthDisplay();
          startNextWave();
        }
        updateHealthDisplay();
        skillPoints += 3;
        healpoints += 3;
        healpoints2 = 5;
        skillPoints2 = 10;
        userHealthPercentage = (UserHp / mim) * 100;
        aiHealthPercentage = (AiHp / max) * 100;
        updateHealthDisplay();
        continue1();
        
      }
    });
  } else {
    defeat = new Audio("battle3.wav");
    defeat.play();
    showVictoryMessage();
  }
}
if (bankaiSkill == 20 || bankaiSkill == 21 || bankaiSkill == 22 || bankaiSkill== 24)  {
    if(AiHp > 0){
      Swal.fire({
        icon: 'info',
        text: 'Bankai technique, Cast drain, usage:1',
        confirmButtonColor: 'blue'
    
      }).then((result) => {
        if (result.isConfirmed) {
          bankaiSkill = 0;
          bankaiSkill += 1;
          console.log(bankaiSkill);
          AiHp -= 1000;
          updateHealthDisplay();
          Swal.fire({
            icon:'info',
            title:`You damaged ${randomName[chosenName]} 1000`,
            timer:1000,
            showConfirmButton:false
            
          }).then((result) => {
            if(AiHp <= 0){
              AiHp = 0;
              updateHealthDisplay();
              
              if (!tan2.paused) {
                tan2.pause();
              }
              if (!audio3.paused) {
                audio3.pause();
              }
              //finalBoss = new Audio("sazanthos.mp3");
              //finalBoss.play();
              //finalBoss.loop = true;
              
              
              startNextWave();
            }else{
              
            }
          });
        } else {
    
        }
      });
    }else{
      
    }
}else if(bankaiSkill == 25){
  Swal.fire({
    icon:'info',
    text:'You lost the chance to use bankai special skill',
    timer: 2000
    
  }).then(() => {
    
  });
}

}

function showVictoryMessage() {
      let nop = new Audio("final.mp3");
       tan = new Audio("drift.mp3")
      Swal.fire({
        icon: 'success',
        text: 'Congratulations! You defeated all waves. You are the ultimate champion!',
        showCancelButton: true,
        confirmButtonText: 'Play Again',
        confirmButtonColor: 'green',
        cancelButtonText: 'No',
        cancelButtonColor: 'red',
        allowEscapeKey:false,
        allowOutsideClick:false,
        didOpen: () => {
          nop.play();
    
          if (!tan.paused) {
            tan.pause();
          }
          if (!audio3.paused) {
            audio3.pause();
          }
          if(!finalBoss.paused){
            finalBoss.pause();
          }
          if(!audio4.paused){
            audio4.pause();
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Reset game variables for a new game
          nop.pause();
          updateHealthDisplay();
          currentWave = 1;
          bankaiSkill = 0;
          bankai = 1;
          UserHp = 1000;
          AiHp = 1000;
          min = 1000;
          max = 1000;
          skillPoints = 10;
          healpoints = 5;
          updateHealthDisplay();
          continue1();
          tan.play();
          tan.currentTime = 0;
          damage3 = [222, 111, 150, 121, 134, 156, 166, 200];
          damage2 = [222, 111, 150, 121, 134, 156, 166, 200];
          soundArray = ["Weak.m4a", "shao.mp3", "Useless.m4a", "A.mp3", "B.mp3", "E.mp3", "F.mp3", "ll.mp3"];
          skillPoints2 = 10;
          healpoints2 = 5;
          link2.src = aiSword[aiSwordChoice];
          link.src = aiPick[aiPickChoice];
        } else {
          window.close();
        }
      });
    }
    
    
    function Menu(){
        var navLinks = document.getElementById('link');
          navLinks.style.display = (navLinks.style.display === 'none' || navLinks.style.display === '') ? 'block' : 'none';
          
    }
    
    function Home(){
      Swal.fire({
        icon:'warning',
        title:'Go back to main menu?',
        showCancelButton:true,
        showConfirmButton:true
      }).then((result) => {
        if(result.isConfirmed){
            // Reload the first page
            window.location.href = window.location.origin; // Set the URL to the initial one
            window.location.reload(); // Reload the page
            audio.pause();
        }
      });
    }
  
      
      
