const countries = {
    Albania: { code: 'AL', label: 'Albania', phone: '355' },
    Algeria: { code: 'DZ', label: 'Algeria', phone: '213' },
    Andorra: { code: 'AD', label: 'Andorra', phone: '376' },
    Angola: { code: 'AO', label: 'Angola', phone: '244' },
    AntiguaAndBarbuda: { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    Argentina: { code: 'AR', label: 'Argentina', phone: '54' },
    Armenia: { code: 'AM', label: 'Armenia', phone: '374' },
    Australia: { code: 'AU', label: 'Australia', phone: '61' },
    Austria: { code: 'AT', label: 'Austria', phone: '43' },
    Azerbaijan: { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    Bahamas: { code: 'BS', label: 'Bahamas', phone: '1-242' },
    Bahrain: { code: 'BH', label: 'Bahrain', phone: '973' },
    Bangladesh: { code: 'BD', label: 'Bangladesh', phone: '880' },
    Barbados: { code: 'BB', label: 'Barbados', phone: '1-246' },
    Belarus: { code: 'BY', label: 'Belarus', phone: '375' },
    Belgium: { code: 'BE', label: 'Belgium', phone: '32' },
    Belize: { code: 'BZ', label: 'Belize', phone: '501' },
    Benin: { code: 'BJ', label: 'Benin', phone: '229' },
    Bhutan: { code: 'BT', label: 'Bhutan', phone: '975' },
    Bolivia: { code: 'BO', label: 'Bolivia', phone: '591' },
    BosniaAndHerzegovina: { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
    Botswana: { code: 'BW', label: 'Botswana', phone: '267' },
    Brazil: { code: 'BR', label: 'Brazil', phone: '55' },
    Brunei: { code: 'BN', label: 'Brunei', phone: '673' },
    Bulgaria: { code: 'BG', label: 'Bulgaria', phone: '359' },
    BurkinaFaso: { code: 'BF', label: 'Burkina Faso', phone: '226' },
    Burundi: { code: 'BI', label: 'Burundi', phone: '257' },
    CaboVerde: { code: 'CV', label: 'Cabo Verde', phone: '238' },
    Cambodia: { code: 'KH', label: 'Cambodia', phone: '855' },
    Cameroon: { code: 'CM', label: 'Cameroon', phone: '237' },
    Canada: { code: 'CA', label: 'Canada', phone: '1' },
    CentralAfricanRepublic: { code: 'CF', label: 'Central African Republic', phone: '236' },
    Chad: { code: 'TD', label: 'Chad', phone: '235' },
    Chile: { code: 'CL', label: 'Chile', phone: '56' },
    China: { code: 'CN', label: 'China', phone: '86' },
    Colombia: { code: 'CO', label: 'Colombia', phone: '57' },
    Comoros: { code: 'KM', label: 'Comoros', phone: '269' },
    Congo: { code: 'CG', label: 'Congo', phone: '242' },
    CostaRica: { code: 'CR', label: 'Costa Rica', phone: '506' },
    Croatia: { code: 'HR', label: 'Croatia', phone: '385' },
    Cuba: { code: 'CU', label: 'Cuba', phone: '53' },
    Cyprus: { code: 'CY', label: 'Cyprus', phone: '357' },
    CzechRepublic: { code: 'CZ', label: 'Czech Republic', phone: '420' },
    DemocraticRepublicOfCongo: { code: 'CD', label: 'Democratic Republic of the Congo', phone: '243' },
    Denmark: { code: 'DK', label: 'Denmark', phone: '45' },
    Djibouti: { code: 'DJ', label: 'Djibouti', phone: '253' },
    Dominica: { code: 'DM', label: 'Dominica', phone: '1-767' },
    DominicanRepublic: { code: 'DO', label: 'Dominican Republic', phone: '1-809' },
    Ecuador: { code: 'EC', label: 'Ecuador', phone: '593' },
    Egypt: { code: 'EG', label: 'Egypt', phone: '20' },
    ElSalvador: { code: 'SV', label: 'El Salvador', phone: '503' },
    EquatorialGuinea: { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    Eritrea: { code: 'ER', label: 'Eritrea', phone: '291' },
    Estonia: { code: 'EE', label: 'Estonia', phone: '372' },
    Eswatini: { code: 'SZ', label: 'Eswatini', phone: '268' },
    Ethiopia: { code: 'ET', label: 'Ethiopia', phone: '251' },
    Fiji: { code: 'FJ', label: 'Fiji', phone: '679' },
    Finland: { code: 'FI', label: 'Finland', phone: '358' },
    France: { code: 'FR', label: 'France', phone: '33' },
    Gabon: { code: 'GA', label: 'Gabon', phone: '241' },
    Gambia: { code: 'GM', label: 'Gambia', phone: '220' },
    Georgia: { code: 'GE', label: 'Georgia', phone: '995' },
    Germany: { code: 'DE', label: 'Germany', phone: '49' },
    Ghana: { code: 'GH', label: 'Ghana', phone: '233' },
    Greece: { code: 'GR', label: 'Greece', phone: '30' },
    Grenada: { code: 'GD', label: 'Grenada', phone: '1-473' },
    Guatemala: { code: 'GT', label: 'Guatemala', phone: '502' },
    Guinea: { code: 'GN', label: 'Guinea', phone: '224' },
    GuineaBissau: { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    Guyana: { code: 'GY', label: 'Guyana', phone: '592' },
    Haiti: { code: 'HT', label: 'Haiti', phone: '509' },
    Honduras: { code: 'HN', label: 'Honduras', phone: '504' },
    Hungary: { code: 'HU', label: 'Hungary', phone: '36' },
    Iceland: { code: 'IS', label: 'Iceland', phone: '354' },
    India: { code: 'IN', label: 'India', phone: '91' },
    Indonesia: { code: 'ID', label: 'Indonesia', phone: '62' },
    Iran: { code: 'IR', label: 'Iran', phone: '98' },
    Iraq: { code: 'IQ', label: 'Iraq', phone: '964' },
    Ireland: { code: 'IE', label: 'Ireland', phone: '353' },
    Israel: { code: 'IL', label: 'Israel', phone: '972' },
    Italy: { code: 'IT', label: 'Italy', phone: '39' },
    Jamaica: { code: 'JM', label: 'Jamaica', phone: '1-876' },
    Japan: { code: 'JP', label: 'Japan', phone: '81' },
    Jordan: { code: 'JO', label: 'Jordan', phone: '962' },
    Kazakhstan: { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    Kenya: { code: 'KE', label: 'Kenya', phone: '254' },
    Kiribati: { code: 'KI', label: 'Kiribati', phone: '686' },
    NorthKorea: { code: 'KP', label: 'North Korea', phone: '850' },
    SouthKorea: { code: 'KR', label: 'South Korea', phone: '82' },
    Kosovo: { code: 'XK', label: 'Kosovo', phone: '383' },
    Kuwait: { code: 'KW', label: 'Kuwait', phone: '965' },
    Kyrgyzstan: { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    Laos: { code: 'LA', label: 'Laos', phone: '856' },
    Latvia: { code: 'LV', label: 'Latvia', phone: '371' },
    Lebanon: { code: 'LB', label: 'Lebanon', phone: '961' },
    Lesotho: { code: 'LS', label: 'Lesotho', phone: '266' },
    Liberia: { code: 'LR', label: 'Liberia', phone: '231' },
    Libya: { code: 'LY', label: 'Libya', phone: '218' },
    Liechtenstein: { code: 'LI', label: 'Liechtenstein', phone: '423' },
    Lithuania: { code: 'LT', label: 'Lithuania', phone: '370' },
    Luxembourg: { code: 'LU', label: 'Luxembourg', phone: '352' },
    Madagascar: { code: 'MG', label: 'Madagascar', phone: '261' },
    Malawi: { code: 'MW', label: 'Malawi', phone: '265' },
    Malaysia: { code: 'MY', label: 'Malaysia', phone: '60' },
    Maldives: { code: 'MV', label: 'Maldives', phone: '960' },
    Mali: { code: 'ML', label: 'Mali', phone: '223' },
    Malta: { code: 'MT', label: 'Malta', phone: '356' },
    MarshallIslands: { code: 'MH', label: 'Marshall Islands', phone: '692' },
    Mauritania: { code: 'MR', label: 'Mauritania', phone: '222' },
    Mauritius: { code: 'MU', label: 'Mauritius', phone: '230' },
    Mexico: { code: 'MX', label: 'Mexico', phone: '52' },
    Micronesia: { code: 'FM', label: 'Micronesia', phone: '691' },
    Moldova: { code: 'MD', label: 'Moldova', phone: '373' },
    Monaco: { code: 'MC', label: 'Monaco', phone: '377' },
    Mongolia: { code: 'MN', label: 'Mongolia', phone: '976' },
    Montenegro: { code: 'ME', label: 'Montenegro', phone: '382' },
    Morocco: { code: 'MA', label: 'Morocco', phone: '212' },
    Mozambique: { code: 'MZ', label: 'Mozambique', phone: '258' },
    Myanmar: { code: 'MM', label: 'Myanmar', phone: '95' },
    Namibia: { code: 'NA', label: 'Namibia', phone: '264' },
    Nauru: { code: 'NR', label: 'Nauru', phone: '674' },
    Nepal: { code: 'NP', label: 'Nepal', phone: '977' },
    Netherlands: { code: 'NL', label: 'Netherlands', phone: '31' },
    NewZealand: { code: 'NZ', label: 'New Zealand', phone: '64' },
    Nicaragua: { code: 'NI', label: 'Nicaragua', phone: '505' },
    Niger: { code: 'NE', label: 'Niger', phone: '227' },
    Nigeria: { code: 'NG', label: 'Nigeria', phone: '234' },
    NorthMacedonia: { code: 'MK', label: 'North Macedonia', phone: '389' },
    Norway: { code: 'NO', label: 'Norway', phone: '47' },
    Oman: { code: 'OM', label: 'Oman', phone: '968' },
    Pakistan: { code: 'PK', label: 'Pakistan', phone: '92' },
    Palau: { code: 'PW', label: 'Palau', phone: '680' },
    Panama: { code: 'PA', label: 'Panama', phone: '507' },
    PapuaNewGuinea: { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    Paraguay: { code: 'PY', label: 'Paraguay', phone: '595' },
    Peru: { code: 'PE', label: 'Peru', phone: '51' },
    Philippines: { code: 'PH', label: 'Philippines', phone: '63' },
    Poland: { code: 'PL', label: 'Poland', phone: '48' },
    Portugal: { code: 'PT', label: 'Portugal', phone: '351' },
    Qatar: { code: 'QA', label: 'Qatar', phone: '974' },
    Romania: { code: 'RO', label: 'Romania', phone: '40' },
    Russia: { code: 'RU', label: 'Russia', phone: '7' },
    Rwanda: { code: 'RW', label: 'Rwanda', phone: '250' },
    SaintKittsAndNevis: { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869' },
    SaintLucia: { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    SaintVincentAndTheGrenadines: { code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784' },
    Samoa: { code: 'WS', label: 'Samoa', phone: '685' },
    SanMarino: { code: 'SM', label: 'San Marino', phone: '378' },
    SaoTomeAndPrincipe: { code: 'ST', label: 'Sao Tome and Principe', phone: '239' },
    SaudiArabia: { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    Senegal: { code: 'SN', label: 'Senegal', phone: '221' },
    Serbia: { code: 'RS', label: 'Serbia', phone: '381' },
    Seychelles: { code: 'SC', label: 'Seychelles', phone: '248' },
    SierraLeone: { code: 'SL', label: 'Sierra Leone', phone: '232' },
    Singapore: { code: 'SG', label: 'Singapore', phone: '65' },
    Slovakia: { code: 'SK', label: 'Slovakia', phone: '421' },
    Slovenia: { code: 'SI', label: 'Slovenia', phone: '386' },
    SolomonIslands: { code: 'SB', label: 'Solomon Islands', phone: '677' },
    Somalia: { code: 'SO', label: 'Somalia', phone: '252' },
    SouthAfrica: { code: 'ZA', label: 'South Africa', phone: '27' },
    SouthSudan: { code: 'SS', label: 'South Sudan', phone: '211' },
    Spain: { code: 'ES', label: 'Spain', phone: '34' },
    SriLanka: { code: 'LK', label: 'Sri Lanka', phone: '94' },
    Sudan: { code: 'SD', label: 'Sudan', phone: '249' },
    Suriname: { code: 'SR', label: 'Suriname', phone: '597' },
    Sweden: { code: 'SE', label: 'Sweden', phone: '46' },
    Switzerland: { code: 'CH', label: 'Switzerland', phone: '41' },
    Syria: { code: 'SY', label: 'Syria', phone: '963' },
    Taiwan: { code: 'TW', label: 'Taiwan', phone: '886' },
    Tajikistan: { code: 'TJ', label: 'Tajikistan', phone: '992' },
    Tanzania: { code: 'TZ', label: 'Tanzania', phone: '255' },
    Thailand: { code: 'TH', label: 'Thailand', phone: '66' },
    Togo: { code: 'TG', label: 'Togo', phone: '228' },
    Tonga: { code: 'TO', label: 'Tonga', phone: '676' },
    TrinidadAndTobago: { code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },
    Tunisia: { code: 'TN', label: 'Tunisia', phone: '216' },
    Turkey: { code: 'TR', label: 'Turkey', phone: '90' },
    Turkmenistan: { code: 'TM', label: 'Turkmenistan', phone: '993' },
    Tuvalu: { code: 'TV', label: 'Tuvalu', phone: '688' },
    Uganda: { code: 'UG', label: 'Uganda', phone: '256' },
    Ukraine: { code: 'UA', label: 'Ukraine', phone: '380' },
    UnitedArabEmirates: { code: 'AE', label: 'United Arab Emirates', phone: '971' },
    UnitedKingdom: { code: 'GB', label: 'United Kingdom', phone: '44' },
    UnitedStates: { code: 'US', label: 'United States', phone: '1' },
    Uruguay: { code: 'UY', label: 'Uruguay', phone: '598' },
    Uzbekistan: { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    Vanuatu: { code: 'VU', label: 'Vanuatu', phone: '678' },
    VaticanCity: { code: 'VA', label: 'Vatican City', phone: '39' },
    Venezuela: { code: 'VE', label: 'Venezuela', phone: '58' },
    Vietnam: { code: 'VN', label: 'Vietnam', phone: '84' },
    Yemen: { code: 'YE', label: 'Yemen', phone: '967' },
    Zambia: { code: 'ZM', label: 'Zambia', phone: '260' },
    Zimbabwe: { code: 'ZW', label: 'Zimbabwe', phone: '263' }
  };
  
  export default countries;