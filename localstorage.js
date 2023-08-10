// Fungsi untuk membuat data baru
function createData(data) {
    // Mengambil data dari Local Storage (jika ada)
    let existingData = JSON.parse(localStorage.getItem('data')) || [];
    
    // Menambahkan data baru ke array
    existingData.push(data);
    
    // Menyimpan kembali data yang diperbarui ke Local Storage
    localStorage.setItem('data', JSON.stringify(existingData));
  }
  
  // Fungsi untuk membaca data
  function readData() {
    // Mengambil data dari Local Storage
    return JSON.parse(localStorage.getItem('data')) || [];
  }
  
  // Fungsi untuk memperbarui data
  function updateData(index, newData) {
    // Mengambil data dari Local Storage
    let existingData = JSON.parse(localStorage.getItem('data')) || [];
    
    // Memperbarui data dengan data baru berdasarkan indeks
    existingData[index] = newData;
    
    // Menyimpan kembali data yang diperbarui ke Local Storage
    localStorage.setItem('data', JSON.stringify(existingData));
  }
  
  // Fungsi untuk menghapus data
  function deleteData(index) {
    // Mengambil data dari Local Storage
    let existingData = JSON.parse(localStorage.getItem('data')) || [];
    
    // Menghapus data berdasarkan indeks
    existingData.splice(index, 1);
    
    // Menyimpan kembali data yang telah dihapus ke Local Storage
    localStorage.setItem('data', JSON.stringify(existingData));
  }
  
  // Contoh penggunaan CRUD
  
  // Membuat data baru
  createData({ id: 1, name: 'Contoh 1' });
  createData({ id: 2, name: 'Contoh 2' });
  
  // Membaca data
  console.log(readData());
  
  // Memperbarui data dengan indeks 0
  updateData(0, { id: 1, name: 'Data Terbaru' });
  
  // Membaca data setelah diperbarui
  console.log(readData());
  
  // Menghapus data dengan indeks 1
  deleteData(1);
  
  // Membaca data setelah dihapus
  console.log(readData());
  