class Grass // 1 kanach
{
    constructor(x, y) 
    {
       this.x = x;
       this.y = y;
       this.multiply = 0;
       this.directions = [
        [this.x - 1,/*0*/ this.y - 1 ],//1  *Amboxj tox
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
    mul()
    {
        let found = this.search(0);
        let foundRand = random(found);
        this.multiply++;

        if(this.multiply >= 4 && foundRand)
        {
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 1;

            let gr1 = new Grass(x, y);
            grassArr.push(gr1);
            this.multiply = 0;
        }
    }
}

