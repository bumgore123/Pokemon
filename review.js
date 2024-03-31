// 1번 문제: myHobby 라는 변수를 만들고 "basketball" 이라는 값 저장하기

// const 변수 이름 = 값
const myHobby = "basketball";

// 배열 Array

// 2번 문제: myFamily 라는 변수를 만들고, "엄마", "아빠", "누나", "형", "범주"
const myamily = ["엄마", "아뺘", "누나", "형", "범주"]


const myFavoriteNumber = 34
const TeachersFavorite = 99

console.log(myFavoriteNumber + TeachersFavorite);


// 3번 문제: myFamily 의 3번째에는 누가있는지 콘솔에 출력
console.log(myFamily[2])

                               
// Object

// 속성 (이름, 값)

const pikachu = { level: 10, type: "electric", skills: ["100만볼트", "몸통박치기", "전광석화"], HP: 70, attack: 30, friend: [] }
const charmander = { level: 15, type: "fire", skills: ["화염방사", "불재문자", "할퀴기"], HP: 120, attack: 50, friend: [] }
const squirtle = { level: 30, type: "water", skills: ["물대포", "하이드로펌프", "물방울"], HP: 200, attack: 70, friend: [] }
const bulbasaur = { level: 20, type: "plant", skills: ["꽃 피우기", "바람 날리기", "자연 힐링하기"], HP: 150, attack: 20, friend: [] }

// 피카츄 친구들 추가
pikachu.friend.push(charmander)
pikachu.friend.push(squirtle)
bulbasaur.friend.push(squirtle)
charmander.friend.push(pikachu)
squirtle.friend.push(pikachu)
squirtle.friend.push(bulbasaur)

// 상황: 피카츄가 파이리를 공격 -> 파이리의 남은 HP 를 콘솔에 출력 (90)
console.log("피카츄 공격!", "파이리의 남은 채력=", charmander.HP - pikachu.attack)

// 
console.log(charmander.skills[2], pikachu.skills[1])

// friend 속성

// 피카츄는 파이리, 꼬북이랑 친구
// 꼬북이는 피카츄랑 이상해씨랑 친구
// 파이리는 피카츄랑만 친구
// 이상해씨는 꼬북이랑만 친구

// 보스 질문 🔥
// 피카츄의 두번째친구의 스킬중 맨 마지막 스킬은??? (콘솔에 출력)
console.log(pikachu.friend[1].skills[2])


// 숙제:

// 범주 object 만들기
// 노준휘 object 만들기

// name, age, school, languages, friend, hobbies, favorite_games
// favorite_games 는 Object 배열
// {name, type (RPG, MOBA), company}

const 범주 = { name: "범주", age: 14, school: "North Gwinnet MiddleSchool", languages: ["korean", "English"], friend: [], hobbies: ["play game", "tennis"], favorite_games: { name: "Valorant", type: "shooting Game", company: "RIOT" } }
const 준휘 = { name: "준휘", age: 14, school: "성서중", languages: ["korean", "English", "or more"], friend: [], hobbies: "I don't know", favorite_games: { name: "Valorant", type: "shooting Game", company: "RIOT" } }

범주.friend.push(준휘)
준휘.friend.push(범주)
// Favorite Games

// 롤토체스, Strategy, Riot               Object 1
// Valorant, Shooting Game, Riot        Object 2
// League of Legend, MOBA, Riot         Object 3


const myFavoriteGames = [{ name: "롤토체스", type: "Strategy", company: "RIOT" }, { name: "Valorant", type: "Shooting", company: "RIOT" }, { name: "LOL", type: "MOBA", company: "RIOT" }]

myFavoriteGames.push({ name: "LEft 4 dead", type: "shooting game", company: "ABC Games" })




const INPUT_BOX = document.getElementById("input")
        
// 검색창의 현재 값
function myFunction() {
    alert(INPUT_BOX.value+"을(를) 뽑고있습니다. 잠시만 기다려주세요")
}