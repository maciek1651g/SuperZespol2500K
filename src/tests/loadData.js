import publicAPI from "./../publicFunctions/PublicFunctionsAPI.js"

const students = [["starosta", "starosta@sggw.edu.pl", "starosta", "starosta", "starosta", 0],
["student1", "student1@sggw.edu.pl", "student1", "student1", "student1", 0],
["student2", "student2@sggw.edu.pl", "student2", "student2", "student2", 0],
["student3", "student3@sggw.edu.pl", "student3", "student3", "student3", 0],
["student4", "student4@sggw.edu.pl", "student4", "student4", "student4", 0],
["student5", "student5@sggw.edu.pl", "student5", "student5", "student5", 0],
["student6", "student6@sggw.edu.pl", "student6", "student6", "student6", 0],
["student7", "student7@sggw.edu.pl", "student7", "student7", "student7", 0],
["student8", "student8@sggw.edu.pl", "student8", "student8", "student8", 0],
["student9", "student9@sggw.edu.pl", "student9", "student9", "student9", 0],
["student10", "student10@sggw.edu.pl", "student10", "student10", "student10", 0],
["student11", "student11@sggw.edu.pl", "student11", "student11", "student11", 0],
["student12", "student12@sggw.edu.pl", "student12", "student12", "student12", 0],
["student13", "student13@sggw.edu.pl", "student13", "student13", "student13", 0],
["student14", "student14@sggw.edu.pl", "student14", "student14", "student14", 0],
["student15", "student15@sggw.edu.pl", "student15", "student15", "student15", 0],
["student16", "student16@sggw.edu.pl", "student16", "student16", "student16", 0],
["student17", "student17@sggw.edu.pl", "student17", "student17", "student17", 0],
["student18", "student18@sggw.edu.pl", "student18", "student18", "student18", 0],
["student19", "student19@sggw.edu.pl", "student19", "student19", "student19", 0],
["student20", "student20@sggw.edu.pl", "student20", "student20", "student20", 0],
["student21", "student21@sggw.edu.pl", "student21", "student21", "student21", 0],
["student22", "student22@sggw.edu.pl", "student22", "student22", "student22", 0],
["student23", "student23@sggw.edu.pl", "student23", "student23", "student23", 0],
["student24", "student24@sggw.edu.pl", "student24", "student24", "student24", 0],
["student25", "student25@sggw.edu.pl", "student25", "student25", "student25", 0],
["student26", "student26@sggw.edu.pl", "student26", "student26", "student26", 0],
["student27", "student27@sggw.edu.pl", "student27", "student27", "student27", 0],
["student28", "student28@sggw.edu.pl", "student28", "student28", "student28", 0],
["student29", "student29@sggw.edu.pl", "student29", "student29", "student29", 0],
["student30", "student30@sggw.edu.pl", "student30", "student30", "student30", 0],
["student31", "student31@sggw.edu.pl", "student31", "student31", "student31", 0],
["student32", "student32@sggw.edu.pl", "student32", "student32", "student32", 0],
["student33", "student33@sggw.edu.pl", "student33", "student33", "student33", 0],
["student34", "student34@sggw.edu.pl", "student34", "student34", "student34", 0],
["student35", "student35@sggw.edu.pl", "student35", "student35", "student35", 0],
["student36", "student36@sggw.edu.pl", "student36", "student36", "student36", 0],
["student37", "student37@sggw.edu.pl", "student37", "student37", "student37", 0],
["student38", "student38@sggw.edu.pl", "student38", "student38", "student38", 0],
["student39", "student39@sggw.edu.pl", "student39", "student39", "student39", 0],
["student40", "student40@sggw.edu.pl", "student40", "student40", "student40", 0],
["student41", "student41@sggw.edu.pl", "student41", "student41", "student41", 0],
["student42", "student42@sggw.edu.pl", "student42", "student42", "student42", 0],
["student43", "student43@sggw.edu.pl", "student43", "student43", "student43", 0],
["student44", "student44@sggw.edu.pl", "student44", "student44", "student44", 0],
["student45", "student45@sggw.edu.pl", "student45", "student45", "student45", 0],
["student46", "student46@sggw.edu.pl", "student46", "student46", "student46", 0],
["student47", "student47@sggw.edu.pl", "student47", "student47", "student47", 0],
["student48", "student48@sggw.edu.pl", "student48", "student48", "student48", 0],
["student49", "student49@sggw.edu.pl", "student49", "student49", "student49", 0],
["student50", "student50@sggw.edu.pl", "student50", "student50", "student50", 0],
["student51", "student51@sggw.edu.pl", "student51", "student51", "student51", 0],
["student52", "student52@sggw.edu.pl", "student52", "student52", "student52", 0],
["student53", "student53@sggw.edu.pl", "student53", "student53", "student53", 0],
["student54", "student54@sggw.edu.pl", "student54", "student54", "student54", 0],
["student55", "student55@sggw.edu.pl", "student55", "student55", "student55", 0],
["student56", "student56@sggw.edu.pl", "student56", "student56", "student56", 0],
["student57", "student57@sggw.edu.pl", "student57", "student57", "student57", 0],
["student58", "student58@sggw.edu.pl", "student58", "student58", "student58", 0],
["student59", "student59@sggw.edu.pl", "student59", "student59", "student59", 0],
["student60", "student60@sggw.edu.pl", "student60", "student60", "student60", 0],
["admin123", "admin123@sggw.edu.pl", "admin123", "admin123", "admin123", 0]]


function loadStudents() {
    for (let i = 0; i < students.length; i++) {
        publicAPI.register(...students[i],()=>{});
    }
    loadGroup();
}

const group = ["Rocznik 2018/2021"];
let groupID = "986f7465-5a79-43fd-9e4b-26cd21433231";

function loadGroup() {
    publicAPI.createGroup(...group, (res) => {
        if(res!==null)
        {
            groupID = res.id;
        }
        loadTeams();
    });
}

const teams = ["Systemy informacyjne 1", "Systemy informacyjne 2", "Sieci komputerowe", "Multimedia"];

function loadTeams() {
   publicAPI.createTeams(teams, groupID, ()=>{loadStudentsToGroup()});
}

function loadStudentsToGroup()
{
    let emails = [];
    for(let i=0;i<students.length;i++)
    {
        emails.push(students[i][1]);
    }
    publicAPI.addUsersToGroup(emails, groupID, ()=>{loadCurses()});
}

const location = {address:{streetName: "Nowoursynowska", buildingNumber: "34", city: "Warszawa"}, link: "wzim.sggw.pl", room: "13"};
const courses = [{name: "Ochrona informacji i bezpieczeństwo systemów komputerowych", lecturer: "Dariusz Strzęsiwilk", location: location,  semester: 6},
                {name: "Systemy wbudowane", lecturer: "Bartłomiej Kubica", location: location,  semester: 6},
                {name: "Wizualizacja danych", lecturer: "Leszek Chmielewski", location: location,  semester: 6},
                {name: "Programowanie w Internecie", lecturer: "Izabela Antoniuk", location: location,  semester: 6},
                {name: "Seminarium dyplomowe", lecturer: "Ryszard Kozera", location: location,  semester: 6},
                {name: "Systemy przetwarzania danych", lecturer: "Rafik Nafkha", location: location,  semester: 6},
                {name: "Usługi sieciowe", lecturer: "Jarosław Kurek", location: location,  semester: 6},
                {name: "Grafika komputerowa", lecturer: "Andrzej Śluzek", location: location,  semester: 6},
                {name: "Podstawy przetwarzania dźwięku", lecturer: "Piotr Wrzeciono", location: location,  semester: 6},
                {name: "Metody Data Mining", lecturer: "Marek Karwański", location: location,  semester: 6}];

function loadCurses() {
    publicAPI.createCourses(courses, groupID, ()=>{console.log("Dane załadowane!")});
}

export default loadStudents;