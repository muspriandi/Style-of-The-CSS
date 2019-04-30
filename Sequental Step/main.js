// Inisialisasi
let i=0;
let indexArray ='';
let isiArray ='';
let tabelArray = document.querySelector("#tabel-array");
let isi = ["Matahari","Merkurius","Venus","Bumi","Mars","Jupiter","Saturnus","Uranus","Neptunus"];

// Mengisi Tabel Header (th) dengan Index Array dan Tabel Data (td) dengan variabel 'isi'
for(i=0 ; i<isi.length; i++)
{
  indexArray = indexArray + '<th>'+ i +'</th>';
  isiArray   = isiArray +'<td>'+ isi[i] +'</td>';
}
tabelArray.innerHTML = '<tr>'+ indexArray +'</tr> <tr>'+ isiArray +'</tr>';

(function animasi()
{
	i = 0;
	let hapusClass = 0;
	let keterangan = document.querySelector("#keterangan");
	let th = document.querySelectorAll("th");
	let td = document.querySelectorAll("td");
  
	let langkah = function()
	{
		if(i > 0)
		{
      // Mencari angka sebelum angka variabel i, misal : i = 3 maka nilai hapusClass = 2
      hapusClass = i - 1;
      
      // Hapus class 'active' pada tabel berdasarkan variabel 'hapusClass'
			td[hapusClass].classList.remove('active');
			th[hapusClass].classList.remove('active');
		}
    
    // Reset nilai i
		if(i == isi.length)
		{
			i = 0;
		}
		
    // Tambah class 'active' pada tabel berdasarkan nilai variabel 'i'
		td[i].classList.add('active');
		th[i].classList.add('active');
		
		keterangan.innerHTML = 'Array Index ' + i + ' = ' + isi[i];
		i++;
	};
  // Set selang waktu animasi
	setInterval(langkah,1000);
})();