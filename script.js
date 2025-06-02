function submitForm() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const wa = document.getElementById('wa').value;
  const tanggal = document.getElementById('tanggal').value;
  const kategori = document.getElementById('kategori').value;
  const ukuran = document.getElementById('ukuran').value;
  const setuju = document.getElementById('setuju').checked;

  const genderEls = document.getElementsByName('gender');
  let gender = '';
  for (let g of genderEls) {
    if (g.checked) {
      gender = g.value;
      break;
    }
  }

  if (!nama || !email || !wa || !gender || !tanggal || !setuju) {
    alert('⚠️ Harap lengkapi semua data dengan benar!');
    return;
  }

  // Tampilkan alert data
  alert(`
✅ Pendaftaran Berhasil!

👤 Nama: ${nama}
📧 Email: ${email}
📱 WhatsApp: ${wa}
👫 Gender: ${gender}
🏁 Kategori: ${kategori}
👕 Ukuran Baju: ${ukuran}
📅 Tanggal Event: ${tanggal}
  `);

  // Tampilkan ke dalam div output
  document.getElementById('output').innerHTML = `
    <h2 class="font-bold text-lg mb-2">✅ Data Pendaftaran</h2>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>WhatsApp:</strong> ${wa}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Kategori Lomba:</strong> ${kategori}</p>
    <p><strong>Ukuran Baju:</strong> ${ukuran}</p>
    <p><strong>Tanggal Event:</strong> ${tanggal}</p>
  `;
  document.getElementById('output').classList.remove('hidden');
}
