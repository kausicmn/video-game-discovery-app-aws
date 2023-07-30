import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getcropperurl from "../services/image-url"
import Emoji from "./Emoji"
interface Props{
    game:Game
}
const GameCard=({game}:Props)=>{
    return(
        <Card>
            <Image src={getcropperurl(game.background_image)}></Image>
            <CardBody>
              <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms?.map(pl=>pl.platform)}></PlatformIconList>
              <CriticScore criticscore={game.metacritic}></CriticScore>
              </HStack>
              <Heading fontSize={"2xl"}>{game.name} <Emoji rating={game.rating_top}></Emoji></Heading> 
            </CardBody>
        </Card>
    )
}
export default GameCard