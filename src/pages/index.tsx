import {TBoards} from "@/@types/board";
import {Box} from "@/components/ui/Box";
import {BoardItem} from "@/components/pages/home/BoardItem";
import {GlobalLayout} from "@/components/layouts/GlobalLayout";
import {Button} from "@/components/ui/Button";
import {CreateBoardModal} from "@/components/modals/CreateBoard";
import {Text} from "@/components/ui/Text";
import {useBoardAllQuery} from "@/queries/board/all";
import {useEffect, useState} from "react";

export default function Home() {
  const [isOpenModalCreateBoard, setOpenModalCreateBoard] = useState<boolean>(false);
  const [boards, setBoards] = useState<TBoards>([]);
  const allBoard = useBoardAllQuery();

  useEffect(() => {
    if (allBoard) {
      setBoards(allBoard.data.boards);
    }
  }, [allBoard]);

  return (
    <GlobalLayout
      bgSrc='https://trello-backgrounds.s3.amazonaws.com/5acc9426bfa043c72b56488a/1920x1920/7b5d121c88219628ecb1f0ec46283017/shutterstock_134707556.jpeg.jpg'
      titleRightEl={<Button onClick={() => setOpenModalCreateBoard(true)}>Create</Button>}
      title="Your Boards">
      <Box>
        {boards.map((board, index) => (
          <BoardItem
            key={`board-${index}`}
            board={board}
          />
        ))}
        {boards.length === 0 && (
          <Text align="center" className='bg-white py-[15px] rounded-xl'>No board!</Text>
        )}
      </Box>
      <CreateBoardModal isOpen={isOpenModalCreateBoard} onClose={() => setOpenModalCreateBoard(false)} />
    </GlobalLayout>
  )
}
