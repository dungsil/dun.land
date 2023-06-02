import { Component } from 'preact'

export interface SectionProps {
  children: Component

  title: string
  category?: string
}

export default function Section({ title, category, children }: SectionProps) {
  return (
    <section class="w-full max-w-lg mx-auto">
      <div>
        {category && <p class="font-medium text-sm text-gray-100">{category}</p>}
        <h2 class="font-bold text-3xl text-white lg:text-4xl">{ title }</h2>
      </div>
      <div class="mt-4 text-lg leading-wide">
        { children }
      </div>
    </section>
  )
}
