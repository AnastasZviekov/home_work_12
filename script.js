
const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
]

const PROMO=`PATRON`;



   let promoCode = prompt ( `Pls print PROMO CODE` );
   let validPromo;
   if(promoCode!==null) {
        validPromo=promoCode.trim().toUpperCase();
   }



let copiedObj=JSON.parse(JSON.stringify(PRODUCTS));

    const getPrice = (obj) => {
        let finalPrice;
        obj.map ( item => {
            if ( validPromo === PROMO ) {
                finalPrice = item.price - (item.price / 100 * item.discountPercentage).toFixed ( 2 );
                item.finalPrice = item.price - (item.price / 100 * item.discountPercentage).toFixed ( 2 );
            } else {
                finalPrice = item.price;
                item.finalPrice = item.price;

            }
            console.log ( finalPrice.toFixed ( 2 ) );
            return finalPrice.toFixed ( 2 );
        }  )
    }


getPrice(copiedObj);


    let totalPrice=copiedObj.map(el=>el.finalPrice).reduce((summ,finalPrice)=>{
        summ+=finalPrice;
        return summ;
})

console.log(totalPrice);
let THDs=[`Product title`, `Product price`, `Product discount percentage`, `Product rating`];

const printTDs=
     THDs.map((item)=>{
        return`<td>${item}</td>`
     })


let ratingSortProposal=confirm(`Would you like to sort items by rating?`);


const sortRating= (obj)=>{
    if (ratingSortProposal) {
        let sortArr=obj.sort((x,y)=>y.rating-x.rating);
        console.log(sortArr);
        return sortArr;
    }
    else {return copiedObj}
}
let sortArray=sortRating(copiedObj);
console.log(sortArray)

let mapArray=copiedObj.map(value => {
    return `<tr><td>${ value.title }</td><td>${value.finalPrice}$</td><td>${value.discountPercentage}%</td><td>${value.rating}</td></tr>`
        }
 )
console.log(mapArray)

let mapArraySort=sortArray.map(value => {
    return `<tr><td>${value.title}</td><td>${value.finalPrice}$</td><td>${value.discountPercentage}%</td><td>${value.rating}</td></tr>`
        }
 )
console.log(mapArraySort);


function renderProductsTable(ratingSortProposal) {
        let tBody = "";
        if ( ratingSortProposal ) {
            tBody = `<tbody>${ mapArraySort.join () }</tbody>`
        } else {
            tBody = `<tbody>${ mapArray.join () }</tbody>`
        }
    return `<table class="render_table"> 
   <thead>
   <tr>
    ${printTDs.join()}
    </tr>
    </thead>
    ${tBody}
    <tfoot>
    <tr>
        <td colSpan="4"> Final Price:${totalPrice}$ </td>
    </tr>
    </tfoot></table>`
}

document.write (renderProductsTable());


