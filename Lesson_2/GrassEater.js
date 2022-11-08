class GrassEater extends LivingCreature 
{
    constructor(x, y, index) 
    {
        super(x, y, index);
        this.energy = 8;
    }    
    getNewCoordinates() 
    {
        this.directions = 
        [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) 
    {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    eat()
    {
        let found = this.chooseCell(1);
        let foundRand = random(found);

        if(foundRand)
        {
            this.energy++;
            let x = foundRand[0];
            let y = foundRand[1];

            matrix[y][x] = 2; 
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