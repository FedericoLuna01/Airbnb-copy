'use client'

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill, GiCactus } from 'react-icons/gi'
import { MdOutlineVilla } from "react-icons/md"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: 'Playa',
    icon: TbBeach,
    description: 'Esta propiedad esta cerca de la playa'
  },
  {
    label: 'Molinos',
    icon: GiWindmill,
    description: 'Esta propiedad tiene molinos'
  },
  {
    label: 'Moderno',
    icon: MdOutlineVilla,
    description: 'Esta propiedad es moderna'
  },
  {
    label: 'Campo',
    icon: TbMountain,
    description: 'Esta propiedad esta en el campo!'
  },
  {
    label: 'Piletas',
    icon: TbPool,
    description: 'Esta propiedad tiene una hermosa pileta!'
  },
  {
    label: 'Islas',
    icon: GiIsland,
    description: 'Esta propiedad está en una isla!'
  },
  {
    label: 'Lago',
    icon: GiBoatFishing,
    description: 'Esta propiedad esta cerca de un lago!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'Esta propiedad tiene skiing cerca!'
  },
  {
    label: 'Castillos',
    icon: GiCastle,
    description: 'Esta propiedad es un castillo antiguo!'
  },
  {
    label: 'Cuevas',
    icon: GiCaveEntrance,
    description: 'Esta propiedad está en una tenebrosa cueva!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Esta propiedad ofrece actividades de camping!'
  },
  {
    label: 'Artico',
    icon: BsSnow,
    description: 'Esta propiedad tiene un clima artico!'
  },
  {
    label: 'Desierto',
    icon: GiCactus,
    description: 'Esta propiedad está en un desierto!'
  },
  {
    label: 'Graneros',
    icon: GiBarn,
    description: 'Esta propiedad tiene un granero!'
  },
  {
    label: 'Lujo',
    icon: IoDiamond,
    description: 'Esta propiedad es nueva y lujosa!'
  }
] 

const Categories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }

  return ( 
    <Container>
      <div
        className="pt-4 flex flex-row items-center justify-between overflow-x-auto"
      > 
        {categories.map(item => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div> 
    </Container>
   );
}
 
export default Categories;