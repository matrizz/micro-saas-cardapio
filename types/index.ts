export interface CardapioSection {
  sectionName: string
  items: CardapioSectionItem[]
}

export interface CardapioSectionItem {
  name: string
  description: string
  originalPrice: number
  discount: number
  currentPrice: number
}