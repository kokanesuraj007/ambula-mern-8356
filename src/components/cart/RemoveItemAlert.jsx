import React, { useContext } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { ProductContext } from "../features/ProductContext";

export default function RemoveItemAlert({title, id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let { deleteCart } = useContext(ProductContext);
  return (
    <>
      <Button
        color={"#008060"}
        leftIcon={<CloseIcon fontSize={"14px"} />}
        p="0px"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        onClick={onOpen}
      >
        REMOVE
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Remove product from cart</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to remove {title}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              color={"#008060"}
            >
              CANCEL
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              color={"#008060"}
              onClick={() => deleteCart(id)}
            >
              REMOVE
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
