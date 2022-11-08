class Predator extends GrassEater
{
    eat(objElement)
    {
        let found = this.chooseCell(objElement);
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
}