

let convert = [];
let covertion;

function ConvertNumbers(number) {

    for( let i = 1; i<number;i++)
    {
        if((i%2==0) && (i%3==0) && (i%5==0))
        {
            covertion = "yu-gi-oh";
        }
        else if ( ( i%2==0) && (i%3==0))
        {
            covertion=" yu-gi";
        }
        else if( (i%2==0) && (i%5==0))
        {
            covertion = "yu-oh";
        }
        else if ( (i%3==0) && (i%3==0))
        {
            covertion = "gi-oh";
        }
        else if(i%2==0)
        {
            covertion = "yu";
        }
        else if(i%3==0)
        {
            covertion = "yu";
        }
        else if(i%5==0)
        {
            covertion = "yu";
        }
        else {
            covertion = i;
        }
    
        convert.push(covertion);

        

    }
   console.log(convert);
    return convert;
}

ConvertNumbers(100);