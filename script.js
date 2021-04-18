function main()
{
    let title = ['STICKER', 'KARTU NAMA', 'MENU', 'BROSUR', 'SABLON BAJU', 
                'AKRILIK RUMAH', 'STICKER ONEWAY', 'KALENDER', 'PIN'];
    let name = [['stiker.jpeg'], ['kartunama1.jpeg', 'kartunama2.jpeg'],
                ['menu1.jpeg', 'menu2.jpeg'], ['brosur1.jpeg', 'brosur2.jpeg'],
                ['sablon.jpeg'], ['akrilik.jpeg'], ['oneway1.jpeg', 'oneway2.jpeg'],
                ['kalender.jpeg'], ['pin1.jpeg', 'pin2.jpeg']];
    
    let counter = 0;
    
    let btnLeft = document.querySelector('#left');
    let btnRight = document.querySelector('#right');

    btnLeft.onclick = function () 
    {
        counter -= 1

        if (counter < 0)
        {
            counter = 8;
        } 

        document.querySelector('#product-name').innerHTML = title[counter];
        text = '';

        for (i = 0; i < name[counter].length; i++)
        {
            text += `<img src="products/${name[counter][i]}">`
        }

        document.querySelector('.product-img').innerHTML = text;
    } 

    btnRight.onclick = function () 
    {
        counter += 1
        counter %= 9
        document.querySelector('#product-name').innerHTML = title[counter];

        text = '';

        for (i = 0; i < name[counter].length; i++)
        {
            text += `<img src="products/${name[counter][i]}">`
        }

        document.querySelector('.product-img').innerHTML = text;
    } 
}

document.addEventListener('DOMContentLoaded', main)