document.getElementById('lampada').addEventListener("click", function (){
  var imagem = document.getElementById('lampada').src;
  var lampadaDesligada = "https://lh3.googleusercontent.com/i_L_dPnbsn0qPd-_d8BE-3TTF6rVNKq863yY8zcZ_c_YYfglXGTHm2dmV0vvd-p-VCyVBfe12ccH0LI=w937-h885";
  var lampadaLigada = "https://lh3.googleusercontent.com/q12y6XWpVJ4oq3yRmL3dv1pYGQLdTlsoLRHfefc-bYuTw762_X56ESp0jO3JqcLxg-4Ygkx86C08Ojw=w937-h885";
  
  if(imagem === lampadaLigada){
    document.getElementById('lampada').src = lampadaDesligada;
  } else {
    document.getElementById('lampada').src = lampadaLigada;
  }
})