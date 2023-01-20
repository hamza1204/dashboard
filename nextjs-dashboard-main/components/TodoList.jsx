import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { FaToggleOff, FaToggleOn, FaTrash, FaUserPlus, FaFilter, FaSortDown, FaEllipsisH, FaRegAddressCard } from "react-icons/fa";
import { deleteTodo, toggleTodoStatus } from "../api/todo";


const TodoList = () => {
  const [todos, setTodos] = React.useState([]);

  const { user } = useAuth();
  const toast = useToast();
  const refreshData = () => {
    if (!user) {
      setTodos([]);
      return;
    }
    const q = query(collection(db, "todo"), where("user", "==", user.uid));

    onSnapshot(q, (querySnapchot) => {
      let ar = [];
      querySnapchot.docs.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setTodos(ar);
    });
  };

  useEffect(() => {
    refreshData();
  }, [user]);

  const handleTodoDelete = async (id) => {
    if (confirm("Are you sure you wanna delete this todo?")) {
      deleteTodo(id);
      toast({ title: "Todo deleted successfully", status: "success" });
    }
  };

  const handleToggle = async (id, status) => {
    const newStatus = status == "completed" ? "pending" : "completed";
    await toggleTodoStatus({ docId: id, status: newStatus });
    toast({
      title: `Todo marked ${newStatus}`,
      status: newStatus == "completed" ? "success" : "warning",
    });
  };

  return (


    <Box mt={5}>

      <div className="d-flex align-items-center p-1 pb-3">

        <h5 className="fw-bold mb-0 me-1" >Backlog </h5>
        <div className="me-2" style={{ opacity: '0.6', fontSize: '17px' }}>(2)</div>
        <FaEllipsisH />
        
      </div>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}   >
        {todos &&
          todos.map((todo) => (
            <Box
            borderRadius={'8px'}
            bg={'white'}
              key={todo.id}
              p={'8px'}
              boxShadow="2xl"
              shadow={"dark-lg"}
              transition="0.2s"
              _hover={{ boxShadow: "sm" }}
            >

              <Heading as="h5" fontSize={"xl"} >
                <Badge
                  // color="red.500"
                  bg="inherit"
                  transition={"0.2s"}
                  _hover={{
                    bg: "inherit",
                    transform: "scale(1.2)",
                  }}
                  float="right"
                  size="xs"
                  onClick={() => handleTodoDelete(todo.id)}
                >
                  <FaUserPlus />
                </Badge>
                {/* <Badge
                  color={todo.status == "pending" ? "gray" : "green"}
                  bg="inherit"
                  transition={"0.2s"}
                  _hover={{
                    bg: "inherit",
                    transform: "scale(1.2)",
                  }}
                  float="right"
                  size="xs"
                  onClick={() => handleToggle(todo.id, todo.status)}
                >
                  {todo.status == "pending" ? <FaToggleOff /> : <FaToggleOn />}
                </Badge> */}
                <Badge
                  // float="right"
                  opacity="0.8"
                  bg={todo.status == "pending" ? "yellow.500" : "yellow.500"}
                >
                  {todo.status}
                </Badge>
              </Heading>

              <Heading as='h6' fontSize={'lg'} color={'#070F21'} opacity={'0.6'}>
                {todo.title}

              </Heading>

              <Text className="api" backgroundColor={'#FFEEDE'} >api.contactrm.com</Text>
              <Text className="api" backgroundColor={'#FFDEFC'} marginLeft={'3px'}  >api.contactrm.com</Text>

              <FaRegAddressCard display={'block'} w={'24px'} h={'24px'} />

              <Text bg={'#EBECED'} display={'inline-block'} px={'3'} borderRadius={'4px'} >Created 3 days ago</Text>

            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default TodoList;
