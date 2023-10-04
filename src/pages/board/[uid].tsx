import {GlobalLayout} from "@/components/layouts/GlobalLayout";
import {Flex} from "@/components/ui/Flex";
import {useEffect, useRef} from "react";
import {BoxTask} from "@/components/pages/board/BoxTask";
import {Button} from "@/components/ui/Button";

export default function BoardDetail() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef || !contentRef.current) return;
    let scrollLeft = 0;
    let allowScroll = false;
    let lastOffsetLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as Element;
      if(target.classList.contains('el-item-task')) return;
      if(target.closest('.el-item-task')) return;
      allowScroll = true;
      lastOffsetLeft = e.clientX;
      scrollLeft = contentRef.current!.scrollLeft;
    }

    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      allowScroll = false;
    }

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (!allowScroll) return;
      if (e.clientX === lastOffsetLeft) return;
      if (e.clientX < lastOffsetLeft) {
        scrollLeft += lastOffsetLeft - e.clientX;
        lastOffsetLeft = e.clientX;
        contentRef.current!.scrollLeft = scrollLeft;
      } else {
        scrollLeft -= e.clientX - lastOffsetLeft;
        lastOffsetLeft = e.clientX;
        contentRef.current!.scrollLeft = scrollLeft;
      }
    }

    const onMouseLeave = (e: MouseEvent) => {
      e.preventDefault();
      allowScroll = false;
    }

    contentRef.current.addEventListener('mousedown', onMouseDown);
    contentRef.current.addEventListener('mouseup', onMouseUp);
    contentRef.current.addEventListener('mousemove', onMouseMove);
    contentRef.current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (!contentRef.current) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      contentRef.current.removeEventListener('mousedown', onMouseDown);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      contentRef.current.removeEventListener('mouseup', onMouseUp);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      contentRef.current.removeEventListener('mousemove', onMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      contentRef.current.removeEventListener('mouseleave', onMouseLeave);
    }
  }, [contentRef]);

  return (
    <GlobalLayout
      title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      bgSrc='https://trello-backgrounds.s3.amazonaws.com/5acc9426bfa043c72b56488a/1920x1920/7b5d121c88219628ecb1f0ec46283017/shutterstock_134707556.jpeg.jpg'
      bodyClassName="overflow-hidden py-0">
      <Flex className="flex gap-[15px] h-full min-h-full overflow-auto py-[15px]" ref={contentRef}>
        {[1,2,3,4,5,6,7,8,9].map((value, index) => (
          <BoxTask key={`area-task-${index}`} />
        ))}
      </Flex>
    </GlobalLayout>
  );
}
