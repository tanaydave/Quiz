fetch('https://opentdb.com/api.php?amount=10')
.then(res=>res.json())
.then((data)=>{
    const result= data.results;
    console.log(result)
    //console.log(result)
    //results.forEach(result => {console.log(result.question)
    let i =0
    
    // while( i<10)
    //     {
    //         {let k=0;
    //     let output=""
    //     output=`<div class="qn">${result[i].question}</div>
    //     <div class="main " id="lol">
    //     <div class="correct" >1)<button class="buttons" id="correct"> ${result[i].correct_answer}</button></div>
    //     <div class="answers" >2)<button class="buttons" id="answers1"> ${result[i].incorrect_answers[0]}</button></div>
    //     <div class="answers" >3)<button class="buttons" id="answers2"> ${result[i].incorrect_answers[1]}</button></div>
    //     <div class="answers" >4)<button class="buttons" id="answers3"> ${result[i].incorrect_answers[2]}</button></div>
    //     </div>`
    //     //console.log(output)
    //     document.getElementById('inbox1').innerHTML=output;}
    
    //     document.getElementById('lol').addEventListener("click",(e)=>{ let y=e.target.id;
            

    //         if(y=='correct') 
    //         {       
    //         document.getElementById('correct').style.backgroundColor="green";
    //         k++;
    //         }
    //         else
    //         {
    //         document.getElementById('correct').style.backgroundColor="green";
    //         document.getElementById(`${e.target.id}`).style.backgroundColor="red";

    //         }
            
        
        
    //     },{once:true});
    //     i++;
    //     document.getElementById('button1').addEventListener('click',)
    //    // i++;
             

    //     // document.getElementById('answers1').addEventListener("click",()=>{document.getElementById('answers1').style.backgroundColor="red";
    //     // document.getElementById('correct').style.backgroundColor="green"});   
    //     // document.getElementById('answers2').addEventListener("click",()=>{document.getElementById('answers2').style.backgroundColor="red";
    //     // document.getElementById('correct').style.backgroundColor="green"});   
    //     // document.getElementById('answers3').addEventListener("click",()=>{document.getElementById('answers3').style.backgroundColor="red";
    //     // document.getElementById('correct').style.backgroundColor="green"});   

    // };
    
    let k=0
        function z(i){let j=i
    let output=""
    output=`<div class="qn">Q${i+1})  ${result[i].question}</div>
    <div class="main " id="lol">
    <div class="correct" >1. <button class="buttons" id="correct"> ${result[i].correct_answer}</button></div>
    <div class="answers" >2. <button class="buttons" id="answers1"> ${result[i].incorrect_answers[0]}</button></div>
    <div class="answers" >3. <button class="buttons" id="answers2"> ${result[i].incorrect_answers[1]}</button></div>
    <div class="answers" >4. <button class="buttons" id="answers3"> ${result[i].incorrect_answers[2]}</button></div>
    </div>
     <div id="score">${k}/${i}</div>`
    //console.log(output)
    document.getElementById('inbox1').innerHTML=output;

    document.getElementById('lol').addEventListener("click",(e)=>{ let y=e.target.id;
        

        if(y=='correct') 
        {    
        document.getElementById('correct').style.color="green ";   
        document.getElementById('correct').style.borderColor="green ";
        i=i+1;
        k++;
        document.getElementById('score').innerHTML=`${k}/${i}`;
        
        //k++;
        }
        else
        {
            document.getElementById('correct').style.color="green ";   
            document.getElementById('correct').style.borderColor="green ";
            document.getElementById(y).style.color="red";   
            document.getElementById(y).style.borderColor="red ";
            i=i+1;
            document.getElementById('score').innerHTML=`${k}/${i}`;
        

        }
        
    
    
    },{once:true});}
    
    z(i);
    document.getElementById('button1').addEventListener('click',()=>{
        i++;
        if(i<10)
        {z(i)}
        

    })
   // i++;
         

















    // document.getElementById('answers1').addEventListener("click",()=>{document.getElementById('answers1').style.backgroundColor="red";
    // document.getElementById('correct').style.backgroundColor="green"});   
    // document.getElementById('answers2').addEventListener("click",()=>{document.getElementById('answers2').style.backgroundColor="red";
    // document.getElementById('correct').style.backgroundColor="green"});   
    // document.getElementById('answers3').addEventListener("click",()=>{document.getElementById('answers3').style.backgroundColor="red";
    // document.getElementById('correct').style.backgroundColor="green"});   


    
}

)