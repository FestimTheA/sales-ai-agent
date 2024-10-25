"use client";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Delete?</Button>
      <Modal 
        size="lg" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex pt-6 pr-8 pb-0 pl-8 flex-initial text-2xl font-[700] leading-[32px] mb-4">Are you sure you want to delete?</ModalHeader> 
              <ModalBody className="flex pt-4 pr-8 pb-4 pl-8 flex-initial text-sm text-gray-500">   
                <p> 
                  This will be deleted immediately.
                  You can't undo this action.
                </p>
              </ModalBody >  
              <ModalFooter className="flex pt-0 pr-8 pb-10 pl-8 flex-initial justify-between w-full gap-3">
              <Button className="w-1/2" color="primary" onPress={onClose}>
                  No
                </Button>
                <Button className="w-1/2" color="default" variant="bordered" onPress={onClose}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
