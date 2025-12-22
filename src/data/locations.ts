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
  // BARNES - NEW TOWN

  {
    // CONFIRMED
    id: "barnes-bookshop",
    name: "Barnes Bookshop",
    address: "98 Church Road, SW13 0DQ",
    town: "Barnes",
    email: "books@barnesbookshop.com",
    phone: "020 8741 0786",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694722d4003da9c74b61/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzIyZGIxNDljZDNkMzdkYTYiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzIyZDQwMDNkYTljNzRiNjEiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjEyIiwiaWF0IjoxNzY2MjY5NjU5fQ.ikt7cor8q6a8nbkdISxC6tt3h0ObEl64S1zybxHNtaw",
    mapUrl: "https://maps.app.goo.gl/PB8wHDkpbmA1me5b8",
  },
  {
    // CONFIRMED
    id: "bca-rose-house",
    name: "BCA Rose House",
    address: "70 Barnes High Street, SW13 9LD",
    town: "Barnes",
    phone: "020 8878 2359",
    email: "info@barnes-ca.org",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694720f40011bc7352b0/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzIwZjhkMjQ4OTMwMDkxMTIiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzIwZjQwMDExYmM3MzUyYjAiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjExIiwiaWF0IjoxNzY2MjY5MTc2fQ.7vXoQ4SoubagErPwDsfJf9u95XgYD8ggnx5gEkGWajA",
    mapUrl: "https://maps.app.goo.gl/yTCKKhHbBSBunVLa7",
  },
  {
    // CONFIRMED
    id: "barnes-green-social-centre",
    name: "Barnes Green Social Centre",
    address: "Church Road, SW13 9HE",
    town: "Barnes",
    email: "janet.eaton@ageukrichmond.org.uk",
    phone: "020 8876 2377",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/6947200700258412c060/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzIwMGM0MjlhNmFkOWM5NjciLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzIwMDcwMDI1ODQxMmMwNjAiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjEwIiwiaWF0IjoxNzY2MjY4OTQwfQ.6mfg-l0x5INXoAKNejMwdMjmpb-r7CniuUBVLwAfQGY",
    mapUrl: "https://maps.app.goo.gl/PHu2PKBM2j5dhACP9",
  },
  {
    // CONFIRMED
    id: "castelnau-community-centre",
    name: "Castelnau Community Centre",
    address: "7 Stillingfleet Rd, SW13 9AQ",
    town: "Barnes",
    email: "info@castelnaucentreproject.co.uk",
    phone: "020 8741 0909",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69471e290023f97ef3e2/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzFlMzE2ZGU1Njg5ZmQ4MDQiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzFlMjkwMDIzZjk3ZWYzZTIiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjkiLCJpYXQiOjE3NjYyNjg0NjV9.NPE9cXK7GMOFJp_A4tLHZ98KKJEgA66NUpONzrxH0m8",
    mapUrl: "https://maps.app.goo.gl/QSPGo6tBoEhP23vp7",
  },
  {
    // CONFIRMED
    id: "castelnau-library",
    name: "Castelnau Library",
    address: "75 Castelnau, SW13 9RT",
    town: "Barnes",
    email: "castelnau.library@richmond.gov.uk",
    phone: "020 8734 3350",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69471cab0035793f4bb5/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzFjYjBlNzE4YTcyNDVmOWIiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzFjYWIwMDM1NzkzZjRiYjUiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjgiLCJpYXQiOjE3NjYyNjgwODB9.dXNYupkwuUCZe0plx1TskN8rcbslLbFV3z4wlwifVNY",
    mapUrl: "https://maps.app.goo.gl/yzZp7UQuVsyre8ZL8",
  },
  {
    // CONFIRMED
    id: "cook-barnes",
    name: "COOK",
    address: "50 Barnes High Street, SW13 9LN",
    town: "Barnes",
    email: "feedback@cookfood.net",
    phone: "020 8392 2060",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69471bfc00027fe593b9/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzFjMDIxZTA2YmZmMGZkNTQiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzFiZmMwMDAyN2ZlNTkzYjkiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjYiLCJpYXQiOjE3NjYyNjc5MDZ9.cpag6THt4haGaA-4VCVa5gOUoKLAy5FWkbseJWC_gnw",
    mapUrl: "https://maps.app.goo.gl/hBpnRQNTV8ZQk1k68",
  },
  {
    // CONFIRMED
    id: "mail-boxes-etc-barnes",
    name: "Mail Boxes etc",
    address: "1 Rocks Lane, SW13 0DB",
    town: "Barnes",
    phone: "020 8876 4734",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69472381000b5c07d939/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzIzODYxMWQ3NWVjZDkxNTQiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzIzODEwMDBiNWMwN2Q5MzkiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjEzIiwiaWF0IjoxNzY2MjY5ODMwfQ.2fBnww29bv3u0WfrMkhQHAdbYKtrDeMHKRGKS3Cqzuo",
    mapUrl: "https://maps.app.goo.gl/zScMctnRrXDMyNTH8",
  },
  {
    // CONFIRMED
    id: "marys-living-giving-shop-barnes",
    name: "Mary's Living & Giving Shop",
    address: "64 Church Rd, SW13 0DQ",
    town: "Barnes",
    phone: "020 8741 9041",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69471a09002fece9c8a8/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzFhMGUzZDA3YzE5Yzg2ZWIiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzFhMDkwMDJmZWNlOWM4YTgiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjQiLCJpYXQiOjE3NjYyNjc0MDZ9.-qGZ5HBgNIz3ORCUGyeOPLz90r62AbczSzMnP679Brc",
    mapUrl: "https://maps.app.goo.gl/ZY9ycjojNX33LZYaA",
  },
  {
    // CONFIRMED
    id: "marks-and-spencers",
    name: "M&S Foodhall",
    address: "28-29 High Street, SW13 9LW",
    town: "Barnes",
    phone: "020 3285 6291",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694945ad002abcc9957a/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTQ1YjNkN2Q1ZDllNzQyMmYiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTQ1YWQwMDJhYmNjOTk1N2EiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjI0IiwiaWF0IjoxNzY2NDA5NjUxfQ.JcvVE7_PWlq9AuLuaM1A61RV81Trca-2-yIyS-DPVDQ",
    mapUrl: "https://maps.app.goo.gl/2ptbXWJRgvtqb8ce9",
  },
  {
    // CONFIRMED
    id: "old-sorting-office",
    name: "The Old Sorting Office",
    address: "49 Station Road, SW13 0LF",
    town: "Barnes",
    email: "info@osoarts.org.uk",
    phone: "020 8876 9885",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69472482002f7b330967/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzI0OGI5ZTA1MjdiNDNkMTAiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzI0ODIwMDJmN2IzMzA5NjciLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjE0IiwiaWF0IjoxNzY2MjcwMDkxfQ.KPLQvqm0dbSgB13gmJf8NIfEqS8RlVT7zqp4XurjC1I",
    mapUrl: "https://maps.app.goo.gl/gid3ejUg1xj8zPWt8",
  },
  {
    // CONFIRMED
    id: "olympic-cinema",
    name: "The Olympic Cinema",
    address: "117-123 Church Road, SW13 9HL",
    town: "Barnes",
    email: "boxoffice@olympiccinema.co.uk",
    phone: "020 8912 5161",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69471acf0029e968b692/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzFhZDQ4ZmZjMjhkZGEwNDgiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzFhY2YwMDI5ZTk2OGI2OTIiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjUiLCJpYXQiOjE3NjYyNjc2MDR9.icaQo8juDgmWiIBCsbWaUmcJ7KOQy9_2pEJ2qmYCDJk",
    mapUrl: "https://maps.app.goo.gl/478gVbgQmQaFpTaK6",
  },

  // EAST SHEEN - NEW TOWN

  {
    id: "age-uk",
    name: "Age UK",
    address: "301 Sheen Lane, SW14 8LS",
    town: "East Sheen",
    email: "info@ageukrichmond.org.uk",
    phone: "020 8878 3625",
    photoUrl: "",
    mapUrl: "",
  },
  {
    // CONFIRMED
    id: "chubb-butchers",
    name: "Chubb Butchers",
    address: "350 U Richmond Rd W, SW14 5JT",
    town: "East Sheen",
    phone: "020 8876 2440",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694932c6001f29b0c176/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTMyY2ZhNDQ0N2MyNzdmZjYiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTMyYzYwMDFmMjliMGMxNzYiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjIxIiwiaWF0IjoxNzY2NDA0ODE1fQ.CKollx2tGOB4gwUCCdtEF0sp-Cl4v4RKNF-lOEF_cm4",
    mapUrl: "https://maps.app.goo.gl/yVmMJ7L2DGUgqP6Z7",
  },
  {
    // CONFIRMED
    id: "cook-east-sheen",
    name: "COOK",
    address: "395 U Richmond Rd W, SW14 7NX",
    town: "East Sheen",
    phone: "020 8166 9776",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694947ab0039f8e926d8/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTQ3YjE3OTdhODg3MDZmOTUiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTQ3YWIwMDM5ZjhlOTI2ZDgiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjI1IiwiaWF0IjoxNzY2NDEwMTYxfQ.-jH59UfZMq6u2m5Nr7v08YmW9FTbw5ebtF2K1laknMw",
    mapUrl: "https://maps.app.goo.gl/oZjsVoNmgZYvJa1A9",
  },
  {
    // CONFIRMED
    id: "sheen-bookshop",
    name: "The Sheen Bookshop",
    address: "375 U Richmond Rd W, SW14 7NX",
    town: "East Sheen",
    email: "sheen@hewsonbooks.co.uk",
    phone: "020 8876 1717",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/6949483e00392d39fd2d/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTQ4NDZjZTUyM2QyNDA5YzQiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTQ4M2UwMDM5MmQzOWZkMmQiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjI2IiwiaWF0IjoxNzY2NDEwMzEwfQ.iP6t9ot9d07lPaQwX0kFV9rW5D0fukYC3grSkUDVY5Q",
    mapUrl: "https://maps.app.goo.gl/z2rJrqzZ8dKycNbH8",
  },
  {
    // CONFIRMED
    id: "east-sheen-library",
    name: "East Sheen Library",
    address: "Sheen Lane, SW14 8LP",
    town: "East Sheen",
    email: "libraries@richmond.gov.uk",
    phone: "020 8734 3337",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/6949490b002678384e5f/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTQ5MWExNTJmZmUzYTNmNzAiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTQ5MGIwMDI2NzgzODRlNWYiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjI3IiwiaWF0IjoxNzY2NDEwNTIyfQ.EFb56gE2GtiDZ3MqZKn_xc2YuuLsKI6Ym4QYtkeDpM4",
    mapUrl: "https://maps.app.goo.gl/bT1vcyJZGW3Au5339",
  },
  {
    // CONFIRMED
    id: "ginger-spice-florist",
    name: "Ginger & Spice Florist",
    address: "4 Grande Parade, SW14 7PS",
    town: "East Sheen",
    email: "contact@gingerandspiceflorist.com",
    phone: "020 8876 0955",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694949e700368fd00ab0/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTQ5ZWUxYzdiN2UyMzU4ZWQiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTQ5ZTcwMDM2OGZkMDBhYjAiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjI4IiwiaWF0IjoxNzY2NDEwNzM0fQ.bXW3GKPb7rtn69yIhwnZGzG9GkQqaclHFk2SOvdFiLU",
    mapUrl: "https://maps.app.goo.gl/hXd7WAg5CRh6TTKe9",
  },
  {
    id: "holmes-daughters",
    name: "Holmes and Daughters",
    address: "",
    town: "East Sheen",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "natures-perk",
    name: "Nature's Perk",
    address: "",
    town: "East Sheen",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "poppys",
    name: "Poppys",
    address: "",
    town: "East Sheen",
    photoUrl: "",
    mapUrl: "",
  },
  {
    // CONFIRMED
    id: "spatetree-pharmacy",
    name: "Spatetree Pharmacy",
    address: "113 Sheen Lane, SW14 8AE",
    town: "East Sheen",
    email: "repeat@spatetree.com",
    phone: "020 8255 1717",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69493399003788f71322/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTMzOWUzODE1MTU4MmVkOWYiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTMzOTkwMDM3ODhmNzEzMjIiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjIyIiwiaWF0IjoxNzY2NDA1MDIyfQ.GNkfszbZzIjfz6ySmfD6bXVIvjk4cqGbD4gONCiHu68",
    mapUrl: "https://maps.app.goo.gl/19GvDupWEY1Tc4K47",
  },
  {
    // CONFIRMED
    id: "tolley-partners-opticians",
    name: "Tolley & Partners Opticians",
    address: "300 U Richmond Rd W, SW14 7NX",
    town: "East Sheen",
    email: "info@tolleynpartners.com",
    phone: "020 8878 3415",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69493972003821d235d1/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTM5ODE1ZmU2MDk3NGVhMmYiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTM5NzIwMDM4MjFkMjM1ZDEiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjIzIiwiaWF0IjoxNzY2NDA2NTI5fQ.LS65rc8evudkKkxmaxFmzMt9sLuipks6UPxHjs7dYhc",
    mapUrl: "https://maps.app.goo.gl/1fWiVkuMFmrs8zCF8",
  },
  {
    id: "waitrose-east-sheen",
    name: "Waitrose",
    address: "292 U Richmond Rd W, SW14 7JG",
    town: "East Sheen",
    phone: "020 8878 4792",
    photoUrl: "",
    mapUrl: "",
  },

  // EAST TWICKENHAM
  {
    id: "charles-harry-pharmacy",
    name: "Charles Harry Pharmacy",
    address: "336 Richmond Road, TW1 2DX",
    town: "East Twickenham",
    phone: "020 8892 1846",
    photoUrl: "",
    mapUrl: "",
  },

  // HAM
  {
    // CONFIRMED
    id: "eye-care-opticians",
    name: "Eye Care Opticians",
    address: "307 Richmond Road, KT2 5QU",
    town: "Ham",
    email: "info@eyecareopticians.com",
    phone: "020 8549 0331",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69472a7b000714a8a6bd/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzJhODA4ZDcxMzM2OTQ1ODAiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzJhN2IwMDA3MTRhOGE2YmQiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjE4IiwiaWF0IjoxNzY2MjcxNjE2fQ.KzUqVZ5N5i3SrCPgyZMzROvyihF8GI_nqUS39xsEPdc",
    mapUrl: "https://maps.app.goo.gl/hvg9aqqvLkyzRxRK8",
  },
  {
    // CONFIRMED
    id: "ham-food-wine",
    name: "Ham Food and Wine",
    address: "10 Ashburnham Rd, TW10 7NF",
    town: "Ham",
    phone: "020 8940 3462",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/69493106000947b6e70b/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTMxMGMwZTkwZjE3YzYyNTAiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTMxMDYwMDA5NDdiNmU3MGIiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjE5IiwiaWF0IjoxNzY2NDA0MzY0fQ.Z1F6nps-uAd0rJOFE1UfvzH8fHBEyM46lstgT3Msv8g",
    mapUrl: "https://maps.app.goo.gl/3Sh1boU9CMXaqsFU9",
  },
  {
    // CONFIRMED
    id: "ham-library",
    name: "Ham Library",
    address: "Ham Street, TW10 7HR",
    town: "Ham",
    email: "ham.library@richmond.gov.uk",
    phone: "020 8734 3354",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694931ca00277448856e/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0OTMxZDA4Njc4ZDY5NWUxODkiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0OTMxY2EwMDI3NzQ0ODg1NmUiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjIwIiwiaWF0IjoxNzY2NDA0NTYwfQ._aRQqyNrH-hq6qaISBwpRdADC1Q1gLV7TSZcWx92aBc",
    mapUrl: "https://maps.app.goo.gl/UMsuzpvyY7mwwb6F9",
  },
  {
    // CONFIRMED
    id: "kanset-pharmacy",
    name: "Kanset Pharmacy",
    address: "177 Ashburnham Road, TW10 7NR",
    town: "Ham",
    phone: "020 8948 0601",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694727410038ab7a70e4/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzI3NDg0MDU3OTdhZGEzOGEiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzI3NDEwMDM4YWI3YTcwZTQiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjE1IiwiaWF0IjoxNzY2MjcwNzkyfQ.1IzANxUnu4TfKV32y2KnKgE5D-VFzlfgmnNXOPZs8F8",
    mapUrl: "https://maps.app.goo.gl/hSTicC2PBXwz5zDc7",
  },
  {
    // CONFIRMED
    id: "mj-hardware",
    name: "M & J Hardware",
    address: "Parkleys Prde, U Ham Rd, TW10 5LF",
    town: "Ham",
    phone: "020 8546 4449",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/694728ef002e6954eb5a/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzI4ZjgxMTFlMzJlZTJmMDUiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzI4ZWYwMDJlNjk1NGViNWEiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjE2IiwiaWF0IjoxNzY2MjcxMjI0fQ.m1eHrmfiOQZRYfmj-DVQVBIwEsvKhmg2pZF6o30x_l4",
    mapUrl: "https://maps.app.goo.gl/BV7obGBM7ktQtbA46",
  },
  {
    // CONFIRMED
    id: "pharmacare",
    name: "Pharmacare",
    address: "12-14 Back Lane, TW10 7LF",
    town: "Ham",
    phone: "020 8940 7918",
    photoUrl:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6943bea6001ca08820dd/files/6947299a00012aa6f37f/view?project=storage&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk0NzI5OWZjYWUwNTYwZDA5MzkiLCJyZXNvdXJjZUlkIjoiNjk0M2JlYTYwMDFjYTA4ODIwZGQ6Njk0NzI5OWEwMDAxMmFhNmYzN2YiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjU1NTk5OjE3IiwiaWF0IjoxNzY2MjcxMzkxfQ.Kok-iKnZQ8DnHehcvd0xY5A3peNb1--9a113TuJUmtI",
    mapUrl: "https://maps.app.goo.gl/dhMZto86tM5Fce3Z6",
  },

  // HAMPTON - NEW TOWN

  {
    id: "chinos-cafe",
    name: "Chinos Café",
    address: "82 Station Road, TW12 2AX",
    town: "Hampton",
    email: "chinoscafe@hotmail.co.uk",
    phone: "020 8979 2996",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "greenwood-centre",
    name: "Greenwood Centre",
    address: "1a School Road, TW12 1QL",
    town: "Hampton",
    phone: "020 8979 9662",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "hampton-library",
    name: "Hampton Library",
    address: "Rosehill, TW12 2AB",
    town: "Hampton",
    email: "hampton.library@richmond.gov.uk",
    phone: "020 8734 3347",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "jolly-coopers-pub",
    name: "Jolly Coopers pub",
    address: "",
    town: "Hampton",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "linden-hall",
    name: "Linden Hall",
    address: "",
    town: "Hampton",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "marinis-fish-chips",
    name: "Marini's Fish & Chips",
    address: "",
    town: "Hampton",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "syzygy-hairdressers",
    name: "Syzygy Hairdressers",
    address: "33 Ashley Road, TW12 2JA",
    town: "Hampton",
    phone: "020 8979 5916",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "white-house-community-centre",
    name: "White House Community Centre",
    address: "",
    town: "Hampton",
    photoUrl: "",
    mapUrl: "",
  },

  // HAMPTON HILL
  {
    id: "hampton-hill-library",
    name: "Hampton Hill Library",
    address: "68 High Street, TW12 1NY",
    town: "Hampton Hill",
    email: "hamptonhill.library@richmond.gov.uk",
    phone: "020 8734 3320",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "hampton-hill-stationery",
    name: "Hampton Hill Stationery",
    address: "30 High Street, TW12 1PD",
    town: "Hampton Hill",
    phone: "020 8943 4381",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "health-on-the-hill",
    name: "Health on the Hill",
    address: "62 High Street, TW12 1PD",
    town: "Hampton Hill",
    phone: "020 8977 2539",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "hill-pharmacy",
    name: "Hill Pharmacy",
    address: "173B High Street, TW12 1NL",
    town: "Hampton Hill",
    phone: "020 8979 9084",
    photoUrl: "",
    mapUrl: "",
  },

  // HAMPTON WICK
  {
    id: "hampton-wick-library",
    name: "Hampton Wick Library",
    address: "Bennet Close, KT1 4AT",
    town: "Hampton Wick",
    email: "hamptonwick.library@richmond.gov.uk",
    phone: "020 8734 3358",
    photoUrl: "",
    mapUrl: "",
  },

  // KEW
  {
    id: "avenue-centre",
    name: "The Avenue Centre",
    address: "St. Luke's in The Avenue, TW9 2AJ",
    town: "Kew",
    email: "avenueclub@kewcommunitytrust.org.uk",
    phone: "020 8948 8807",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "kew-bookshop",
    name: "Kew Bookshop",
    address: "",
    town: "Kew",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "kew-library",
    name: "Kew Library",
    address: "106 North Road, TW9 4HJ",
    town: "Kew",
    email: "kew.library@richmond.gov.uk",
    phone: "020 8734 3352",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "kitten-to-cat",
    name: "Kitten to Cat",
    address: "297 Sandycombe Road, TW9 3LU",
    town: "Kew",
    email: "info@kittentocat.com",
    phone: "020 8940 0014",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "marys-living-giving-shop-kew",
    name: "Mary's Living & Giving Shop",
    address: "",
    town: "Kew",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "squires-newsagent",
    name: "Squires newsagent",
    address: "",
    town: "Kew",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "trindle-stores",
    name: "Trindle Stores",
    address: "",
    town: "Kew",
    photoUrl: "",
    mapUrl: "",
  },

  // MORTLAKE
  {
    id: "mortlake-community-centre",
    name: "Mortlake Community Centre",
    address: "",
    town: "Mortlake",
    photoUrl: "",
    mapUrl: "",
  },

  // RICHMOND
  {
    id: "danielli",
    name: "Danielli",
    address: "",
    town: "Richmond",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "home-selling-corporate-letting",
    name: "Home Selling Corporate Letting Co",
    address: "",
    town: "Richmond",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "john-d-wood",
    name: "John D Wood (Estate Agents)",
    address: "31 Sheen Road, TW9 1AD",
    town: "Richmond",
    phone: "020 3369 4327",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "richmond-library",
    name: "Richmond Library",
    address: "Little Green, TW9 1QL",
    town: "Richmond",
    email: "richmond.library@richmond.gov.uk",
    phone: "020 8734 3330",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "ms-richmond",
    name: "M&S",
    address: "",
    town: "Richmond",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "marys-living-giving-shop-richmond",
    name: "Mary's Living & Giving Shop",
    address: "29 The Green, TW9 1LX",
    town: "Richmond",
    phone: "020 8332 1584",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "richmond-pharmacy",
    name: "Richmond Pharmacy",
    address: "82-86 Sheen Road, TW9 1UF",
    town: "Richmond",
    email: "sr@richmondpharmacy.org.uk",
    phone: "020 8940 3930",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "richmond-reference-library",
    name: "Richmond Reference Library",
    address: "Old Town Hall, Whittaker Ave, TW9 1TP",
    town: "Richmond",
    email: "information@richmond.gov.uk",
    phone: "020 8734 3308",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "richmond-rehabilitation-unit",
    name: "Richmond Rehabilitation Unit",
    address: "22 Evelyn Road, TW9 2TF",
    town: "Richmond",
    phone: "020 8614 7350",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "st-john-divine-church",
    name: "St John the Divine Church",
    address: "Kew Road, TW9 2NA",
    town: "Richmond",
    phone: "020 8892 3690",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "st-mary-magdalen-church",
    name: "St Mary Magdalen Church",
    address: "Paradise Road, TW9 1SN",
    town: "Richmond",
    phone: "020 8940 0362",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "vineyard-boutique",
    name: "Vineyard Boutique",
    address: "Paradise Road, TW9 1SN",
    town: "Richmond",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "vineyard-community-centre",
    name: "Vineyard Community Centre",
    address: "The Vineyard, TW10 6AQ",
    town: "Richmond",
    email: "info@vineyardcommunity.org",
    phone: "020 8439 9735",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "waitrose-richmond",
    name: "Waitrose",
    address: "10 Sheen Road, TW9 1AE",
    town: "Richmond",
    phone: "020 8948 6288",
    photoUrl: "",
    mapUrl: "",
  },

  // RICHMOND HILL
  {
    id: "cambrian-centre",
    name: "Cambrian Centre",
    address: "1 Grove Road, TW10 6SN",
    town: "Richmond Hill",
    email: "manager@cambriancentre.org",
    phone: "020 8948 3351",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "st-matthias-church",
    name: "St. Matthias Church",
    address: "Friars Stile Road, TW10 6LS",
    town: "Richmond Hill",
    phone: "020 8940 7462",
    photoUrl: "",
    mapUrl: "",
  },

  // ST MARGARETS
  {
    id: "tesco-st-margarets",
    name: "Tesco",
    address: "",
    town: "St Margarets",
    photoUrl: "",
    mapUrl: "",
  },

  // TEDDINGTON
  {
    id: "cook-teddington",
    name: "COOK",
    address: "156 High Street, TW11 8HZ",
    town: "Teddington",
    phone: "020 8977 7223",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "elleray-hall",
    name: "Elleray Hall",
    address: "Elleray Road, TW11 0HG",
    town: "Teddington",
    email: "info@ellerayhall.org",
    phone: "020 8977 0549",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "er-kirby-pharmacy",
    name: "E & R Kirby Pharmacy",
    address: "53 High Street, TW11 8HD",
    town: "Teddington",
    phone: "020 8977 5509",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "marys-living-giving-shop-teddington",
    name: "Mary's Living & Giving Shop",
    address: "93 High Street, TW11 8HG",
    town: "Teddington",
    phone: "020 8977 0680",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "richmond-aid",
    name: "Richmond AID",
    address: "4 Waldegrave Road, TW11 8HT",
    town: "Teddington",
    email: "info@richmondaid.org.uk",
    phone: "020 8831 6070",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "stepping-on-out",
    name: "Stepping on Out",
    address: "7 The Causeway, TW11 0HA",
    town: "Teddington",
    email: "office@SteppingonOut.org.uk",
    phone: "020 8977 8042",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "teddington-library",
    name: "Teddington Library",
    address: "Waldegrave Road, TW11 8NY",
    town: "Teddington",
    email: "teddington.library@richmond.gov.uk",
    phone: "020 8734 3304",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "post-office-teddington",
    name: "The Post Office",
    address: "89 High Street, TW11 8HG",
    town: "Teddington",
    phone: "020 8973 1859",
    photoUrl: "",
    mapUrl: "",
  },

  // TWICKENHAM
  {
    id: "blue-bird-care",
    name: "Blue Bird Care",
    address: "15 Lion Road, TW1 4JH",
    town: "Twickenham",
    email: "richmond@bluebirdcare.co.uk",
    phone: "020 8744 9948",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "c-goode-pharmacy",
    name: "C. Goode Pharmacy",
    address: "22 London Road, TW1 3RR",
    town: "Twickenham",
    email: "enquiries@cgoodepharmacy.com",
    phone: "020 8115 0231",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "cabbage-patch-pub",
    name: "Cabbage Patch pub",
    address: "",
    town: "Twickenham",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "civic-centre",
    name: "The Civic Centre",
    address: "44 York Street, TW1 3BZ",
    town: "Twickenham",
    phone: "020 8891 1411",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "crusader-travel",
    name: "Crusader Travel",
    address: "57 Church Street, TW1 3NR",
    town: "Twickenham",
    email: "info@crusadertravel.com",
    phone: "020 8744 0474",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "kneller-gardens-cafe",
    name: "Kneller Gardens café",
    address: "",
    town: "Twickenham",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "squires-garden-centre",
    name: "Squires Garden Centre",
    address: "Sixth Cross Road, TW2 5PA",
    town: "Twickenham",
    phone: "020 8977 9241",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "well-being-centre",
    name: "The Well-Being Centre",
    address: "Aragon Road, TW1 3NH",
    town: "Twickenham",
    phone: "020 8538 9254",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "twickenham-library",
    name: "Twickenham Library",
    address: "Garfield Road, TW1 3JT",
    town: "Twickenham",
    email: "twickenham.library@richmond.gov.uk",
    phone: "020 8734 3340",
    photoUrl: "",
    mapUrl: "",
  },

  // WHITTON
  {
    id: "additional-aids",
    name: "Additional Aids",
    address: "80 High Street, TW2 7LS",
    town: "Whitton",
    email: "aamobility@btconnect.com",
    phone: "020 3369 5022",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "community-centre-whitton",
    name: "Community Centre",
    address: "111a Kneller Road, TW2 7DT",
    town: "Whitton",
    phone: "020 8894 4963",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "cancer-research-shop",
    name: "Cancer Research Shop",
    address: "93 High Street, TW2 7LD",
    town: "Whitton",
    phone: "020 8755 4288",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "eye-smile-dentists",
    name: "Eye & Smile Dentists",
    address: "120 High Street, TW2 7LL",
    town: "Whitton",
    phone: "020 8755 7900",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "grade-1-hairdressers",
    name: "Grade 1 Hairdressers",
    address: "133 Station Road, TW12 2AL",
    town: "Whitton",
    phone: "020 8979 4961",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "good-health-shop",
    name: "The Good Health Shop",
    address: "47 High Street, TW2 7LB",
    town: "Whitton",
    email: "info@goodhealthshop.co.uk",
    phone: "020 8894 9487",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "minal-pharmacy",
    name: "Minal Pharmacy",
    address: "9-11 High Street, TW2 7LA",
    town: "Whitton",
    phone: "020 8894 7933",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "whitton-health-centre",
    name: "Whitton Health Centre",
    address: "Percy Road, TW2 6JL",
    town: "Whitton",
    phone: "020 3903 3600",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "whitton-library",
    name: "Whitton Library",
    address: "141 Nelson Road, TW2 7BB",
    town: "Whitton",
    email: "whitton.library@richmond.gov.uk",
    phone: "020 8734 3343",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "whitton-network",
    name: "Whitton Network",
    address: "1 Library Way, TW2 7AP",
    town: "Whitton",
    email: "whittonnetwork@btconnect.com",
    phone: "020 8755 1336",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "whitton-pet-centre",
    name: "Whitton Pet Centre",
    address: "95 High Street, TW2 7LD",
    town: "Whitton",
    email: "whittonpetcentre@hotmail.co.uk",
    phone: "020 3417 4947",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "whitton-resource-centre",
    name: "Whitton Resource Centre",
    address: "1 Britannia Lane, TW2 7JX",
    town: "Whitton",
    phone: "020 8898 4949",
    photoUrl: "",
    mapUrl: "",
  },

  // OUTSIDE RICHMOND BOROUGH
  // BADSHOT LEE
  {
    id: "squires-garden-centre-badshot",
    name: "Squires Garden Centre",
    address: "Badshot Lea Rd, Farnham, GU9 9JX",
    town: "Badshot Lee",
    phone: "01252 333666",
    photoUrl: "",
    mapUrl: "",
  },

  // BALHAM
  {
    id: "natures-purest",
    name: "Nature's Purest",
    address: "78 Balham High Road, SW12 9AG",
    town: "Balham",
    phone: "020 8673 2672",
    photoUrl: "",
    mapUrl: "",
  },

  // HAMMERSMITH & FULHAM
  {
    id: "bishop-creighton-house",
    name: "Bishop Creighton House",
    address: "378 Lillie Road, SW6 7PH",
    town: "Hammersmith & Fulham",
    email: "info@creightonhouse.org",
    phone: "020 7385 9689",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "ce-harrod-pharmacy",
    name: "C.E. Harrod Pharmacy",
    address: "207 New King's Road, SW6 4SR",
    town: "Hammersmith & Fulham",
    phone: "020 7736 2174",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "fulham-good-neighbours",
    name: "Fulham Good Neighbours",
    address: "70 Rosaline Road, SW6 7QT",
    town: "Hammersmith & Fulham",
    email: "info@fulhamgoodneighbours.org",
    phone: "020 7385 8850",
    photoUrl: "",
    mapUrl: "",
  },

  // KENSINGTON & CHELSEA
  {
    id: "royal-brompton-hospital",
    name: "Royal Brompton Hospital",
    address: "Sydney Street, SW3 6NP",
    town: "Kensington & Chelsea",
    phone: "020 7352 8121",
    photoUrl: "",
    mapUrl: "",
  },

  // REIGATE
  {
    id: "squires-garden-centre-reigate",
    name: "Squires Garden Centre",
    address: "Buckland (A25), RH2 9RE",
    town: "Reigate",
    phone: "01737 247217",
    photoUrl: "",
    mapUrl: "",
  },

  // SURBITON
  {
    id: "ritechem",
    name: "Ritechem",
    address: "22 Victoria Road, KT6 4JZ",
    town: "Surbiton",
    email: "ritechempharmacy22@gmail.com",
    phone: "020 8390 0630",
    photoUrl: "",
    mapUrl: "",
  },
  {
    id: "cook-surbiton",
    name: "COOK",
    address: "33 Victoria Road, KT6 4JT",
    town: "Surbiton",
    phone: "020 8399 2208",
    photoUrl: "",
    mapUrl: "",
  },

  // WANDSWORTH
  {
    id: "royal-neuro-disability-hospital",
    name: "Royal Neuro-Disability Hospital",
    address: "West Hill, SW15 3SW",
    town: "Wandsworth",
    email: "info@rhn.org.uk",
    phone: "020 8780 4500",
    photoUrl: "",
    mapUrl: "",
  },

  // WEYBRIDGE
  {
    id: "cook-weybridge",
    name: "COOK",
    address: "21 Baker Street, KT13 8AE",
    town: "Weybridge",
    phone: "01932 845294",
    photoUrl: "",
    mapUrl: "",
  },
];

export const towns = Array.from(
  new Set(locations.map((loc) => loc.town))
).sort();
