import {Box} from "@/components/ui/Box";
import {BoardItem} from "@/components/pages/home/BoardItem";
import {GlobalLayout} from "@/components/layouts/GlobalLayout";

export default function Home() {
  return (
    <GlobalLayout
      bgSrc='https://trello-backgrounds.s3.amazonaws.com/5acc9426bfa043c72b56488a/1920x1920/7b5d121c88219628ecb1f0ec46283017/shutterstock_134707556.jpeg.jpg'
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
    </GlobalLayout>
  )
}
