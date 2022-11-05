let matrix = [
  // [0, 0, 1, 0, 0],
  // [1, 0, 0, 0, 0],
  // [0, 1, 0, 2, 0],
  // [0, 0, 1, 0, 0],
  // [1, 1, 0, 0, 0],
  // [1, 1, 0, 0, 2],
  // [1, 1, 0, 0, 0]
];

function generate(matLen, gr, gre, pred, man, alpha)
{
  // let matrix = [];
  for(let i = 0; i < matLen; i++)
  {
    matrix[i] = [];
    for(let j = 0; j <  matLen; j++)
    {
      matrix[i][j] = 0;
    }
  }

  for(let i = 0; i < gr; i++)  // grass
  {
    let x = Math.floor(Math.random()*matLen);
    let y = Math.floor(Math.random()*matLen);
    if(matrix[y][x] == 0)
    {
      matrix[y][x] = 1;
    }
  }
  for(let i = 0; i < gre; i++) // grass eater
  {
    let x = Math.floor(Math.random()*matLen);
    let y = Math.floor(Math.random()*matLen);
    if(matrix[y][x] == 0)
    {
      matrix[y][x] = 2;
    }
  }
  for(let i = 0; i < pred; i++) // predator
    {
      let x = Math.floor(Math.random()*matLen);
      let y = Math.floor(Math.random()*matLen);
      if(matrix[y][x] == 0)
      {
       matrix[y][x] = 3;
      }
    }
    for(let i = 0; i < man; i++) // human
    {
      let x = Math.floor(Math.random()*matLen);
      let y = Math.floor(Math.random()*matLen);
      if(matrix[y][x] == 0)
      {
       matrix[y][x] = 4;
      }
    }  
    for(let i = 0; i < alpha; i++) // Iregullar
    {
      let x = Math.floor(Math.random()*matLen);
      let y = Math.floor(Math.random()*matLen);
      if(matrix[y][x] == 0)
      {
       matrix[y][x] = 5;
      }
    } 

}

generate(50,    5,     10,     10,          10,     10);
////// length   խոտ    vegan   ամենակեր    մարդ   հակամարդ





//n = 50; // + prompt("nermucel n");
//m = 50; // + prompt("nermucel m")


// Grrass =+ prompt("Nermucel xotieri qanak@");
// Vegan =+ prompt("Nermucel xotakerneri qanak@");
// Rabit =+ prompt("Nermucel amenakerneri qanak@");
// Meat =+ prompt("Nermucel gishatichneri qanak@");

// for(let i = 0; i < m; i++)  // ստացա երկարությունը
// {
//   matrix.push([]); // ավլեցրեցի դատարկ զանգված 
//   for(let j = 0 ; j < n; j++) // տվեցի բարձրություն
//   {
//    /*if(Grrass)
//     {
//       Grrass * matrix[i].push(Math.floor(Math.random()*2));
//     }
//     else if(Vegan)
//     {
//     Vegan * matrix[i].push(Math.floor(Math.random()*3));
//     }
//     else if(Rabit)
//     {
//     Rabit * matrix[i].push(Math.floor(Math.random()*4));
//     }
//     else if(Meat)
//     {
//      Meat */ matrix[i].push(Math.floor(Math.random()*4));
//     //}
//   }
// }


//matrix[2][2] = 2;
//  matrix[40][40] = 2;
//  matrix[5][5] = 3;
//  matrix[38][4] = 4;

let side = 30;

let grassArr = [];  //  կանաչ 
let grassEater = []; // դեղին
let predatorArr = []; //կարմիր
let humanArr = [];     //սև
let iregullarArr = []; //երկնագույն

function setup() {
  frameRate(10);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');

  for(let y = 0; y < matrix.length; y++)
  {
    for(let x = 0; x < matrix[y].length; x++)
    {
      if(matrix[y][x] === 1)
      {
        let gr = new Grass(x, y);
        grassArr.push(gr);
      }
      else if(matrix[y][x] === 2)
      {
        let gre = new GrassEater(x, y);
        grassEater.push(gre);
      }
      else if(matrix[y][x] === 3)
      {
        let pred = new Predator(x, y);
        predatorArr.push(pred);
      }
      else if(matrix[y][x] === 4)
      {
        let man = new Human(x, y);
        humanArr.push(man);
      }
      else if(matrix[y][x] === 5)
      {
        let alpha = new Iregullar(x, y);
        iregullarArr.push(alpha);
      }
    }
  }
}

function draw() 
{

  for (var y = 0; y < matrix.length; y++) 
  {
      for (var x = 0; x < matrix[y].length; x++) 
      {

          if (matrix[y][x] == 1) 
          {
              fill("green");
          }
          else if (matrix[y][x] == 0) 
          {
              fill("#acacac");
          }
          else if (matrix[y][x] == 2) 
          {
              fill("yellow");
          }
          else if (matrix[y][x] == 3) 
          {
              fill("red");
          }
          else if (matrix[y][x] == 4) 
          {
              fill("black");
          }
          else if (matrix[y][x] == 5) 
          {
              fill("cyan");
          }
     
     
          rect(x * side, y * side, side, side);
      }
  }
  for(let i = 0; i < grassArr.length; i++)
  {
    grassArr[i].mul();
  }
// console.log(grassArr);

  for(let i = 0; i < grassEater.length; i++)
  {
    grassEater[i].eat();
  }

  for(let i = 0; i < predatorArr.length; i++)
  {
    predatorArr[i].eat();
  }
//console.log(predatorArr);
  for(let i = 0; i < humanArr.length; i++)
  {
    humanArr[i].eat();
  }
  //console.log(humanArr);
  for(let i = 0; i < iregullarArr.length; i++)
  {
    iregullarArr[i].eat();
  }
}
