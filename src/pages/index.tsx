import {HeaderNavbar} from '@/components/layouts/HeaderNavbar'
import {BodyContent} from "@/components/layouts/BodyContent";
import {Footer} from "@/components/layouts/Footer";
import Box from "@/components/ui/Box";

export default function Home() {
  return (
    <main>
      <HeaderNavbar/>
      <BodyContent title="Your Boards">
        <Box>
          <button className="animate-bounce direction-normal">Button A</button>
          <button className="animate-bounce direction-reverse">Button B</button>
          <button className="animate-bounce direction-alternate">Button C</button>
        </Box>
      </BodyContent>
      <Footer/>
    </main>
  )
}
