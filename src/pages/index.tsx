import {Box} from "@/components/ui/Box";
import {BoardItem} from "@/components/pages/home/BoardItem";
import {Hr} from "@/components/ui/Hr";
import {Fragment} from "react";
import {GlobalLayout} from "@/components/layouts/GlobalLayout";

export default function Home() {
  return (
    <GlobalLayout title="Your Boards">
      <Box>
        {[1, 2, 3].map((value, index) => (
          <Fragment key={`board-${index}`}>
            {index > 0 && <Hr/>}
            <BoardItem src="/images/sky1.jpg" uid={String(value)}></BoardItem>
          </Fragment>
        ))}
      </Box>
    </GlobalLayout>
  )
}
