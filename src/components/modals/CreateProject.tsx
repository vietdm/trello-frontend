import {Box} from "@/components/ui/Box";
import {Input} from "@/components/ui/Input";
import {Modal} from "@/components/ui/Modal";
import {Flex} from "@/components/ui/Flex";
import {Button} from "@/components/ui/Button";
import {Text} from "@/components/ui/Text";
import {Textarea} from "@/components/ui/Textarea";
import {useForm} from "react-hook-form";

type Form = {
  title: string;
  description: string;
};

type Props = {
  isOpen: boolean;
  title?: string;
  onClose?: () => void;
  formDefault?: Form;
};

export const CreateProjectModal = ({
  isOpen,
  onClose,
  title = 'Create Board',
  formDefault = {title: '', description: ''}
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<Form>()

  const onSubmit = (form: Form) => {
    console.log('form', form);
  }

  return (
    <Modal
      id='create-project-modal'
      isOpen={isOpen}
      title={title}
      onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6">
          <Box className='mb-3'>
            <Input
              id="project_title"
              label="Title"
              {...register("title", {required: true})}
            />
            {errors.title && <Text size='sm' col='red' className='italic mt-1'>Title is required</Text>}
          </Box>
          <Box>
            <Textarea
              id="project_description"
              label="Description"
              {...register("description", {required: true})}
            />
            {errors.description && <Text size='sm' col='red' className='italic mt-1'>Description is required</Text>}
          </Box>
        </div>
        <Flex items="center" justify="center"
          className="p-6 border-t border-gray-200 rounded-b dark:border-gray-600 gap-[10px]">
          <Button type="submit">
            I accept
          </Button>
          <Button
            variant='light'
            onClick={onClose}>
            Decline
          </Button>
        </Flex>
      </form>
    </Modal>
  );
}
