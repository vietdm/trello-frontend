import {HeaderNavbar} from '@/components/layouts/HeaderNavbar'
import {BodyContent} from "@/components/layouts/BodyContent";
import {Footer} from "@/components/layouts/Footer";
import {Box} from "@/components/ui/Box";
import {useDispatch} from "react-redux";
import {setIsLoading} from "@/stores/slices/loading";
import {BoardItem} from "@/components/pages/home/BoardItem";
import Hr from "@/components/ui/Hr";
import {Fragment} from "react";

export default function Home() {
  const dispatch = useDispatch();

  const removeLoading = () => {
    setTimeout(() => {
      dispatch(setIsLoading(false))
    }, 1000);
  }

  return (
    <main>
      <HeaderNavbar/>
      <BodyContent title="Your Boards" onReady={removeLoading}>
        <Box>
          {[1, 2, 3].map((value, index) => (
            <Fragment key={`board-${index}`}>
              {index > 0 && <Hr/>}
              <BoardItem src="/images/sky1.jpg"></BoardItem>
            </Fragment>
          ))}
        </Box>
      </BodyContent>
      <Footer/>
    </main>
  )
}
