class Iregullar // 5 cyan
{

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.energy = 80;
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
     search(char)
     {
         this.getNewCoordinates()
         let found = [];
         for(let i = 0; i < this.directions.length; i++)
         {
             let x = this.directions[i][0]; // 0-n x-neri syuner@
             let y = this.directions[i][1]; // 1-n y-neri syuner@
             if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) //"matrix.length"  y-ner@ tox, "matrix[0].length"  x-er@ elemnetner@ syun
             {
                 if(matrix[y][x] == char)
                 {               
                    found.push(this.directions[i]); // i-n amboxj* tox@  
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
             matrix[y][x] = 5; // matrix[this.y][this.x]  Object nor tex
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

    let found = this.search(4);
    let foundRand = random(found);

    if(foundRand)
    {
        this.energy++;
        let x = foundRand[0];
        let y = foundRand[1];
        matrix[y][x] = 5; // matrix[this.y][this.x]
        matrix[this.y][this.x] = 0;
        this.x = x;
        this.y = y;
        for (var i in humanArr) 
        {   
            {
                if (x == humanArr[i].x && y == humanArr[i].y) //Error
                {
                    iregullarArr.splice(i, 1);
                    break;
                }
            }
        }
        
        if(this.energy >= 85)
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
        matrix[y][x] = 5;

        let alpha = new Iregullar(x, y);
        iregullarArr.push(alpha);
        this.energy = 80;
    }
}
//-------------------------------------------------------
die()
{
    matrix[this.y][this.x] = 0;
    for (var i in iregullarArr) 
        {
            if (this.x == iregullarArr[i].x && this.y == iregullarArr[i].y) 
            {
                iregullarArr.splice(i, 1);
                break;
            }
        }
}
     
}

