import { Hero } from '@/components/home/hero'
import { Products } from '@/components/home/products'
import { Benefits } from '@/components/home/benefits'
import { Tools } from '@/components/home/tools'
import { FAQ } from '@/components/home/faq'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Benefits />
      <Tools />
      <FAQ />
    </>
  )
}