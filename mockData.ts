export const competitions = [
  {
    id: 1,
    name: "Kevätturnaus 2024",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    status: "upcoming", // Käynnissä, Tuleva, Mennyt
    description: "Kevään suurin turnaus! Haasta itsesi ja osallistu.",
    rounds: [
      {
        day: "Maanantai",
        date: "2024-03-04",
        time: "18:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 1,
            userDetails: { name: "John Doe" },
            registrationTime: "2024-02-01T10:00:00Z",
          },
          {
            registryId: 2,
            userDetails: { name: "Jane Smith" },
            registrationTime: "2024-02-01T10:05:00Z",
          },
        ],
      },
      {
        day: "Keskiviikko",
        date: "2024-03-06",
        time: "18:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 3,
            userDetails: { name: "Michael Brown" },
            registrationTime: "2024-02-02T11:00:00Z",
          },
          {
            registryId: 4,
            userDetails: { name: "Emily Davis" },
            registrationTime: "2024-02-02T11:10:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Kesäkisa",
    startDate: "2024-06-15",
    endDate: "2024-07-15",
    status: "upcoming",
    description:
      "Kesäinen keilakisa kaikille taitotasoille. Ilmoittaudu mukaan!",
    rounds: [
      {
        day: "Sunnuntai",
        date: "2024-06-16",
        time: "14:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 5,
            userDetails: { name: "Alice Johnson" },
            registrationTime: "2024-05-01T09:00:00Z",
          },
          {
            registryId: 6,
            userDetails: { name: "Bob Brown" },
            registrationTime: "2024-05-01T09:15:00Z",
          },
        ],
      },
      {
        day: "Torstai",
        date: "2024-06-20",
        time: "18:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 7,
            userDetails: { name: "Chris Wilson" },
            registrationTime: "2024-05-02T10:00:00Z",
          },
          {
            registryId: 8,
            userDetails: { name: "Diana Moore" },
            registrationTime: "2024-05-02T10:20:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Talviliiga",
    startDate: "2024-11-01",
    endDate: "2024-12-31",
    status: "current",
    description: "Osallistu talviliigaan ja kilpaile parhaita vastaan!",
    rounds: [
      {
        day: "Tiistai",
        date: "2024-11-05",
        time: "19:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 9,
            userDetails: { name: "George Harris" },
            registrationTime: "2024-10-01T10:00:00Z",
          },
          {
            registryId: 10,
            userDetails: { name: "Hannah Lee" },
            registrationTime: "2024-10-01T10:05:00Z",
          },
        ],
      },
      {
        day: "Perjantai",
        date: "2024-11-08",
        time: "19:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 11,
            userDetails: { name: "Ian Scott" },
            registrationTime: "2024-10-02T11:00:00Z",
          },
          {
            registryId: 12,
            userDetails: { name: "Julia Adams" },
            registrationTime: "2024-10-02T11:10:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Syysturnaus",
    startDate: "2024-09-01",
    endDate: "2024-10-30",
    status: "past",
    description: "Syysturnaus! Tervetuloa pelaamaan ruskakisaan",
    rounds: [
      {
        day: "Lauantai",
        date: "2024-10-28",
        time: "16:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 13,
            userDetails: { name: "Charlie Davis" },
            registrationTime: "2024-08-15T09:00:00Z",
          },
          {
            registryId: 14,
            userDetails: { name: "Dana White" },
            registrationTime: "2024-08-15T09:15:00Z",
          },
        ],
      },
      {
        day: "Sunnuntai",
        date: "2024-10-08",
        time: "16:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 15,
            userDetails: { name: "Eve Black" },
            registrationTime: "2024-08-16T10:00:00Z",
          },
          {
            registryId: 16,
            userDetails: { name: "Frank Green" },
            registrationTime: "2024-08-16T10:20:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Vuodenvaihteen mestaruus",
    startDate: "2023-12-15",
    endDate: "2024-01-15",
    status: "current",
    description:
      "Vuodenvaihteen mestaruus ratkaistaan juuri nyt. Seuraa jännittäviä hetkiä!",
    rounds: [
      {
        day: "Lauantai",
        date: "2023-12-16",
        time: "15:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 17,
            userDetails: { name: "Kevin Brown" },
            registrationTime: "2023-11-01T10:00:00Z",
          },
          {
            registryId: 18,
            userDetails: { name: "Laura Green" },
            registrationTime: "2023-11-01T10:05:00Z",
          },
        ],
      },
      {
        day: "Sunnuntai",
        date: "2023-12-17",
        time: "15:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 19,
            userDetails: { name: "Michael White" },
            registrationTime: "2023-11-02T11:00:00Z",
          },
          {
            registryId: 20,
            userDetails: { name: "Nina Black" },
            registrationTime: "2023-11-02T11:10:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Kesäliiga 2023",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    status: "past",
    description: "Kesäliiga on päättynyt, nähdään ensi kesänä!",
    rounds: [
      {
        day: "Keskiviikko",
        date: "2023-06-07",
        time: "18:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 21,
            userDetails: { name: "Oliver Brown" },
            registrationTime: "2023-05-01T09:00:00Z",
          },
          {
            registryId: 22,
            userDetails: { name: "Sophia Green" },
            registrationTime: "2023-05-01T09:15:00Z",
          },
        ],
      },
      {
        day: "Perjantai",
        date: "2023-06-09",
        time: "18:00",
        maxParticipants: 16,
        registrations: [
          {
            registryId: 23,
            userDetails: { name: "Liam White" },
            registrationTime: "2023-05-02T10:00:00Z",
          },
          {
            registryId: 24,
            userDetails: { name: "Emma Black" },
            registrationTime: "2023-05-02T10:20:00Z",
          },
        ],
      },
    ],
  },
];
