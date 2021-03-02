const home = {
 template: `
<div class="text-center">
 <div class="text-white">
  <h2>Qr-Code Generator</h2>
  <b>Source Code : <a href="https://github.com/ricko-v/qrcode-vue">Disini</a></b>
  <br>
  <small>Made with
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
   </svg> <span>Ricko Veriyanto</span>
 </small>
 </div>
 <p class="pt-5">
  <input v-model="teks" type="text" class="form-control" placeholder="Masukan Teks">
  <small style="float:left" class="text-white mt-2 mb-2">Live Teks : {{ teks }}</small>
 </p>
 <canvas hidden id="qr"></canvas>
<br><br>
 <a download="QrCode.jpg" v-bind:href="source">
  <img v-if="lihat" class="img-thumbnail" v-bind:src="source">
 </a>
 <p v-if="lihat"><small class="text-warning">Tekan Gambar untuk mendownload</small></p>
</div>
`,
 data(){
  return {
   teks: '',
   source: '',
   lihat: false
  }
 },
 watch: {
  teks: function(val){
	let teks = val;
	if(teks == ''){
	 this.lihat = false;
	}
        this.lihat = true;
        var qr = new QRious({
          element: document.getElementById('qr'),
          value: teks,
	  background: "white",
	  level: 'H',
	  size: 300
        });
	this.source = qr.toDataURL('image/jpeg');
  }
 }
}
