# Product Management API

Ini adalah proyek API RESTful sederhana untuk mengelola data produk. Proyek ini dibangun menggunakan **Node.js** dan **Express.js**.

## 🚀 Fitur Utama
* **Create**: Menambahkan produk baru ke database.
* **Read**: Mengambil daftar semua produk atau detail satu produk berdasarkan ID.
* **Update**: Mengubah informasi produk yang ada.
* **Delete**: Menghapus produk dari sistem.

## 🛠️ Tech Stack
* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: [MySQL]
* **ORM/Query Builder**: [raw SQL]

## 📋 Prasyarat
Pastikan Anda sudah menginstal:
* Node.js (LTS version)
* NPM atau Yarn

## ⚙️ Cara Instalasi

1. **Clone repositori ini:**
   ```bash
   git clone [url-repositori-anda]
   cd [nama-folder-proyek]

2. **Install dependencies**
   ```bash
   npm install
   
3. **Install dependencies**
   ```bash
   npm install
   
4. **Jalankan aplikasi**
   ```bash
   npm run api-service

## 📡 API Endpoints

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `GET` | `/` | Mendapatkan semua data produk |
| `GET` | `/find?id=` | Mendapatkan detail produk berdasarkan ID |
| `POST` | `/` | Menambah produk baru |
| `PUT` | `/edit?id=` | Memperbarui data produk |
| `DELETE` | `/delete?id=` | Menghapus produk |

## 📡 Contoh Request Body (POST/PUT)

Gunakan format JSON berikut saat melakukan operasi `POST` (menambah data) atau `PUT` (memperbarui data) ke endpoint API:

```json
{
  "name": "Wireless Mechanical Keyboard",
  "description": "Keyboard mekanikal dengan koneksi Bluetooth 5.0",
  "price": 850000,
  "stock": 15
}

```

## Lisensi
Proyek ini bersifat open-source. Anda bebas untuk menggunakan, menyalin, memodifikasi, dan mendistribusikan kode ini untuk keperluan pembelajaran maupun pengembangan proyek pribadi.
