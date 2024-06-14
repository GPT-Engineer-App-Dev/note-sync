import { useState } from "react";
import { Container, VStack, HStack, Input, Textarea, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() === "" && content.trim() === "") return;
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Note Taking App</Text>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={3}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Take a note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button colorScheme="teal" onClick={addNote} width="100%">Add Note</Button>
          </VStack>
        </Box>
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} width="100%" p={4} borderWidth={1} borderRadius="lg" position="relative">
              <HStack justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold">{note.title}</Text>
                <IconButton
                  aria-label="Delete note"
                  icon={<FaTrash />}
                  size="sm"
                  onClick={() => deleteNote(index)}
                />
              </HStack>
              <Text mt={2}>{note.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;