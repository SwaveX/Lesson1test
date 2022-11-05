class Predator // 3 karmir
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.energy = 35;
        this.directions = [];
    }

    getNewCoordinates()
    {
        this.directions = 
        [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
     }
//-------------------------------------------------------
     search(char, char1)
     {
         this.getNewCoordinates()
         let found = [];
         for(let i = 0; i < this.directions.length; i++)
         {
             let x = this.directions[i][0]; // 0-n x-neri syuner@
             let y = this.directions[i][1]; // 1-n y-neri syuner@
             if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) //"matrix.length"  y-ner@ tox, "matrix[0].length"  x-er@ elemnetner@ syun
             {
                if(matrix[y][x] == char || matrix[y][x] == char1)
                {               
                    found.push(this.directions[i]); // i-n amboxj* tox@   Error
                }
             }
         }
         return found;
     }
//-------------------------------------------------------
     move()
     {
         this.energy--;
         let found = this.search(0);
         let foundRand = random(found);
         if(foundRand && this.energy > 0)
         {
             let x = foundRand[0];
             let y = foundRand[1];
             matrix[y][x] = 3; // matrix[this.y][this.x]  Object nor tex
             matrix[this.y][this.x] = 0;
             this.x = x;
             this.y = y;
         }
         else 
         {
             this.die()
         }
     }
//-------------------------------------------------------
eat()
{
    console.log("pred");
    let found = this.search(2, 1);
    let foundRand = random(found);

        
    if(foundRand)
    {
        
        this.energy++;
        let x = foundRand[0];
        let y = foundRand[1];
        matrix[y][x] = 3; // matrix[this.y][this.x]
        matrix[this.y][this.x] = 0;
        this.x = x;
        this.y = y;
        for (var i in grassEater) 
        {   
            
            if (x == grassEater[i].x && y == grassEater[i].y) 
            {
                grassEater.splice(i, 1);
                break;
            }
            
        }
        for (var j in grassArr) 
        {
            if(x == grassArr[j].x && y == grassArr[j].y)
            {
             
                grassArr.splice(j, 1);
                break;
            }
        }
        if(this.energy >= 55)
        {
            this.mul();
        }
    }
    else 
    {
        this.move();
    }
}
//-------------------------------------------------------
mul()
{
    let found = this.search(0);
    let foundRand = random(found);
   

    if(foundRand)
    {
        let x = foundRand[0];
        let y = foundRand[1];
        matrix[y][x] = 3;

        let pred = new Predator(x, y);
        predatorArr.push(pred);
        this.energy = 35;
    }
}
//-------------------------------------------------------
die()
{
    matrix[this.y][this.x] = 0;
    for (var i in predatorArr) 
        {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) 
            {
                predatorArr.splice(i, 1);
                break;
            }
        }
}
     
}