const btns=document.querySelectorAll('button')
const input=document.querySelector('input')
const root=document.querySelector('#root')

 const noutbuks = [
    {
      img : "https://softech.kg/image/cache/5faccf3e82df879a5b57d95e4275f01d.jpg",
      title : 'Acer', 
      baasy : "84 390 сом",
      rem : "Объем оперативной памяти: 16 GB / Операционная система: DOS / Диагональ: 15,6″ - 39,62 см",
      
    },

    {
      img : "https://object.pscloud.io/cms/cms/Photo/img_0_62_2986_0_1_IdYiEu.webp",
      title : 'Acer', 
      baasy : "41 190 сом",
      rem : "Объем оперативной памяти: 8 GB / Операционная система: DOS / Диагональ: 15,6″ - 39,62 см",
      
    },

    {
      img : "https://object.pscloud.io/cms/cms/Photo/img_0_62_2643_6_1.webp",
      title : 'Acer', 
      baasy : "86 290 сом",
      rem : "Объем оперативной памяти: 8 GB / Операционная система: DOS / Диагональ: 15,6″ - 39,62 см",
      
    },

    {
      img : "https://object.pscloud.io/cms/cms/Photo/img_0_62_2659_2_1.webp",
      title : 'Acer', 
      baasy : "50 990 сом",
      rem : "Объем оперативной памяти: 8 GB / Операционная система: Windows 11 Home / Диагональ: 15,6″ - 39,62 см",
      
    },

    {
      img : "https://object.pscloud.io/cms/cms/Photo/img_0_62_2989_0_1_HRWYEo.webp",
      title : 'Acer', 
      baasy : "64 790 сом",
      rem : "Объем оперативной памяти: 8 GB / Операционная система: DOS / Диагональ: 15,6″ - 39,62 см",
      
    },
    
    {
      img : "https://object.pscloud.io/cms/cms/Photo/img_0_62_2761_9_1.webp",
      title : 'Lenovo', 
      baasy : "41 190 сом",
      rem : "Объем оперативной памяти: 8 GB / Операционная система: Windows 11 Home / Диагональ: 15,6″ - 39,62 см",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/dc/5d/e5/5c01bdd662ed3ec87893e93165.webp",
      title : 'Lenovo', 
      baasy : "29 000KGS",
      rem : "Ноутбук, Lenovo, 8 ГБ ОЗУ, Intel Core i7, 15.6 Новый, Для несложных задач, память SSDv",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/19/a7/46/e47e06bcb27817c6efffb434d8.webp",
      title : 'Lenovo', 
      baasy : "54 000KGS",
      rem : "Ноутбук, Lenovo, 8 ГБ ОЗУ, Intel Core i7, 15.6 Новый, Для несложных задач, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/43/d1/e3/275f35e61ba272b31d8c9788a4.webp",
      title : 'Lenovo', 
      baasy : "47 000KGS",
      rem : "Ноутбук, Lenovo, AMD Ryzen 5, 15.6  Новый, Для несложных задач, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/d1/96/2c/1dc9a52f0d23c8a95615e7373c.webp",
      title : 'Lenovo', 
      baasy : "38 000KGS",
      rem : "Ноутбук, Lenovo, 4 ГБ ОЗУ, Intel Core i3, 15.6 , Новый, Для несложных задач, память SSD",
      
    },
    
    {
      img : "https://nout.kz/upload/resize_cache/webp/iblock/abd/Apple-MacBook-Air-13_3-1.8-GHz-dual_core-Intel-Core-i5_-128GB.webp",
      title : 'Apple', 
      baasy : "77700сом",
      rem : "НОУТБУК APPLE MACBOOK AIR 13.3 2020 APPLE M1 (8+256GB SSD)",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/66/b4/94/be3c236ba91c0828b89ae95071.webp",
      title : 'Apple', 
      baasy : "55 000KGS",
      rem : "Ультрабук, Apple, 16 ГБ ОЗУ, Intel Core i7, 13.3 , Б/у, Для несложных задач, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/c5/5f/2b/f7b954b9722c741e944aeac30e.webp",
      title : 'Apple', 
      baasy : "39 000KGS",
      rem : "Ультрабук, Apple, 8 ГБ ОЗУ, Intel Core i5, 13.3 , Б/у, Для работы, учебы, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original/85/8f/8e/3689ab8d66ac7ad04bc7c3c9a5.jpeg",
      title : 'asus', 
      baasy : "57 000KGS",
      rem : "Ноутбук, Asus, 16 ГБ ОЗУ, Intel Core i5, 15.6 , Б/у, Игровой, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/4d/38/ee/44d8357c96bfedf40bbc34f0ec.webp",
      title : 'asus', 
      baasy : "92 000KGS",
      rem : "Ноутбук, Asus, 16 ГБ ОЗУ, AMD Ryzen 7, 15.6 , Новый, Игровой, память SSD",
      
    },
    
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/94/3d/37/f57c74af191548d16350d6b723.webp",
      title : 'asus', 
      baasy : "61 000KGS",
      rem : "Ноутбук, Asus, 8 ГБ ОЗУ, AMD Ryzen 5, 15.6 , Новый, Игровой, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/90/56/ef/f6a003a09274b815f2fd8c7a26.webp",
      title : 'DELL', 
      baasy : "35 000KGS",
      rem : "Ультрабук, Dell, 16 ГБ ОЗУ, Intel Core i7, 14.3 , Б/у, Для работы, учебы, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/f6/3b/0c/dc361c199d9257e48ff6637b5d.webp",
      title : 'DELL', 
      baasy : "35 000KGS",
      rem : "Ультрабук, Dell, 16 ГБ ОЗУ, Intel Core i7, 14.3 , Б/у, Для работы, учебы, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/18/1b/10/0fceca818a95867c84968b90b6.webp",
      title : 'DELL', 
      baasy : "21 000KGS",
      rem : "Ультрабук, Dell, 4 ГБ ОЗУ, Intel Core i3, 14.3 , Б/у, Для несложных задач, память SSD",
      
    },
    {
      img : "https://img5.lalafo.com/i/posters/original_webp/05/b2/ab/8ead7152f5dfd5976339982dc6.webp",
      title : 'DELL', 
      baasy : "30 000KGS",
      rem : "Ультрабук, Dell, 8 ГБ ОЗУ, Intel Core i5, 14.3 , Б/у, Для несложных задач, память SSD",
      
    },
    
 ];

 function showNoutbuk(massive){
  root.innerHTML=''
  for (const noutbuk of massive) {
      console.log(noutbuk.img);
      root.innerHTML+=`
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${noutbuk.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${noutbuk.title}</h5>
        <p class="card-text">${noutbuk.baasy}</p>
        <p class="card-text">${noutbuk.rem}</p>
       
      </div>
    </div>
      `
  }
 }  
 
 
btns[0].onclick=()=>{
      console.log(noutbuks);
      showNoutbuk(noutbuks)

}
btns[1].onclick=()=>{
  const aserNoutbuk=noutbuks.filter(noutbuk=>noutbuk.title==='Acer')
  console.log(aserNoutbuk);
  showNoutbuk(aserNoutbuk)
}
btns[2].onclick=()=>{
  const aserNoutbuk=noutbuks.filter(noutbuk=>noutbuk.title==='Apple')
  console.log(aserNoutbuk);
  showNoutbuk(aserNoutbuk)
}
btns[3].onclick=()=>{
  const aserNoutbuk=noutbuks.filter(noutbuk=>noutbuk.title==='asus')
  console.log(aserNoutbuk);
  showNoutbuk(aserNoutbuk)
}
btns[4].onclick=()=>{
  const aserNoutbuk=noutbuks.filter(noutbuk=>noutbuk.title==='DELL')
  console.log(aserNoutbuk);
  showNoutbuk(aserNoutbuk)
}
btns[5].onclick=()=>{
  const aserNoutbuk=noutbuks.filter(noutbuk=>noutbuk.title==='Lenovo')
  console.log(aserNoutbuk);
  showNoutbuk(aserNoutbuk)
}



// myAwesomeArray.filter(element=> element.name==='avatar')

input.onchange=()=>{
  console.log(input.value);
  const random=noutbuks.filter(noutbuk=>noutbuk.title===input.value)
  showNoutbuk(random)


}


const obj=noutbuks.filter(el=>el.title.toLowerCase()===input.value.toLowerCase())
if(obj.length>0){
  showNoutbuk(obj)
} else {
  // root.innerHTML='<img src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg"  />'
}


      


 