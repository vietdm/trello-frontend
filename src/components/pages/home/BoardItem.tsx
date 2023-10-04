import {TBoard} from "@/@types/board";
import {Flex} from "@/components/ui/Flex";
import {Box} from "@/components/ui/Box";
import {LinkUI} from "@/components/ui/Link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Text} from "@/components/ui/Text";

const bgSrc = '/images/sky1.jpg';

export const BoardItem = ({board}: {board: TBoard}) => {
  return (
    <Flex justify="between" className="bg-white rounded-xl p-[10px] mb-2">
      <Flex className="w-[calc(100%-80px)]">
        <Box className='w-[80px] h-[80px] bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url('${bgSrc}')`}} />
        <Box className='w-[calc(100%-80px)] pl-[15px]'>
          <Text weight="semibold">{board.title}</Text>
          <Text>{board.description}</Text>
        </Box>
      </Flex>
      <Box className="w-[80px] text-right">
        <LinkUI href={`/board/${board.uuid}`} underline={false}>Go <NavigateNextIcon /></LinkUI>
      </Box>
    </Flex>
  );
}
