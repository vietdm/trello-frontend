import {Flex} from "@/components/ui/Flex";
import {Box} from "@/components/ui/Box";
import {LinkUI} from "@/components/ui/Link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Text} from "@/components/ui/Text";

type Props = {
    src: string;
    uid: string;
};

export const BoardItem = ({src, uid}: Props) => {
  return (
    <Flex justify="between">
      <Flex className="w-[calc(100%-80px)]">
        <Box className='w-[80px] h-[80px] bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url('${src}')`}} />
        <Text className='w-[calc(100%-80px)] pl-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </Flex>
      <Box className="w-[80px] text-right">
        <LinkUI href={`/board/${uid}`} underline={false}>Go <NavigateNextIcon /></LinkUI>
      </Box>
    </Flex>
  );
}
