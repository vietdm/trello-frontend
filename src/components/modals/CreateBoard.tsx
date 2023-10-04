import {Modal} from "@/components/ui/Modal";
import {Flex} from "@/components/ui/Flex";
import {Button} from "@/components/ui/Button";

type Props = {
    isOpen: boolean;
    title?: string;
    onClose?: () => void;
};

export const CreateBoardModal = ({isOpen, onClose, title = 'Create Board'}: Props) => {
  return (
    <Modal
      id='create-board-modal'
      isOpen={isOpen}
      title={title}
      onClose={onClose}>
      <div className="p-6">
        <h1>hic</h1>
      </div>
      <Flex items="center" justify="center" className="p-6 border-t border-gray-200 rounded-b dark:border-gray-600 gap-[10px]">
        <Button onClick={onClose}>
            I accept
        </Button>
        <Button
          variant='light'
          onClick={onClose}>
            Decline
        </Button>
      </Flex>
    </Modal>
  );
}
