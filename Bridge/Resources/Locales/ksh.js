Bridge.merge(new System.Globalization.CultureInfo("ksh", true), {
    englishName: "Ripuarian",
    nativeName: "Kölsch",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "¤¤¤",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Su.","Mo.","Di.","Me.","Du.","Fr.","Sa."],
        abbreviatedMonthGenitiveNames: ["Jan","Fäb","Mäz","Apr","Mäi","Jun","Jul","Ouj","Säp","Okt","Nov","Dez",""],
        abbreviatedMonthNames: ["Jan.","Fäb.","Mäz.","Apr.","Mäi","Jun.","Jul.","Ouj.","Säp.","Okt.","Nov.","Dez.",""],
        amDesignator: "v.m.",
        dateSeparator: ". ",
        dayNames: ["Sunndaach","Moondaach","Dinnsdaach","Metwoch","Dunnersdaach","Friidaach","Samsdaach"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, 'dä' d. MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, 'dä' d. MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["Jannewa","Fäbrowa","Määz","Aprell","Mäi","Juuni","Juuli","Oujoß","Septämber","Oktoober","Novämber","Dezämber",""],
        monthNames: ["Jannewa","Fäbrowa","Määz","Aprell","Mäi","Juuni","Juuli","Oujoß","Septämber","Oktoober","Novämber","Dezämber",""],
        pmDesignator: "n.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d. M. yyyy",
        shortestDayNames: ["Su","Mo","Di","Me","Du","Fr","Sa"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});