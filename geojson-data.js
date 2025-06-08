const naturalTourism = [
  {
    name: "Kampung 3D Jatisampurna",
    lat: -6.335291,
    lng: 106.939917,
    description: "Kampung dengan lukisan 3D artistik di dinding rumah warga, cocok untuk spot foto unik.",
    opening_hours: "Setiap hari, 08:00 - 17:00",
    ticket_price: "Gratis",
    facilities: ["Spot foto", "Area jalan kaki", "Toilet"]
  },
  {
    name: "Hutan Kota Kranggan",
    lat: -6.346717,
    lng: 106.938130,
    description: "Ruang hijau alami yang sering dijadikan lokasi piknik warga sekitar.",
    opening_hours: "Setiap hari, 06:00 - 18:00",
    ticket_price: "Gratis",
    facilities: ["Area piknik", "Gazebo", "Toilet"]
  },

    {
      name: "Hutan Kota Patriot Bina Bangsa",
      lat: -6.241397,
      lng: 106.991751,
      description: "Ruang terbuka hijau dengan fasilitas olahraga dan rekreasi untuk keluarga.",
      opening_hours: "Setiap hari, 06:00 - 18:00",
      ticket_price: "Gratis",
      facilities: ["Jogging track", "Area bermain anak", "Gazebo", "Toilet"]
    },
    {
      name: "Taman Kota Bekasi",
      lat: -6.234900,
      lng: 106.994726,
      description: "Taman kota yang menjadi tempat rekreasi keluarga dan olahraga bagi warga Bekasi.",
      opening_hours: "Setiap hari, 06:00 - 18:00",
      ticket_price: "Gratis",
      facilities: ["Area bermain anak", "Jogging track", "Tempat duduk", "Toilet"]
    },
    {
      name: "Situ Rawa Gede",
      lat: -6.262790,
      lng: 106.990059,
      description: "Danau alami yang menjadi salah satu sumber air dan destinasi wisata di Bekasi.",
      opening_hours: "Senin - Kamis: 09:00 - 18:30, Sabtu - Minggu: 07:00 - 20:00, Jumat: Tutup",
      ticket_price: "Rp10.000",
      facilities: ["Perahu bebek", "Area berkemah", "Warung makan", "Toilet"]
    },
    {
      name: "Situ Rawa Tembaga",
      lat: -6.284542,
      lng: 107.000823,
      description: "Danau yang menjadi bagian dari sistem pengairan dan destinasi wisata di Bekasi.",
      opening_hours: "Setiap hari, 08:00 - 18:00",
      ticket_price: "Gratis",
      facilities: ["Area memancing", "Warung makan", "Toilet"]
    },
    {
      name: "Taman Alun-Alun Kota Bekasi",
      lat: -6.235814,
      lng: 106.992196,
      description: "Pusat aktivitas masyarakat dengan taman yang asri dan berbagai fasilitas rekreasi.",
      opening_hours: "Setiap hari, 06:00 - 18:00",
      ticket_price: "Gratis",
      facilities: ["Jogging track", "Area bermain anak", "Gazebo", "Toilet"]
    },
    {
      name: "Curug Parigi",
      lat: -6.345000,
      lng: 106.981000,
      description: "Air terjun mini yang sering disebut sebagai 'Niagara Mini' di Bekasi.",
      opening_hours: "Setiap hari, 06:00 - 17:00",
      ticket_price: "Rp2.000",
      facilities: ["Area parkir", "Warung makan", "Toilet"]
    }
  ];

  
  const recreationTourism = [
    {
      name: "Taman Kranggan Permai",
      lat: -6.346200,
      lng: 106.947100,
      description: "Taman bermain umum dengan fasilitas olahraga ringan dan area anak.",
      opening_hours: "Setiap hari, 06:00 - 18:00",
      ticket_price: "Gratis",
      facilities: ["Lapangan basket", "Playground", "Toilet"]
    },
    {
      name: "Funpark Cikeas Riverside",
      lat: -6.374229,
      lng: 106.921012,
      description: "Taman bermain dan wisata keluarga dengan akses ke pinggir sungai Cikeas.",
      opening_hours: "Sabtu - Minggu, 08:00 - 17:00",
      ticket_price: "Rp15.000",
      facilities: ["Area bermain", "Sungai", "Toilet", "Warung"]
    },
    {
      name: "Trans Snow World Juanda",
      lat: -6.244532,
      lng: 107.000677,
      description: "Wahana salju indoor pertama di Bekasi, dengan suasana musim dingin sepanjang tahun.",
      opening_hours: "Setiap hari, 11:00 - 19:00",
      ticket_price: "Rp100.000 - Rp160.000",
      facilities: ["Area bermain salju", "Ski", "Kereta luncur", "Restoran", "Toilet"]
    },

    {
      name: "Transera Waterpark",
      lat: -6.214935,
      lng: 106.973888,
      description: "Waterpark dengan berbagai wahana air dan kolam renang untuk segala usia.",
      opening_hours: "Setiap hari, 10:00 - 17:00",
      ticket_price: "Rp50.000 - Rp100.000",
      facilities: ["Kolam renang", "Seluncuran air", "Area bermain anak", "Food court", "Toilet"]
    },
    {
      name: "Funworld Summarecon Mall",
      lat: -6.225960,
      lng: 106.999556,
      description: "Pusat permainan dan hiburan keluarga di dalam Summarecon Mall Bekasi.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Bervariasi per permainan",
      facilities: ["Permainan arcade", "Area bermain anak", "Food court", "Toilet"]
    },
    {
      name: "Funworld Grand Galaxy Park",
      lat: -6.265891,
      lng: 106.974861,
      description: "Arena bermain anak-anak dan keluarga di Grand Galaxy Park Mall.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Bervariasi per permainan",
      facilities: ["Permainan arcade", "Area bermain anak", "Food court", "Toilet"]
    },
    {
      name: "Timezone Metropolitan Mall",
      lat: -6.244876,
      lng: 106.988811,
      description: "Pusat permainan arcade dan hiburan keluarga di Metropolitan Mall.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Bervariasi per permainan",
      facilities: ["Permainan arcade", "Area bermain anak", "Food court", "Toilet"]
    },

    {
      name: "Taman Rusa Kemang Pratama",
      lat: -6.2700,
      lng: 107.0400,
      description: "Taman dengan rusa tutul yang dapat dilihat oleh wisatawan, cocok untuk edukasi anak-anak.",
      opening_hours: "Setiap hari, 07:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area edukasi", "Tempat duduk", "Toilet", "Taman terbuka"]
    },
    {
      name: "Curug Parigi",
      lat: -6.3250,
      lng: 107.0300,
      description: "Air terjun alami yang menawarkan pemandangan indah dan suasana tenang.",
      opening_hours: "Setiap hari, 06:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Pemandangan alam", "Spot foto", "Area parkir", "Toilet"]
    },
    
    {
      name: "Timezone Revo Town",
      lat: -6.222173,
      lng: 107.002110,
      description: "Arena permainan modern dan arcade di Revo Town.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Bervariasi per permainan",
      facilities: ["Permainan arcade", "Area bermain anak", "Food court", "Toilet"]
    },
    {
      name: "Kidszona Galaxy Mall",
      lat: -6.265891,
      lng: 106.974861,
      description: "Area bermain khusus untuk anak-anak di Galaxy Mall.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Bervariasi per permainan",
      facilities: ["Area bermain anak", "Food court", "Toilet"]
    },
    {
      name: "FunPark Grand Metropolitan",
      lat: -6.244876,
      lng: 106.988811,
      description: "Taman hiburan keluarga dengan berbagai wahana menarik.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Bervariasi per permainan",
      facilities: ["Permainan arcade", "Area bermain anak", "Food court", "Toilet"]
    }
  ];

  
  const shoppingTourism = [
   
    {
      name: "Summarecon Mall Bekasi",
      lat: -6.226055,
      lng: 106.999632,
      description: "Mal terbesar di Bekasi dengan berbagai brand lokal dan internasional serta tempat kuliner.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Gratis",
      facilities: ["Toko ritel", "Restoran", "Bioskop", "Area bermain anak", "Toilet"]
    },
    {
      name: "Grand Metropolitan Mall",
      lat: -6.244876,
      lng: 106.988811,
      description: "Pusat perbelanjaan modern dengan konsep one-stop shopping di Bekasi.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Gratis",
      facilities: ["Toko ritel", "Restoran", "Bioskop", "Area bermain anak", "Toilet"]
    },
    {
      name: "Revo Town",
      lat: -6.222173,
      lng: 107.002110,
      description: "Pusat lifestyle dan kuliner dengan konsep open air di Bekasi.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Gratis",
      facilities: ["Toko ritel", "Restoran", "Area bermain anak", "Toilet"]
    },
    {
      name: "Grand Galaxy Park Mall",
      lat: -6.265891,
      lng: 106.974861,
      description: "Mall dengan konsep family shopping dan entertainment di kawasan Grand Galaxy.",
      opening_hours: "Setiap hari, 10:00 - 22:00",
      ticket_price: "Gratis",
      facilities: ["Toko ritel", "Restoran", "Bioskop", "Area bermain anak", "Toilet"]
  }

  ];

  const religiousTourism = [
    {
      name: "Masjid Raya Kranggan",
      lat: -6.343787,
      lng: 106.943167,
      description: "Masjid besar dan aktif yang menjadi pusat ibadah masyarakat Kranggan dan sekitarnya.",
      opening_hours: "24 jam",
      ticket_price: "Gratis",
      facilities: ["Tempat wudhu", "Toilet", "Area parkir"]
    },
    {
      name: "Masjid Agung Al-Barkah",
      lat: -6.235814,
      lng: 106.992196,
      description: "Masjid tertua di Bekasi yang berdiri sejak 1890, dengan arsitektur khas Timur Tengah dan kapasitas hingga 10.000 jamaah.",
      opening_hours: "24 jam",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat wudhu", "Toilet", "Taman dengan pohon kurma"]
    },

    {
      name: "Go! Wet Waterpark",
      lat: -6.2769,
      lng: 107.0485,
      description: "Waterpark terbesar di Kota Bekasi dengan berbagai wahana air untuk semua usia.",
      opening_hours: "Setiap hari, 09:00 - 17:00",
      ticket_price: "Rp75.000 - Rp150.000",
      facilities: ["Kolam arus", "Seluncuran", "Food court", "Toilet"]
    },
    {
      name: "Columbus Waterpark",
      lat: -6.2475,
      lng: 107.0123,
      description: "Taman air dengan berbagai seluncuran dan kolam renang untuk keluarga.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Rp30.000 - Rp60.000",
      facilities: ["Kolam renang", "Area bermain air", "Kantin", "Toilet"]
    },
    {
      name: "Venetian Water Carnaval",
      lat: -6.2001,
      lng: 107.0003,
      description: "Waterboom dengan konsep Venesia yang menarik dan cocok untuk rekreasi keluarga.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Rp35.000 - Rp75.000",
      facilities: ["Wahana air", "Taman tema", "Toilet", "Area parkir"]
    },
    {
      name: "OHANA Waterpark",
      lat: -6.3100,
      lng: 106.9800,
      description: "Kolam renang bertema Hawaii dengan berbagai wahana air untuk keluarga.",
      opening_hours: "Setiap hari, 09:00 - 17:00",
      ticket_price: "Rp40.000 - Rp85.000",
      facilities: ["Kolam anak", "Food court", "Seluncuran", "Toilet"]
    },
    {
      name: "Kolam Renang Taman Harapan Baru (THB)",
      lat: -6.1772,
      lng: 106.9765,
      description: "Kolam renang indoor dengan berbagai seluncuran, cocok untuk semua usia.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Rp25.000 - Rp50.000",
      facilities: ["Kolam dewasa", "Kolam anak", "Toilet", "Kantin"]
    },    
    {
      name: "Klenteng Hok Lay Kiong",
      lat: -6.236000,
      lng: 106.990600,
      description: "Klenteng tertua di Bekasi yang telah berusia lebih dari 300 tahun, menjadi tempat ibadah umat Konghucu.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat ibadah", "Toilet"]
    },
    {
      name: "Pura Agung Tirta Bhuana",
      lat: -6.244500,
      lng: 106.987800,
      description: "Pura umat Hindu yang dibangun pada 1988-1989, dengan arsitektur khas Bali dan suasana yang tenang.",
      opening_hours: "Setiap hari, 08:00 - 18:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat ibadah", "Toilet"]
    },
    {
      name: "Masjid Jami Al-Hidayah",
      lat: -6.214500,
      lng: 106.985600,
      description: "Masjid bersejarah yang dibangun pada 1935 dan pernah digunakan sebagai markas pejuang Hizbullah.",
      opening_hours: "Setiap hari, 24 jam",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat wudhu", "Toilet"]
    },
    {
      name: "Makam KH. Noer Alie",
      lat: -6.203800,
      lng: 107.013200,
      description: "Makam pahlawan nasional dan ulama besar Bekasi, KH. Noer Alie, yang sering dikunjungi peziarah.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat ziarah", "Toilet"]
    },
    {
      name: "Masjid Raya Al-Azhar Summarecon",
      lat: -6.226500,
      lng: 106.999800,
      description: "Masjid modern dengan desain terinspirasi dari Ka'bah, dirancang oleh Ridwan Kamil.",
      opening_hours: "Setiap hari, 04:00 - 22:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat wudhu", "Toilet", "Area belajar"]
    },
    {
      name: "Situs Kramat Batok",
      lat: -6.234000,
      lng: 107.000500,
      description: "Situs makam Kiai Gabid dari abad ke-17 yang menjadi tempat ziarah dan telah diakui sebagai cagar budaya.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat ziarah", "Toilet"]
    },

    {
      name: "Makam Mbah Keneng",
      lat: -6.250000,
      lng: 107.020000,
      description: "Makam tokoh penyebar Islam di Bekasi yang sering dikunjungi untuk berziarah.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Tempat ziarah", "Toilet"]
    },
    {
      name: "Pura Agung Tirta Bhuana",
      lat: -6.2845,
      lng: 106.9440,
      description: "Rumah ibadah umat Hindu dengan arsitektur Bali yang menarik, juga menjadi destinasi religi dan budaya.",
      opening_hours: "Setiap hari, 07:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Tempat ibadah", "Area parkir", "Toilet", "Taman"]
    }
    
  ];

  

  const historicalTourism = [
    {
      name: "Situs Sumur Bandung",
      lat: -6.348295,
      lng: 106.933832,
      description: "Situs sejarah berupa sumur tua yang dipercaya punya nilai budaya di Jatikarya.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area ziarah", "Toilet", "Tempat duduk"]
    },
    {
      name: "Monumen Perjuangan Rakyat",
      lat: -6.235814,
      lng: 106.992196,
      description: "Monumen yang dibangun pada 1955 untuk memperingati perjuangan rakyat Bekasi dalam merebut kemerdekaan.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Taman", "Toilet"]
    },
    {
      name: "Gedung Papak",
      lat: -6.238000,
      lng: 106.998500,
      description: "Bangunan cagar budaya bergaya art deco yang dulunya digunakan sebagai markas perjuangan rakyat Bekasi.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Ruang pameran", "Toilet"]
    },
    {
      name: "Monumen Kali Bekasi",
      lat: -6.238500,
      lng: 106.999000,
      description: "Monumen yang memperingati peristiwa pembantaian tentara Jepang oleh rakyat Bekasi pada 1945.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Taman", "Toilet"]
    },
    {
      name: "Tugu Agus Salim",
      lat: -6.234500,
      lng: 107.000000,
      description: "Tugu yang menjadi simbol perjuangan rakyat Bekasi melawan penjajah, dengan ornamen senjata di sekelilingnya.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Taman", "Toilet"]
    },
    {
      name: "Gedung Juang 45 Bekasi",
      lat: -6.234000,
      lng: 107.000800,
      description: "Gedung bersejarah yang kini menjadi Museum Bekasi, menampilkan koleksi sejarah perjuangan rakyat Bekasi.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Museum", "Toilet"]
    },
    {
      name: "Saung Ranggon",
      lat: -6.250000,
      lng: 107.010000,
      description: "Bangunan tradisional yang menjadi saksi sejarah perkembangan budaya dan kehidupan masyarakat Bekasi.",
      opening_hours: "Setiap hari, 08:00 - 17:00",
      ticket_price: "Gratis",
      facilities: ["Area parkir", "Saung", "Toilet"]
    }
  ];
  