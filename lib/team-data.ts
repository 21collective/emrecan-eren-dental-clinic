export interface TeamMember {
  name: string
  title: string
  imageUrl: string
}

// Photos live in public/team: 1100x1375 (4:5) transparent webp,
// scaled so every head is the same size and sits at the same height.
export const teamMembers: TeamMember[] = [
  { name: "Dt. Emrecan Eren", title: "Kurucu Diş Hekimi", imageUrl: "/team/ee.webp" },
  { name: "Dt. Barkın Ergin", title: "Diş Hekimi", imageUrl: "/team/be.webp" },
  { name: "Dt. Mehmet Varyemez", title: "Diş Hekimi", imageUrl: "/team/mv.webp" },
  { name: "Dt. Rıdvan Doğan", title: "Diş Hekimi", imageUrl: "/team/rd.webp" },
]
