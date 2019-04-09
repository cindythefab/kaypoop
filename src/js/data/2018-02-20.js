dataSetVersion = "2019-04-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Taeyeon",
    img: "TNc2jzr.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Naeyoung",
    img: "OurB7vW.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "N",
    img: "Y0Be4Vl.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Tiffany",
    img: "GIHPPur.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Krystal",
    img: "1LCiRhy.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Moonbin",
    img: "eDgHl1l.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Miyeon",
    img: "KY22QF6.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kyulkyung",
    img: "UVvNPNN.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mingyu",
    img: "qlq2iwe.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Rowoon",
    img: "vcVcZ77.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Luda",
    img: "QqXHDp8.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mina 01",
    img: "eutOYu5.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mina 02",
    img: "lSKo3Ay.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Luna",
    img: "Kj2fHHT.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Seulgi",
    img: "1aCoS85.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yuna",
    img: "CatYA9V.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yeeun",
    img: "Cc8V8eS.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Sunmi",
    img: "ljN7ATH.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Ryujin",
    img: "OXc1N2F.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yuqi",
    img: "fEkX7Ez.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Wonwoo",
    img: "HdCD4Ek.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yubin",
    img: "DrQWOrC.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Miya",
    img: "sl57eG2.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kihyun",
    img: "hIeGj2A.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kang Daniel",
    img: "SFjwJrO.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jeup",
    img: "r7L8cOv.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jennie",
    img: "xl09AFu.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jeonghwa",
    img: "d2MUiuw.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hani",
    img: "dnsMYmb.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Irene",
    img: "p0t2c1D.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Gikwang",
    img: "QjVGJvc.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Eunbin",
    img: "uDWDNJS.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Donghan",
    img: "DIiqRNt.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jisoo",
    img: "f54aMh1.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chungha",
    img: "4Jh1EG0.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Dawon",
    img: "0karCSu.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
 
  {
    name: "Suhan",
    img: "A1Zu83Y.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
