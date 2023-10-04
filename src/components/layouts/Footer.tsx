import {Box} from "@/components/ui/Box";
import {Text} from "@/components/ui/Text";
import {LinkUI} from "@/components/ui/Link";

export const Footer = () => {
  return (
    <Box className="bg-white py-3 shadow-normal" id="section-footer">
      <Text className="text-center">Copyright @2023 by <LinkUI href="https://www.facebook.com/vietd126/">VietD</LinkUI></Text>
    </Box>
  );
}
