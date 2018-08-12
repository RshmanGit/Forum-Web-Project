console.log("it works");

function validateForm() {
    var title = document.forms["ask"]["question"];
    var desc = document.forms["ask"]["desc"];
    var tags = document.forms["ask"]["tags"];

    var titleWarn = document.querySelector(".invalidQuest");
    var descWarn = document.querySelector(".invalidDesc");
    var tagwarn = document.querySelector(".invalidTag");
    
    console.log(title);
    console.log(desc);
    console.log(tags);

    if (title.value == "") {
        title.classList.add("invalid");
        titleWarn.textContent = "Please Enter A title for your question";
        return false;
    }
    else{
        title.classList.remove("invalid");
        titleWarn.textContent = "";
    }

    if (desc.value == ""){
        desc.classList.add("invalid");
        descWarn.textContent = "Enter Description Content";
        return false;
    }
    else{
        desc.classList.remove("invalid");
        descWarn.textContent = "";
    }

    if(tags.value == ""){
        tags.classList.add("invalid");
        tagwarn.textContent = "Enter a correct tag";
        return false;
    }
    else{
        tags.classList.remove("invalid");
        tagwarn.textContent = "";
    }

    return true;

} 