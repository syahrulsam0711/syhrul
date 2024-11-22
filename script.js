document.getElementById("bookingForm").addEventListener("input", function() {
    // Mendapatkan nilai input
    const checkinDate = document.getElementById("checkin").value;
    const checkoutDate = document.getElementById("checkout").value;
    const roomType = document.getElementById("room").value;
    
    // Jika tanggal check-in dan check-out terisi
    if (checkinDate && checkoutDate) {
        // Menghitung jumlah hari menginap
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        const timeDifference = checkout - checkin;
        const daysStayed = timeDifference / (1000 * 3600 * 24); // Menghitung durasi dalam hari
        
        if (daysStayed > 0) {
            // Tentukan harga per malam berdasarkan tipe kamar
            let pricePerNight = 0;
            if (roomType === "standar") {
                pricePerNight = 500000;
            } else if (roomType === "dvip") {
                pricePerNight = 800000;
            } else if (roomType === "vvip") {
                pricePerNight = 1000000;
            }

            // Hitung total harga
            const totalPrice = pricePerNight * daysStayed;
            document.getElementById("totalPrice").value = `Rp ${totalPrice.toLocaleString()}`;
        } else {
            // Jika tanggal checkout lebih kecil dari checkin
            document.getElementById("totalPrice").value = "Tanggal check-out tidak valid.";
        }
    } else {
        document.getElementById("totalPrice").value = "";
    }
});
