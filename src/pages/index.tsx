import {Box} from "@/components/ui/Box";
import {BoardItem} from "@/components/pages/home/BoardItem";
import {GlobalLayout} from "@/components/layouts/GlobalLayout";
import {Button} from "@/components/ui/Button";
import {CreateBoardModal} from "@/components/modals/CreateBoard";
import {useState} from "react";

export default function Home() {
  const [isOpenModalCreateBoard, setOpenModalCreateBoard] = useState<boolean>(false);
  return (
    <GlobalLayout
      bgSrc='https://trello-backgrounds.s3.amazonaws.com/5acc9426bfa043c72b56488a/1920x1920/7b5d121c88219628ecb1f0ec46283017/shutterstock_134707556.jpeg.jpg'
      titleRightEl={<Button onClick={() => setOpenModalCreateBoard(true)}>Create</Button>}
      title="Your Boards">
      <Box>
        {[1, 2, 3].map((value, index) => (
          <BoardItem
            key={`board-${index}`}
            src="/images/sky1.jpg"
            uid={String(value)}
          />
        ))}
      </Box>
      <CreateBoardModal isOpen={isOpenModalCreateBoard} onClose={() => setOpenModalCreateBoard(false)} />
    </GlobalLayout>
  )
}
