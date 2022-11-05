class GrassEater // 2 dexin 
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.energy = 25;
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
                 if(matrix[y][x] == char || matrix[y][x] == charH || matrix[y][x] == charI)
                 {
                     found.push(this.directions[i]); // i-n amboxj* tox@ 
                 }
             }
         }
         return found;
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
            matrix[y][x] = 2;

            let gre = new GrassEater(x, y);
            grassEater.push(gre);
            this.energy = 25;
        }
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
            matrix[y][x] = 2; // matrix[this.y][this.x]
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
        let found = this.search(1);
        let foundRand = random(found);
        if(foundRand)
        {
            this.energy++;
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 2; // matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in grassArr) 
            {
                if (x == grassArr[i].x && y == grassArr[i].y) 
                {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if(this.energy >= 45)
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
    die()
    {
        matrix[this.y][this.x] = 0;
        for (var i in grassEater) 
            {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) 
                {
                    grassEater.splice(i, 1);
                    break;
                }
            }
    }





}



