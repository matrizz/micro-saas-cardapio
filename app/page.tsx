'use client'

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";
import { CardapioSection } from "@/types";




export default function Home() {

  const [data, setData] = useState<CardapioSection[]>([]) 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/cardapio/items')
      const res = await response.json()
      setData(res)
    }

    fetchData()


  }, [])

  return (
    <>
      <Header.root>
        <Header.image className="object-cover h-[12rem] w-full" src="./banner.png" />
        <Header.title>
          Cardápio Online
        </Header.title>
        <Header.subtitle subTitle="Explore nossos pratos deliciosos" />
      </Header.root>

      {
        data.map((section) => {
          return (
            <div key={section.sectionName} className="mx-auto p-4">
              <Section.title title={section.sectionName} />
              <Section.root>
                {
                  section.items.map(item => {
                    return (
                      <Card.root key={item.name}>
                        <Card.image className="w-full h-20 sm:h-24 object-cover" height={100} width={200} src="https://storage.googleapis.com/a1aa/image/6GvcfWS7kZSYUSQjtmv2B4wIS9nf6rjqqn12JTKluRABF77TA.jpg" />
                        <Card.content className="flex flex-col p-2 justify-between">
                          <Card.title title={item.name} />
                          <Card.description content={item.description} />
                          <Card.price price={item.currentPrice} />
                        </Card.content>
                      </Card.root>
                    )
                  })
                }
              </Section.root>
            </div>
          )
        })
      }
    </>
  );
}
