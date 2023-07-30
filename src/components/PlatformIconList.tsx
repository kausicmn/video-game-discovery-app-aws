import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from "react-icons/lib";
interface Props{
    platforms:Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
    const iconMap :{ [key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid,
        mac:FaApple
    }
  return (
    <HStack marginY={1}>
    {platforms?.map(platform=><Icon as={iconMap[platform.slug]} color={"gray.500"} key={platform.slug}></Icon>)} 
    </HStack>
  )
}

export default PlatformIconList