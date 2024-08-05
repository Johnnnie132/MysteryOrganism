// Returns a random DNA base
let numStore = [];
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(a, b){    
    return  {specimenNum: a,
             dna: b,
             mutate(){
              console.log(b)
              let randomizer = Math.floor(Math.random()*15);
              let selector = this.dna[randomizer];
              let selector2 =0;
              for(let i=0; i<this.dna.length; i++){
                if(i === randomizer){
                  while(this.dna[selector2] === selector){
                    selector2++;
                  }
                  this.dna[i] = this.dna[selector2];
                }
              }
              return this.dna;
             },
             compareDNA(newObj){
              let jone1 = newObj.dna;
              let jone2 = this.dna;
              //console.log(jone1);
              //console.log(jone2);
              let collector = [];
              for(let i = 0; i < jone1.length; i++){
                if((jone1[i] === jone2[i]))
                {
                  collector.push(jone1[i]);
                  //console.log(i);
                } 
              }
              //console.log(collector);
              //console.log(`There is a ${((collector.length/jone1.length)*100).toFixed(2)}% match`);
              return `specimen #${this.specimenNum} and specimen #${newObj.specimenNum} have ${Math.round(((collector.length/jone1.length)*100))}% DNA in common`;
              },
              willLikelySurvive(){
                //console.log(this.dna);
                let likelyBases = this.dna.filter(element => {
                  return element === 'C' || element === 'G';
                })
                //console.log(likelyBases);
                //console.log(`${(likelyBases.length / this.dna.length).toFixed(2)}`)
                if((likelyBases.length / this.dna.length) > 0.6){
                  return true;
                }
                else{
                  return false;
                }
              }
              
            };
  }
     

/*let newer = mockUpStrand();
console.log(newer);
let cs = newer.filter(element => {
  return element === 'C' || element === 'G';
})
console.log(cs);
if((cs.length / newer.length) >= 0.6){
  console.log(`will likely survive ${(cs.length / newer.length).toFixed(2)}`)
}
else{
  console.log(`might not survive ${(cs.length / newer.length).toFixed(2)}`);
}*/
let counter = 0;
let adder = 0;
let storer = []
while (counter < 30){
  let holder = pAequorFactory(adder, mockUpStrand());
  if(holder.willLikelySurvive()){
    storer.push(holder);
    console.log('Survived');
    counter++;
    adder++;
  }
  else{
    adder++;
  }
}
console.log(storer);









