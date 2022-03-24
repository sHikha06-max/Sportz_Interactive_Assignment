
     async function playerRequest() {
            
        
  
        let response = await fetch("https://api.npoint.io/20c1afef1661881ddc9c");
        let data = await response.json();
        var dataa=data.playerList
        console.log("data:", data);

 
    
      let data_div = document.getElementById('players');

          var date = new Date();
          var now = date.getDate()+'-'+date.getMonth()+ '-'+ date.getFullYear();
          var time = date.getHours()+ ':'+ date.getMinutes()+ ":"+date.getSeconds();

          let div = document.createElement("div");
            dataa.forEach(element => {
                var fullName=document.createElement('h3')
                var skill = document.createElement('h3');
                var pic=document.createElement('img');
                var val = document.createElement('span');
                var matches = document.createElement('p');
                var matchTime = document.createElement('p');

                pic.src=`./player-images/${element.Id}.jpg`

                fullName.innerText=element.PDName;
                skill.innerText= element.SkillDesc;
                val.innerText= `$ ${element.Value}`;
                matches.innerText = `${element.UpComingMatchesList[0].CCode} VS ${element.UpComingMatchesList[0].VsCCode}`
                matchTime = `${now} ${time}`
                div.append(fullName,pic,skill,val, matches,matchTime);
               
              //  console.log("hello")

                  
            });      
            data_div.append(div)
         
         
          
         
     

    } 
    
    async function searc(){
        let response = await fetch("https://api.npoint.io/20c1afef1661881ddc9c");
        let data = await response.json();
        var Data=data.playerList
        console.log("data:", data);

        var o = document.getElementById('lit').value;
        let search_div = document.getElementById('blank') ;

        Data.forEach(element => {
         
            if(o==element.PFName || o==element.TName){
                console.log(element.PFName,element.TName )
            
                search_div.append(element.PFName,element.TName,);
            }
  
        });
     } 
      //p  console.log(o, "search") 
    
playerRequest()


