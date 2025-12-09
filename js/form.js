import { formatPesan } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formKontak");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let valid = true;

            // Nama harus diisi
            const nama = document.getElementById("nama");
            const errorNama = document.getElementById("errorNama");
            if (nama.value.trim() === "") {
                errorNama.textContent = "Nama wajib diisi.";
                valid = false;
            } else {
                errorNama.textContent = "";
            }

            // Email harus valid dan domain harus @gmail.com
            const email = document.getElementById("email");
            const errorEmail = document.getElementById("errorEmail");
            const emailPattern = /^[^ ]+@gmail\.com$/i;
            if (!emailPattern.test(email.value)) {
                errorEmail.textContent = "Email harus @gmail.com dan format benar.";
                valid = false;
            } else {
                errorEmail.textContent = "";
            }

            // Kategori harus dipilih
            const kategori = document.getElementById("kategori");
            const errorKategori = document.getElementById("errorKategori");
            if (kategori.value === "") {
                errorKategori.textContent = "Pilih salah satu kategori.";
                valid = false;
            } else {
                errorKategori.textContent = "";
            }

            // Pesan minimal 10 karakter
            const pesan = document.getElementById("pesan");
            const errorPesan = document.getElementById("errorPesan");
            if (pesan.value.trim().length < 10) {
                errorPesan.textContent = "Pesan minimal 10 karakter.";
                valid = false;
            } else {
                errorPesan.textContent = "";
            }

            if (valid) {
                const hasil = formatPesan(nama.value, kategori.value, pesan.value);
                alert(hasil);
                form.reset();
            }
        });

        const namaInput = document.getElementById("nama");
        if (namaInput) {
            namaInput.addEventListener("blur", function () {
                const errorNama = document.getElementById("errorNama");
                if (this.value.trim() === "") {
                    errorNama.textContent = "Nama wajib diisi.";
                } else {
                    errorNama.textContent = "";
                }
            });
        }

        const pesanInput = document.getElementById("pesan");
        if (pesanInput) {
            pesanInput.addEventListener("input", function () {
                const errorPesan = document.getElementById("errorPesan");
                if (this.value.trim().length < 10) {
                    errorPesan.textContent = "Pesan minimal 10 karakter.";
                } else {
                    errorPesan.textContent = "";
                }
            });
        }
    }

    const langgananCheckbox = document.getElementById("langganan");
    if (langgananCheckbox) {
        langgananCheckbox.addEventListener("change", function () {
            if (this.checked) {
                alert("Terima kasih telah berlangganan newsletter!");
            }
        });
    }

    // Logic for produk page
    const produkInput = document.getElementById("produkInput");
    if (produkInput) {
        const tambahBtn = document.getElementById("tambahBtn");
        const daftarProduk = document.getElementById("daftarProduk");
        const previewProduk = document.getElementById("previewProduk");
        const temaSelect = document.getElementById("temaSelect");

        if (tambahBtn) {
            tambahBtn.addEventListener("click", function (e) {
                e.preventDefault();

                const namaProduk = produkInput.value.trim();
                if (namaProduk !== "") {
                    const li = document.createElement("li");
                    li.textContent = namaProduk;

                    li.addEventListener("mouseover", () => {
                        li.style.backgroundColor = "#e0e0e0";
                    });
                    li.addEventListener("mouseout", () => {
                        li.style.backgroundColor = "";
                    });

                    li.addEventListener("dblclick", () => {
                        if (confirm("Yakin ingin menghapus produk ini?")) {
                            li.remove();
                        }
                    });

                    if (daftarProduk) {
                        daftarProduk.appendChild(li);
                    }
                    produkInput.value = "";
                    if (previewProduk) {
                        previewProduk.textContent = "";
                    }
                }
            });
        }

        produkInput.addEventListener("keyup", function () {
            if (previewProduk) {
                previewProduk.textContent = produkInput.value;
            }
        });

        if (temaSelect) {
            temaSelect.addEventListener("change", function () {
                document.body.style.backgroundColor = temaSelect.value;
            });
        }
    }
});