var buttonSubmit = document.getElementById("kirim")

buttonSubmit.addEventListener('click', function(){
    var nama = $('#nama').val()
    var email = $('#email').val()
    var pesan = $('#pesan').val()
    ajaxEmail(nama,email,pesan)
  }
)

async function ajaxEmail(nama, email, pesan){
  return new Promise((resolve, reject)=>{
    $("#spinner-div").show(); //Load button clicked show spinner
    $.ajax({
      url:'http://127.0.0.1:8080/bsu/Website/Development/phpemail/mail.php',
      data:{nama:nama,email:email,pesan:pesan},
      type:'post',
      dataType:'json',
        success: function (data) {
          $("#spinner-div").hide(); //Request is complete so hide spinner
          var result;
          let pattern = /true/i;
          console.log(data['responseText'])
          if(typeof data == "object"){
          data = JSON.stringify(data)
          result = data.match(pattern);
          }else{
           result = data.match(pattern);
          }

          if(result==null){
            alert('Pesan Gagal Terkirim !')
            
          } else if(result[0]=='true'){
            alert('Pesan Berhasil Terkirim !')
          }else{
            alert("Terjadi Kesalahan dalam pengiriman, silahkan coba lagi !")
          }
        }
        ,
        error: function (data) {
          $("#spinner-div").hide(); //Request is complete so hide spinner
          console.log(data)
          var result;
          let pattern = /true/i;
          if(typeof data == "object"){
          data = JSON.stringify(data)
          result = data.match(pattern);
          }else{
           result = data.match(pattern);
          }

          if(result==null){
            alert('Pesan Gagal Terkirim !')
            
          } else if(result[0]=='true'){
            alert('Pesan Berhasil Terkirim !')
          }else{
            alert("Terjadi Kesalahan dalam pengiriman, silahkan coba lagi !")
          }
        },
        complete: function () {
          $("#spinner-div").hide(); //Request is complete so hide spinner
        }
      });
    
  })
}
 

