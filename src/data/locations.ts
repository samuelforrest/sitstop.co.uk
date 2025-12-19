export interface Location {
  id: string;
  name: string;
  address: string;
  town: string;
  email?: string;
  phone?: string;
  photoUrl: string;
  mapUrl: string;
}

export const locations: Location[] = [
  // BARNES
  {
    id: "barnes-bookshop",
    name: "Barnes Bookshop",
    address: "6 Church Road, Barnes, SW13 9HE",
    town: "Barnes",
    email: "books@barnesbookshop.com",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_7184.jpeg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=6+Church+Road+Barnes+SW13+9HE",
  },

  // CASTELNAU
  {
    id: "castelnau-library",
    name: "Castelnau Library",
    address: "75 Castelnau, Barnes, SW13 9RT",
    town: "Castelnau",
    email: "castelnau.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=75+Castelnau+Barnes+SW13+9RT",
  },

  // EAST SHEEN
  {
    id: "oso-arts",
    name: "OSO Arts Centre",
    address: "141 Sheen Lane, East Sheen, SW14 8LR",
    town: "East Sheen",
    email: "info@osoarts.org.uk",
    phone: "020 8876 9885",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-arts.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=141+Sheen+Lane+East+Sheen+SW14+8LR",
  },
  {
    id: "olympic-cinema",
    name: "Olympic Cinema",
    address: "117-119 Sheen Lane, East Sheen, SW14 8AE",
    town: "East Sheen",
    email: "boxoffice@olympiccinema.co.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-cinema.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=117-119+Sheen+Lane+East+Sheen+SW14+8AE",
  },
  {
    id: "age-uk-richmond",
    name: "Age UK Richmond",
    address: "17 Sheen Road, Richmond, TW9 1AD",
    town: "East Sheen",
    email: "info@ageukrichmond.org.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-charity.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=17+Sheen+Road+Richmond+TW9+1AD",
  },
  {
    id: "hewson-books",
    name: "Hewson Books",
    address: "233 Upper Richmond Road West, East Sheen, SW14 8QT",
    town: "East Sheen",
    email: "sheen@hewsonbooks.co.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-bookshop.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=233+Upper+Richmond+Road+West+East+Sheen+SW14+8QT",
  },
  {
    id: "east-sheen-library",
    name: "East Sheen Library",
    address: "8 Sheen Lane, East Sheen, SW14 8LP",
    town: "East Sheen",
    email: "eastsheen.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=8+Sheen+Lane+East+Sheen+SW14+8LP",
  },
  {
    id: "ginger-spice-florist",
    name: "Ginger and Spice Florist",
    address: "370 Upper Richmond Road West, East Sheen, SW14 7JU",
    town: "East Sheen",
    email: "contact@gingerandspiceflorist.com",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-florist.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=370+Upper+Richmond+Road+West+East+Sheen+SW14+7JU",
  },
  {
    id: "repeat-boutique",
    name: "Repeat Boutique",
    address: "1 Sheen Lane, East Sheen, SW14 8AB",
    town: "East Sheen",
    email: "repeat@spatetree.com",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-boutique.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1+Sheen+Lane+East+Sheen+SW14+8AB",
  },
  {
    id: "tolley-partners",
    name: "Tolley & Partners Estate Agents",
    address: "360 Upper Richmond Road West, East Sheen, SW14 7JU",
    town: "East Sheen",
    email: "info@tolleynpartners.com",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-estate.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=360+Upper+Richmond+Road+West+East+Sheen+SW14+7JU",
  },

  // HAM
  {
    id: "eye-care-opticians",
    name: "Eye Care Opticians",
    address: "213-215 Richmond Road, Ham, TW10 6AX",
    town: "Ham",
    email: "info@eyecareopticians.com",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-opticians.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=213-215+Richmond+Road+Ham+TW10+6AX",
  },
  {
    id: "ham-library",
    name: "Ham Library",
    address: "Ham Street, Ham, TW10 7HR",
    town: "Ham",
    email: "ham.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ham+Street+Ham+TW10+7HR",
  },
  {
    id: "mj-hardware",
    name: "M&J Hardware",
    address: "264 Richmond Road, Ham, TW10 6RB",
    town: "Ham",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-hardware.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=264+Richmond+Road+Ham+TW10+6RB",
  },
  {
    id: "chinos-cafe",
    name: "Chino's Cafe",
    address: "256-258 Richmond Road, Ham, TW10 6RB",
    town: "Ham",
    email: "chinoscafe@hotmail.co.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-cafe.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=256-258+Richmond+Road+Ham+TW10+6RB",
  },

  // HAMPTON
  {
    id: "hampton-library",
    name: "Hampton Library",
    address: "Rosehill, Hampton, TW12 2HA",
    town: "Hampton",
    email: "hampton.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rosehill+Hampton+TW12+2HA",
  },

  // HAMPTON HILL
  {
    id: "hampton-hill-library",
    name: "Hampton Hill Library",
    address: "68 High Street, Hampton Hill, TW12 1NY",
    town: "Hampton Hill",
    email: "hamptonhill.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=68+High+Street+Hampton+Hill+TW12+1NY",
  },
  {
    id: "hampton-hill-stationery",
    name: "Hampton Hill Stationery",
    address: "32 High Street, Hampton Hill, TW12 1PD",
    town: "Hampton Hill",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-stationery.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=32+High+Street+Hampton+Hill+TW12+1PD",
  },
  {
    id: "health-on-the-hill",
    name: "Health on the Hill Pharmacy",
    address: "74 High Street, Hampton Hill, TW12 1NY",
    town: "Hampton Hill",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-pharmacy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=74+High+Street+Hampton+Hill+TW12+1NY",
  },
  {
    id: "hill-pharmacy",
    name: "Hill Pharmacy",
    address: "70 High Street, Hampton Hill, TW12 1NY",
    town: "Hampton Hill",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-pharmacy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=70+High+Street+Hampton+Hill+TW12+1NY",
  },

  // HAMPTON WICK
  {
    id: "hampton-wick-library",
    name: "Hampton Wick Library",
    address: "High Street, Hampton Wick, KT1 4DA",
    town: "Hampton Wick",
    email: "hamptonwick.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=High+Street+Hampton+Wick+KT1+4DA",
  },

  // KEW
  {
    id: "avenue-club",
    name: "The Avenue Club",
    address: "11 Atwood Avenue, Kew, TW9 4ED",
    town: "Kew",
    email: "avenueclub@kewcommunitytrust.org.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-club.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11+Atwood+Avenue+Kew+TW9+4ED",
  },
  {
    id: "kew-library",
    name: "Kew Library",
    address: "106 North Road, Kew, TW9 4HJ",
    town: "Kew",
    email: "kew.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=106+North+Road+Kew+TW9+4HJ",
  },

  // RICHMOND
  {
    id: "orange-pekoe",
    name: "Orange Pekoe",
    address: "3 White Hart Lane, Richmond, TW9 1NU",
    town: "Richmond",
    phone: "020 3369 4327",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-cafe.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3+White+Hart+Lane+Richmond+TW9+1NU",
  },
  {
    id: "richmond-library",
    name: "Richmond Library",
    address: "Old Town Hall, Whittaker Avenue, Richmond, TW9 1TP",
    town: "Richmond",
    email: "richmond.library@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-library.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Old+Town+Hall+Whittaker+Avenue+Richmond+TW9+1TP",
  },
  {
    id: "richmond-adult-college",
    name: "Richmond Adult Community College",
    address: "Parkshot, Richmond, TW9 2RE",
    town: "Richmond",
    phone: "020 8332 1584",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-college.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Parkshot+Richmond+TW9+2RE",
  },
  {
    id: "richmond-information",
    name: "Richmond Information and Advice Centre",
    address: "Old Town Hall, Whittaker Avenue, Richmond, TW9 1TP",
    town: "Richmond",
    email: "information@richmond.gov.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-info.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Old+Town+Hall+Whittaker+Avenue+Richmond+TW9+1TP",
  },
  {
    id: "richmond-rehab",
    name: "Richmond Rehabilitation Centre",
    address: "3 Parkshot, Richmond, TW9 2RD",
    town: "Richmond",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-health.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3+Parkshot+Richmond+TW9+2RD",
  },
  {
    id: "vineyard-community",
    name: "Vineyard Community Centre",
    address: "1 Paradise Road, Richmond, TW9 1SB",
    town: "Richmond",
    email: "info@vineyardcommunity.org",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-community.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1+Paradise+Road+Richmond+TW9+1SB",
  },
  {
    id: "waitrose-richmond",
    name: "Waitrose Richmond",
    address: "Bessant Drive, Richmond, TW9 4AD",
    town: "Richmond",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-supermarket.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bessant+Drive+Richmond+TW9+4AD",
  },

  // TEDDINGTON
  {
    id: "cambrian-centre",
    name: "The Cambrian Centre",
    address: "19 Station Road, Teddington, TW11 9AA",
    town: "Teddington",
    email: "manager@cambriancentre.org",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-centre.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=19+Station+Road+Teddington+TW11+9AA",
  },

  // TWICKENHAM
  {
    id: "elleray-hall",
    name: "Elleray Hall",
    address: "21 Arragon Road, Twickenham, TW1 3NG",
    town: "Twickenham",
    email: "info@ellerayhall.org",
    phone: "020 8977 5509",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-hall.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=21+Arragon+Road+Twickenham+TW1+3NG",
  },
  {
    id: "richmond-aid",
    name: "Richmond Aid",
    address: "88 Hampton Road, Twickenham, TW2 5QS",
    town: "Twickenham",
    email: "info@richmondaid.org.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-charity.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=88+Hampton+Road+Twickenham+TW2+5QS",
  },
  {
    id: "stepping-on-out",
    name: "Stepping On Out",
    address: "17 Heath Road, Twickenham, TW1 4AW",
    town: "Twickenham",
    email: "office@SteppingonOut.org.uk",
    photoUrl:
      "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/placeholder-charity.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=17+Heath+Road+Twickenham+TW1+4AW",
  },
];

export const towns = Array.from(
  new Set(locations.map((loc) => loc.town))
).sort();
