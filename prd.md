Berikut PRD lengkap untuk aplikasi To-Do List menggunakan React + Vite + Vanilla CSS.

# PRD — To-Do List App

## 1. Project Overview

### Nama Project

To-Do List App

### Deskripsi

Aplikasi To-Do List berbasis React + Vite yang digunakan untuk mencatat tugas harian. User dapat menambahkan tugas baru dan menghapus tugas yang sudah selesai menggunakan konsep Array State di React.

Project ini dibuat untuk melatih:

* useState
* Array of Objects
* Spread Operator (...)
* .filter()
* Event Handling
* Component Rendering

---

# 2. Goals

## Tujuan Utama

Membuat aplikasi pencatat tugas yang sederhana, modern, dan responsive.

## Tujuan Pembelajaran

User memahami:

* Cara menambah data ke array menggunakan Spread Operator
* Cara menghapus data menggunakan `.filter()`
* Cara rendering list menggunakan `.map()`
* Cara menggunakan state di React

---

# 3. Tech Stack

| Technology     | Usage            |
| -------------- | ---------------- |
| React          | Frontend Library |
| Vite           | Build Tool       |
| HTML5          | Structure        |
| CSS3           | Styling          |
| JavaScript ES6 | Logic            |

---

# 4. Features

## 4.1 Tambah Tugas

User dapat:

* Menulis tugas pada input field
* Menekan tombol Add
* Tugas otomatis muncul di daftar

### Logic

Menggunakan:

```js id="j7u1v5"
setTodos([...todos, newTodo])
```

---

## 4.2 Hapus Tugas

User dapat:

* Menghapus tugas dengan tombol Delete

### Logic

Menggunakan:

```js id="o8f4n3"
todos.filter((todo) => todo.id !== id)
```

---

## 4.3 Dynamic List Rendering

Daftar tugas ditampilkan menggunakan:

```jsx id="m9d2k1"
todos.map((todo) => (
  <TodoItem />
))
```

---

# 5. UI Requirements

## Design Style

* Clean
* Minimalist
* Modern
* Simple Productivity App

## Color Palette

| Color   | Usage           |
| ------- | --------------- |
| #0039c8 | Primary         |
| #ffffff | Background      |
| #adff01 | Accent          |
| #f5f5f5 | Card Background |

---

# 6. Folder Structure

```bash id="f2l9aa"
src/
│
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│
├── styles/
│   └── style.css
│
├── App.jsx
├── main.jsx
```

---

# 7. Component Requirements

## TodoForm.jsx

### Function

* Input tugas
* Tombol tambah tugas

### Props

| Props   | Type     |
| ------- | -------- |
| addTodo | function |

---

## TodoItem.jsx

### Function

* Menampilkan item tugas
* Tombol delete

### Props

| Props      | Type     |
| ---------- | -------- |
| todo       | object   |
| deleteTodo | function |

---

## TodoList.jsx

### Function

* Menampilkan semua daftar tugas

---

# 8. Data Structure

```js id="u4d7hh"
const todos = [
  {
    id: 1,
    text: "Belajar React"
  },
  {
    id: 2,
    text: "Mengerjakan tugas sekolah"
  }
]
```

---

# 9. UI Layout

```plaintext id="v1x2za"
-----------------------------
|      TO-DO LIST           |
|                           |
| [ Input Tugas ] [ Add ]   |
|                           |
| • Belajar React   [X]     |
| • Desain UI       [X]     |
| • Belajar CSS     [X]     |
-----------------------------
```

---

# 10. Functional Requirements

## User Can

* Menambah tugas baru
* Menghapus tugas
* Melihat daftar tugas realtime

---

# 11. Non Functional Requirements

* Responsive Design
* Fast Rendering
* Clean UI
* Reusable Components
* Organized Code

---

# 12. Development Steps

## Step 1

Create React Vite Project

```bash id="g6w0cb"
npm create vite@latest
```

## Step 2

Install Dependencies

```bash id="m0n3tx"
npm install
```

## Step 3

Run Development Server

```bash id="k9f2lp"
npm run dev
```

---

# 13. Success Criteria

Project dianggap berhasil jika:

✅ User dapat menambah tugas
✅ User dapat menghapus tugas
✅ Menggunakan Spread Operator (...)
✅ Menggunakan `.filter()`
✅ Responsive di mobile
✅ Menggunakan React + Vite
✅ Menggunakan Vanilla CSS

---

# 14. Example User Story

### User Story

Sebagai user, saya ingin mencatat tugas harian agar aktivitas saya lebih terorganisir.

---

# 15. Example Acceptance Criteria

✅ Input tugas berfungsi
✅ Tombol Add berfungsi
✅ Tombol Delete berfungsi
✅ List otomatis update
✅ Tidak ada error React
✅ Styling modern dan rapi
