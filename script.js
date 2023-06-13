const data = {
    brandName: "Smash Games",
    pages: [
            {
            name: "index",
            pageName: "Home",
            callToAction: {
            src: "images/SmashGamesLogo-short.png",
            altText: "Smash Games Logo"
            }

        },
        {
            name: "blast",
            pageName: "Inferno Blast",
            blocks: [
                {
                    type: "call-to-action",
                    src: "images/Inferno-Jumbotron.png",
                    altText: "Inferno Blast Gameplay",
                    buttonLinkSrc:"https://steampowered.com",
                    buttonLinkText:"Buy now on steam",
                
                },
                {
                    type: "description",
                    text: "Inferno Blast is an action-packed adventure game that takes players to a fiery realm of danger and excitement. In this game, you'll take on the role of a hero who must navigate through a series of treacherous levels filled with fiery obstacles and hordes of demons. With each level you complete, you'll unlock new weapons and power-ups to help you in your quest to defeat the ultimate demon boss. Can you survive the inferno and emerge victorious?",
                },
                {
                    type: "deck",
                    cards: [
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-2-short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Dynamic Environments",
                            body: "Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds.",

                        },
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-1-short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Upgradable Weapons",
                            body: "Customize your arsenal with a range of weapons and power-ups, including flamethrowers, rocket launchers, and more.",

                        },
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-3-short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Epic Boss Battles",
                            body: "Face off against towering demon bosses, each with their own unique strengths and weaknesses.",

                        },
                        
                        
                    ],
                },
                {
                    type: "requirements",
                    platforms: [
                        "steam", "xbox", "playstation", "facebook", "twitter", "instagram", "patreon", "twitch", "youtube"
                    ],
                    requirements: [
                        {
                            type: "minimum-requirements",
                            requirements: [
                                {title: "OS", value: "Win7"},
                                {title: "Processor", value: "Intel I3 or Ryzen 3"},
                                {title: "RAM", value: "8GB"},
                                {title: "Graphics", value: "Geforce GTX 570"},
                                {title: "Storage", value: "1GB HDD"},
                            ]
                        },
                        {
                            type: "recommended-requirements",
                            requirements: [
                                {title: "OS", value: "Win11"},
                                {title: "Processor", value: "Intel I9 or Ryzen 7"},
                                {title: "RAM", value: "16GB"},
                                {title: "Graphics", value: "Geforce RTX 2080"},
                                {title: "Storage", value: "5GB SSD"},
                            ]
                        }
                    ],
                },
                {
                    type: "wishlist",
                },
                {
                    type: "faq",
                    questions: [
                        {question: "What does this do?", answer: "Stuff"},
                        {question: "What does that do?", answer: "other stuff"},
                        {question: "What does this do?", answer: "more stuff"},
                    ]
                },
            ],
        
        }
    ]
}

let page = data.pages[1];
// get the main container
let container = document.getElementById("main");


document.title = data.brandName + " - " + page.pageName;
// get access to the branding and change to data.brandName
document.getElementById("brand").innerHTML = data.brandName.toUpperCase();
// get access to the page title h1 and change to page.pageName
document.getElementById("pageName").innerHTML = page.pageName;


// creating all the blocks on the page
createPage(page.blocks);

function createPage(blocks) {
    for (let i = 0; i < blocks.length; i++) {
        let currentBlock = blocks[i];
        if(currentBlock.type == "call-to-action") {
            createCallToAction(currentBlock);
        } else if(currentBlock.type == "description") {
            createDescription(currentBlock);
        } else if(currentBlock.type == "deck") {
            createDeck(currentBlock);
        } else if(currentBlock.type == "requirements") {
            createGameInfo(currentBlock);
        } else {
            console.log("Unknown block type: " + currentBlock.type);
        }
    }
}

function createImage(imgData) {
    let img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    return img;
}

function createLink(linkData) {
    let link = document.createElement("a");
    link.classList.add("btn");
    link.href = linkData.buttonLinkSrc;
    link.target = "_blank";
    link.innerHTML = linkData.buttonLinkText + " <i class='fa-brands fa-steam-symbol'></i>";
    return link;
}




function createCallToAction(blockData) {
    // create a block for each block in the page
    //let container = document.getElementById("main");
    let block = document.createElement("div");
    block.classList.add("call-to-action");
    // add our image
    block.appendChild(createImage(blockData));
    // add a break
    block.appendChild(document.createElement("br"));
    // add call to action button
    block.appendChild(createLink(blockData));
    // add the block to the container
    container.appendChild(block);
}

function createDescription(blockData) {    
    // create a block for each block in the page
    let block = document.createElement("div");
    block.classList.add("description", "block", "accent-color");
    // add some text
    let description = document.createElement("p");
    description.classList.add("description-text");
    description.innerText = blockData.text;
    // add the block to the container
    block.appendChild(description);

    container.appendChild(block);
}

function createDeck(blockData) {

    let block = document.createElement("div");
    block.classList.add("features");
    let deck = document.createElement("div");
    deck.classList.add("deck");
    block.appendChild(deck);
    
    

    for (let i = 0; i < blockData.cards.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.appendChild(createImage({
            src: blockData.cards[i].src,
            alt: blockData.cards[i].altText
        }));

        let body = document.createElement("div");
        body.classList.add("card-body");
        card.appendChild(body);

        body.appendChild(document.createElement("h3")).innerHTML = blockData.cards[i].title;
        body.appendChild(document.createElement("p")).innerHTML = blockData.cards[i].body;

        deck.appendChild(card);
    }

    container.appendChild(block);
}

/* <div class="block accent-color">
            <div class="platforms">
                <ul class="brand-list">
                    <li><i class="fa-brands fa-steam"></i></li>
                    <li><i class="fa-brands fa-playstation"></i></li>
                    <li><i class="fa-brands fa-xbox"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-patreon"></i></li>
                    <li><i class="fa-brands fa-twitch"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                </ul>
            </div> */

function createGameInfo(blockData) {
    let block = document.createElement("div");
    block.classList.add("requirements", "block", "accent-color");
    
    let platforms = document.createElement("div");
    platforms.classList.add("platforms");
    block.appendChild(platforms);
    
    let list = document.createElement("ul");
    
    platforms.appendChild(list);


    for (let i = 0; i < blockData.platforms.length; i++) {

        let listItem = document.createElement("li");
        listItem.innerHTML = blockData.platforms[i];       
        // let icon = document.createElement("i");
        // icon.classList.add("fa-brands", "fa-" + blockData.platforms[i]);

        //listItem.appendChild(icon);
        list.appendChild(listItem);

    }

    // <div class="reqs">
    //             <div>
    //                 <h3>Minimum Requirements</h3>
    //                 <ul>
    //                     <li><strong>OS:</strong> Win7</li>
    //                     <li><strong>Processor:</strong> Intel I3 or Ryzen 3</li>
    //                     <li><strong>RAM:</strong> 8gb</li>
    //                     <li><strong>Graphics:</strong> Geforce GTX 570</li>
    //                     <li><strong>Storage:</strong> 1gb HDD</li>
    //                 </ul>
    //             </div>
    
    let minReqs = document.createElement("div");
    minReqs.classList.add("reqs");
    block.appendChild(minReqs);

    let title = document.createElement("h3");
    title.innerHTML = blockData.requirements.requirements.minReqs.title;
    minReqs.appendChild(title);

    let minReqsList = document.createElement("ul"); 
    minReqs.appendChild(minReqsList);
    
    for (let i = 0; i < blockData.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = blockData.minReqs.minReqsList[i];
        minReqsList.appendChild(listItem);
    }

    let recReqs = document.createElement("div");
    recReqs.classList.add("reqs");
    block.appendChild(recReqs);
    recReqs.appendChild(document.createElement("h3")).innerHTML = blockData.requirements.title;
    let recReqsList = document.createElement("ul");
    recReqs.appendChild(recReqsList);
    for (let i = 0; i < blockData.recreqs.list.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = blockData.recReqs.list[i];
        reqsList.appendChild(listItem);
    }
    container.appendChild(block);
}           




