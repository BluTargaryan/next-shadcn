'use client'
import { sendGAEvent } from "@next/third-parties/google"
import Image from "next/image"

type Game  = {
    id:number,
    image:string
    rating:number,
    name:string
  }

export default function Game ({id, name, rating, image}:Game){
    return(
        <div className="col-span-4 md:col-span-2" 
        onClick={() => sendGAEvent({ event: 'itemClicked', value: `${name}` })}>
          <h1>{name}</h1>
          <p className="font-bold text-sm mb-4">{rating}</p>
          <div className="aspect-video relative">
          <Image
          src={image}
          fill
          className ="object-cover rounded-md"
          alt={name}
          />
          </div>
         
        </div>
    )
}