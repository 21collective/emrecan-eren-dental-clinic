import Image from "next/image"
import { teamMembers } from "@/lib/team-data"

export function TeamMembers() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brown text-center mb-12">
          Ekip Üyelerimiz
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="group text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-cream to-vizon/20 shadow-md">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brown">{member.name}</h3>
              <p className="mt-1 text-vizon font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
