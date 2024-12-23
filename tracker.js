var expens;
function calculate() {
    element = document.querySelector('.income');
     ment = document.querySelector('.saving');
      const ankit = element.value;
    const poudel  = ment.value;
     const inco = `<div class="incomedesign" ><div>Income </div>
     <div> ₹ ${ankit}</div></div> `;
     document.querySelector('.incomedata').innerHTML= inco;
     const savi =`<div class="savingdesign"><div>Saving</div><div> ₹ ${poudel}</div></div>`;
     document.querySelector('.savingdata').innerHTML=savi;
      expens = ankit-poudel;
      const expe = `<div class = "expensedesign"><div>For Expense</d>
     <div> ₹${expens}</div></div>`;
     document.querySelector('.expensedata').innerHTML= expe;
} 
    const array =[];
    const denak =[]; 
    const rate =[];
    var yahu;
      function experience(){
        let arraylist ='';
        for(i=0;i<array.length;i++){
            const todo = array[i];
            const tum = denak[i];
            const toto = rate[i];
            const hum = `<div class= "forall"><div class="index">${i+1}.</div><div class="twoin"><div class=" todo">${todo}</div><div class ="toto">₹${toto}</div></div><div class ="tum">${tum}</div></div>
           `;
            arraylist+=hum;
        }
        document.querySelector('.result').innerHTML = arraylist;
    }

    function expense(){
        akriti = document.querySelector('#spendon');
        devi = document.querySelector('#transactionmode');
        amount = document.querySelector('.spendamount');
        const spend = akriti.value;
        const mode = devi.value;
        const price = amount.value;
        expens = expens - price;
        array.push(spend);
        denak.push(mode);
        rate.push(price);
        akriti.value = '';
        devi.value = '';
        amount.value = '';
        yahu = `<div> ₹${expens}</div>`;
        document.querySelector('.tracker').innerHTML = yahu;
        
        experience();
    } 
    function opentab(event){
     const allbuttton = document.querySelectorAll('.buttontab');
      for(i=0;i<allbuttton.length;i++){
        allbuttton[i].classList.remove('active');
      }
      event.target.classList.add('active');
    }
    function opencontent(idtab){
      const allcontent = document.querySelectorAll('.content');
        for(i=0;i<allcontent.length;i++){
          allcontent[i].classList.remove('active');
        }
      idtab.classList.add('active'); 
    }