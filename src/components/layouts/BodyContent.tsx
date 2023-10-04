import {Box} from "@/components/ui/Box";
import {Container} from "@/components/ui/Container";
import {ReactNode, useEffect, useRef, useState} from "react";
import {Text} from "@/components/ui/Text";
import {cn} from "@/utils/ui";

type Props = {
    children: ReactNode;
    title?: string;
    onReady?: () => void;
    bodyClassName?: string;
};

export const BodyContent = ({children, title, onReady, bodyClassName}: Props) => {
  const bodyContentRef = useRef<HTMLDivElement | null>(null);
  const bodyTitleRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<string>('100%');

  useEffect(() => {
    if (!bodyContentRef || !bodyContentRef.current) return;
    const header = document.querySelector<HTMLElement>('#section-header');
    const footer = document.querySelector<HTMLElement>('#section-footer');
    let totalHeight = 0;
    if (header) {
      totalHeight = totalHeight + header.offsetHeight;
    }
    if (footer) {
      totalHeight = totalHeight + footer.offsetHeight;
    }
    if (bodyTitleRef.current) {
      totalHeight = totalHeight + bodyTitleRef.current?.offsetHeight;
    }
    if (title) {
      setContentHeight(`calc(100vh - ${totalHeight}px - 2.25rem)`);
    } else {
      setContentHeight(`calc(100vh - ${totalHeight}px - 1.5rem)`);
    }
    if (typeof onReady === 'function') {
      onReady();
    }
  }, [bodyContentRef, onReady, title]);

  return (
    <Box ref={bodyContentRef} className="py-[.75rem]">
      <Container>
        {title && (
          <Box className="rounded-[7px] border py-[10px] px-[15px] mb-[.75rem] bg-white" ref={bodyTitleRef}>
            <Text weight="semibold" className="whitespace-nowrap text-ellipsis overflow-hidden">{title}</Text>
          </Box>
        )}
        <Box className={cn('p-[15px] rounded-xl border overflow-auto', bodyClassName ?? '')}
          style={{height: contentHeight, maxHeight: contentHeight}}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}
