function getBotResponse(input) {
    //normal questions
    if (input == "help me") {
        return "Sure, Please share your query";
    } else if (input == "What is coding") {
        return "Coding is something which is used in making websites, Applications, Softwares and many more things";
    } else if (input == "can you tell me the weather outside") {
        return "It's Clear right now.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    if (input == "are you a robot?") {
        return "Yes I am a robot, but I'm a good one. Let me prove it. How can I help you?”";
    } else if (input == "how are you? "){
        return "Oh, I'm doing wonderfully well!”; “Glad you asked! I'm feeling amazing!";
    } else if (input == "Tell me a joke") {
        return "you are funny!";
    } else if (input == "Who made you?"){
        return "Team Technist";
    }
    if (input =="Which languages can you speak?" ){
        return "i can speak in english";
    } else if (input == "hi i need some help"){
        return "Hello there. I am a chatbot. I can try and answer some of your questions. For questions I cannot answer, I will have to email a colleague at work. How can I help you today?";
    }
    else {
        return "Try asking something else!";
    }
} 