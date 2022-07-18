import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/miscellaneous/MyChat";
import ChatBox from "../components/miscellaneous/ChatBox";
import { ChatState } from "../Context/ChatProvider"
import { useState } from "react";



const ChatePage = () => {

 const {user}= ChatState();
// const user=JSON.parse(localStorage.getItem("userInfo"));
 const [fetchAgain,setFetchAgain]=useState(false);
 



    return (
        <div style={{width:"100%"}}>
            {user && <SideDrawer/>}
            <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChats fetchAgain={fetchAgain} />}
                {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
            </Box>

        </div>
    )
}

export default ChatePage
