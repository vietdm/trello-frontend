import {HeaderNavbar} from '@/components/layouts/HeaderNavbar'
import {BodyContent} from "@/components/layouts/BodyContent";
import {Footer} from "@/components/layouts/Footer";
import Box from "@/components/ui/Box";
import {useDispatch} from "react-redux";
import {setIsLoading} from "@/stores/slices/loading";

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
          <h2>Items in Cart</h2>
        </Box>
      </BodyContent>
      <Footer/>
    </main>
  )
}
